/* eslint-disable */
import * as React from "react";
import {
  Flex,
  Grid,
  TextAreaField,
} from "@aws-amplify/ui-react";
import { Typography, Stack, Button } from "@mui/material";
import ToggleButton from './ToggleButton'
import DialogContentText from '@mui/material/DialogContentText';
import { GraphQLResult, generateClient } from 'aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import { CreatePictureBookContentInput, CreatePictureBookContentMutation } from '../../../API';
// Polly
import { putStorageWithPolly } from '../../../Polly/putStorageWithPolly';
import { playBackWithPolly } from '../../../Polly/playBackWithPolly';
// openAI
import OpenAI from "openai";

const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY ?? "";

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
  const [japaneseText, setJapaneseText] = React.useState("")
  const [showForm, setShowForm] = React.useState(false);

  // DynamoDB登録
  const registerContent = async (s3path: string) => {
    const content: CreatePictureBookContentInput = {
      pictureBookId: pictureBookID,
      num: contentNumber,
      textEng: textEng,
      textJap: japaneseText,
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

  // 日本語入力フォームを表示
  const toggleFormVisibility = () => setShowForm(!showForm);

  // Chat GPTを使って日本語から英語に翻訳
  const translateText = async () => {
    const openai = new OpenAI({
      apiKey: process.env.REACT_APP_OPENAI_KEY, // 先程取得したAPI KEY
      dangerouslyAllowBrowser: true
    })
    const message = "次の日本語を英語に訳してください。「" + japaneseText + "」"
    const completion = await openai.chat.completions.create({
                  model: "gpt-3.5-turbo", // 使いたいGPTのModel
                  messages: [{ "role": "user", "content": message }],
    });
    const answer = completion.choices[0].message.content ?? "訳せませんでした。";
    setTextEng(answer);
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
      <Stack direction="row" spacing={4}>
        <ToggleButton dicideContentNumber={dicideContentNumber} />
        <Button
          variant="contained"
          size="small"
          children="日本語入力"
          type="button"
          onClick={toggleFormVisibility}
        ></Button>
      </Stack>
      
      {showForm ? <div>
        <Stack direction="row" spacing={4} justifyContent="space-between">
          <Typography>日本語入力</Typography>
          { (japaneseText) ?
            <Button
              variant="outlined"
              children="翻訳"
              type="button"
              onClick={translateText}
            ></Button>
            : null 
          }
        </Stack>
        <TextAreaField
          label=""
          placeholder="日本語の本文を入力してください。"
          isRequired={false}
          isReadOnly={false}
          onChange={(e) => {
            let { value } = e.target;
            setJapaneseText(value);
          }}
        ></TextAreaField>
        </div>
     : null}

      <TextAreaField
        label="English Text"
        placeholder="Write English Text"
        defaultValue={textEng}
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
            variant="outlined"
            children="キャンセル"
            type="button"
            onClick={onClose}
          ></Button>
          { (textEng) ?
            <>
              <Button
                variant="outlined"
                children="再生"
                type="button"
                onClick={playSound}
              ></Button>
              <Button
                variant="contained"
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
