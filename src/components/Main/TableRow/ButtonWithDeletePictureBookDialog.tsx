import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';

import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../../graphql/mutations';
import { DeletePictureBookInput } from '../../../API';

interface ButtonWithDeletePictureBookDialogProps {
  pictureBookId: string;
  version: number;
}

export default function ButtonWithDeletePictureBookDialog(props: ButtonWithDeletePictureBookDialogProps) {
  const { pictureBookId, version } = props
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // DynamoDB PictureBook削除
  const deletePictureBook = () => {
    const client = generateClient();
    const content: DeletePictureBookInput = {
      id: pictureBookId,
      _version: version
    }
    const deleteContent = async () => {
      const deletePictureBook = await client.graphql({
        query: mutations.deletePictureBook,
        variables: { input: content }
      })
      handleClose()
    }
    deleteContent() 
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
          この絵本を本当に削除しますか？
        </DialogTitle>
        <DialogActions>
          <Button type="button" onClick={deletePictureBook}>はい</Button>
          <Button onClick={handleClose} autoFocus>いいえ</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}