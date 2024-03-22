import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DownloadIcon from '@mui/icons-material/Download'
// storage
import { downloadData, DownloadDataOutput } from 'aws-amplify/storage';

interface DownloadFile {
  pictureBookTitle: string;
  pictureBookNum: number;
  soundSource: string;
}

export default function ButtonWithDownloadFile(props: DownloadFile) {
  const { pictureBookTitle, pictureBookNum, soundSource } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // S3からダウンロード
  const downLoadFromS3 = async () => {
    try {
        const response: DownloadDataOutput = await downloadData({ key: soundSource });
        const blob =  await (await response.result).body.blob();
        downloadBlob(blob)
    } catch (error) {
        console.log('Error : ', error);
    }
  };

  
  // ローカルにダウンロード
  const downloadBlob = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = pictureBookTitle + '_' + pictureBookNum || 'download';
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.removeEventListener('click', clickHandler);
      }, 150);
    };
    a.addEventListener('click', clickHandler, false);
    a.click();
    return a;
  }

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen}><DownloadIcon /></Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">ダウンロードしますか？</DialogTitle>
        <DialogActions>
          <Button onClick={downLoadFromS3}>はい</Button>
          <Button onClick={handleClose}>いいえ</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}