import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../../../graphql/mutations';
import { DeletePictureBookContentInput } from '../../../../API';
import { remove } from 'aws-amplify/storage';

interface ButtonWithDeleteContentDialogProps {
  pictureBookContentId: string;
  version: number;
  soundSource: string | null | undefined;
}

export default function ButtonWithDeleteContentDialog(props: ButtonWithDeleteContentDialogProps) {
  const { pictureBookContentId, version, soundSource } = props
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // DynamoDB content削除
  const deletePictureBookContent = () => {
    const client = generateClient();
    const content: DeletePictureBookContentInput = {
      id: pictureBookContentId,
      _version: version
    }
    const deleteContent = async () => {
      const deletePictureBookContent = await client.graphql({
        query: mutations.deletePictureBookContent,
        variables: { input: content }
      })
      removeS3() 
      handleClose()
    }
    deleteContent() 
  }

  // s3からも削除
  const removeS3 = async () => {
    if (!soundSource) return;
    try {
      await remove({ key: soundSource });
    } catch (error) {
      console.log('Error ', error);
    }
  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        <DeleteIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          本当に削除しますか？
        </DialogTitle>
        <DialogActions>
          <Button type="button" onClick={deletePictureBookContent}>はい</Button>
          <Button onClick={handleClose} autoFocus>いいえ</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}