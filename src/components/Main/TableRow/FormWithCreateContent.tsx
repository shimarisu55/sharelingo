/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
} from "@aws-amplify/ui-react";
import { Typography } from "@mui/material";
import ToggleButton from './ToggleButton'
import DialogContentText from '@mui/material/DialogContentText';
import { GraphQLResult, generateClient } from 'aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import { CreatePictureBookContentInput, CreatePictureBookContentMutation } from '../../../API';
import { getCurrentUser } from "aws-amplify/auth";
// Polly
import { putStorageWithPolly } from '../../../Polly/putStorageWithPolly';
import { playBackWithPolly } from '../../../Polly/playBackWithPolly';

interface FormWithCreateContentProp {
  pictureBookID: string;
  nextContentNumber: number;
  onClose: () => void;  
}

export default function FormWithCreateContent(props: FormWithCreateContentProp) {
  const { pictureBookID, nextContentNumber, onClose } = props;
  const initialValues = {
    textEng: "",
  };
  const client = generateClient();
  const [contentNumber, setContentNumber] = React.useState(nextContentNumber);
  const [textEng, setTextEng] = React.useState(initialValues.textEng);

  // DynamoDB登録
  const registerContent = async (s3path: string) => {
    const content: CreatePictureBookContentInput = {
      pictureBookId: pictureBookID,
      num: contentNumber,
      textEng: textEng,
      soundSource: s3path,
    }
    const create = async () => {
      const newProfile = await client.graphql({
        query: mutations.createPictureBookContent,
        variables: { input: content }
      }) as GraphQLResult<CreatePictureBookContentMutation>;
      try {
        newProfile;
      } catch (error) {
        console.log('Error', error)
      }
      onClose()
    }
    create()
  }

  // １ページごとか、絵本全体かでnumberを決める。絵本全体の時は0
  const dicideContentNumber = (toggle: string) => {
    if (toggle == "left") {
        setContentNumber(nextContentNumber)
    } else {
        setContentNumber(0)
    }
  }

  // S3に音声を保存
  const saveSoundToS3 = async () => {
    const savedSoundName = await putStorageWithPolly(textEng)
    // 音声のパスを含めてDynamoDBに登録
    registerContent(savedSoundName)
  }

  // Pollyで再生
  const playSound = async () => {
    playBackWithPolly(textEng)
  }

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
    >
      <Typography>番号：{contentNumber}</Typography>
      <ToggleButton dicideContentNumber={dicideContentNumber} />
      <TextAreaField
        label="English Text"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          setTextEng(value);
        }}
      ></TextAreaField>
      <DialogContentText>改行を入れるとAIが読むとき１秒待ってくれます。</DialogContentText>  
      <Flex justifyContent="space-between">
        <Flex gap="15px">
          <Button
            children="キャンセル"
            type="button"
            onClick={onClose}
          ></Button>
          { (textEng) ?
            <>
              <Button
                children="再生"
                type="button"
                onClick={playSound}
              ></Button>
              <Button
                children="投稿"
                type="button"
                onClick={saveSoundToS3}
              ></Button>
            </>
            : <></> 
          }
        </Flex>
      </Flex>
    </Grid>
  );
}
