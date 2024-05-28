import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DownloadIcon from '@mui/icons-material/Download'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
  const [doNotShowAgain, setDoNotShowAgain] = React.useState(false);

  // 「今後ダイアログ表示しない」にチェックいれたかで変わる
  const handleClickDownloadButton = () => {
    // resetLocalStorage() // 開発用
    const doNotShowDialog = localStorage.getItem('doNotShowComfirmDownloadDialog');
    console.log(doNotShowDialog)
    if (doNotShowDialog == "true") {
      // ダイアログを開かず、ダウンロード
      downLoadFromS3()
    } else {
      // ダイアログ表示
      setOpen(true);
    }
  };

  // // 開発用
  // const resetLocalStorage = () => {
  //   localStorage.setItem('doNotShowComfirmDownloadDialog', "false");
  // }

  const handleClose = () => {
    if (doNotShowAgain) {
      localStorage.setItem('doNotShowComfirmDownloadDialog', "true");
    }
    setOpen(false);
  };

  // 今後このダイアログをチェックしない
  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setDoNotShowAgain(event.target.checked);
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
      <Button onClick={handleClickDownloadButton}><DownloadIcon /></Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">ダウンロードしますか？</DialogTitle>
        <FormControlLabel 
          control={<Checkbox
            checked={doNotShowAgain}
            onChange={handleCheckboxChange}
          />} 
          label="以降このダイアログを表示しない"
          style={{ marginLeft: '20px' }}
        />
        <DialogActions>
          <Button onClick={downLoadFromS3}>はい</Button>
          <Button onClick={handleClose}>いいえ</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}