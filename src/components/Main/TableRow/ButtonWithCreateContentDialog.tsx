import * as React from 'react';
import Button from '@mui/material/Button';
import UploadIcon from '@mui/icons-material/Upload';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormWithCreateContent from './FormWithCreateContent'

interface DialogProps {
  pictureBookID: string;
  nextContentNumber: number;
}

export default function ButtonWithCreateContentDialog(props: DialogProps) {
  const { pictureBookID, nextContentNumber } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" size="small" onClick={handleClickOpen}>
        <UploadIcon />
      </Button>
      <Dialog open={open}>
        <DialogContent>
          <FormWithCreateContent onClose={handleClose} 
          pictureBookID={pictureBookID} nextContentNumber={nextContentNumber}/>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}