import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import FormWithCreatePictureBook from './FormWithCreatePictureBook'

interface DialogProps {
    seriesID: string
  }

export default function ButtonWithCreatePictureBookDialog(props: DialogProps) {
  const { seriesID } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        絵本追加
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
          <FormWithCreatePictureBook onClose={handleClose} seriesID={seriesID}/>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}