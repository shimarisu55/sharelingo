import * as React from 'react';
import { Button } from '@mui/material/';
import { TextAreaField } from "@aws-amplify/ui-react";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../../../../graphql/mutations';
import { UpdatePictureBookContentInput, PictureBookContent } from '../../../../../API';
import { putStorageWithPolly } from '../../../../../Polly/putStorageWithPolly';
import { remove } from 'aws-amplify/storage';

interface DialogEditTextProps {
  handleClose: () => void;
  pictureBookContent: PictureBookContent
}

export default function DialogEditText(prop: DialogEditTextProps) {
  const { pictureBookContent, handleClose} = prop;
  const [textEng, setTextEng] = React.useState(pictureBookContent.textEng);

  // S3の音声を更新
  const updateSoundToS3 = async (text: string) => {
    removeS3()
    const newSoundName = await putStorageWithPolly(text)
    // 音声のパスを含めてDynamoDBに登録
    updatePictureBookContent(newSoundName)
  }

  // s3の既存の音声を削除
  const removeS3 = async () => {
    if (!pictureBookContent.soundSource) return;
    try {
      await remove({ key: pictureBookContent.soundSource });
    } catch (error) {
      console.log('Error ', error);
    }
  }

  // DynamoDB content変更
  const updatePictureBookContent = (newSoundName: string) => {
    const client = generateClient();
    const content: UpdatePictureBookContentInput = {
      id: pictureBookContent.id,
      _version: pictureBookContent._version,
      textEng: textEng,
      soundSource: newSoundName
    }
    const updateContent = async () => {
      const updateDB = client.graphql({
        query: mutations.updatePictureBookContent,
        variables: { input: content }
      }) 
      try {
        await updateDB
      } catch(error) { 
        console.log('Error ', error);
      }
    }
    handleClose()
    updateContent() 
  }

  return (
    <React.Fragment>
      <DialogTitle id="scroll-dialog-title">編集中</DialogTitle>
      <DialogContent>
        <TextAreaField
          label=""
          defaultValue={pictureBookContent.textEng ? pictureBookContent.textEng : ""} 
          isRequired={false}
          isReadOnly={false}
          onChange={(e) => {
          let { value } = e.target;
            setTextEng(value);
          }}
        ></TextAreaField>
        <DialogContentText>修正完了後、画面反映まで時間がかかります。</DialogContentText>  
      </DialogContent>
      <DialogActions>
        { (textEng) ? <Button type="button" onClick={() => updateSoundToS3(textEng)} >修正完了</Button> : null }
        <Button onClick={handleClose}>とじる</Button>
      </DialogActions>  
    </React.Fragment>
  );
}
