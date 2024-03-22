import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { PictureBookContent } from '../../../../../API';

interface TextModal {
  pictureBookContent: PictureBookContent
}

export default function DialogShowText(prop: TextModal) {
  const { pictureBookContent } = prop;

  return (
    <React.Fragment>
      <DialogTitle id="scroll-dialog-title">Text</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ whiteSpace: 'pre-line' }}>
          {pictureBookContent.textEng}
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
  );
}
