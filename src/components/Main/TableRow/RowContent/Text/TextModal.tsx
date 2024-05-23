import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogShowText from './DialogShowText';
import DialogEditText from './DialogEditText';
import { PictureBookContent } from "../../../../../API";
import { getCurrentUser } from 'aws-amplify/auth';

interface TextModal {
  pictureBookContent: PictureBookContent
}

// コンテンツの中から１行だけ取り出す
const getFirstLine = (text: string) => {
  const lines = text.split('\n');
  return lines.length > 1 ? `${lines[0]}...` : lines[0];
};

export default function TextMordal(props: TextModal) {
  const { pictureBookContent } = props;
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const firstLine = getFirstLine(pictureBookContent.textEng ?? "");

  useEffect(() => { 
    const getUserAuth = async () => {   
      const { username } = await getCurrentUser();
      const isAuthenticated = pictureBookContent.owner === username
      setIsAuth(isAuthenticated);
    }
    getUserAuth();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(false);
  };

  const handleClickEditing = () => {
    setEditing(!editing);
  }



  return (
    <React.Fragment>
      <Button sx={{ textTransform: "none" }} onClick={handleClickOpen}>
        {firstLine}
      </Button>
      <Dialog open={open}>
        { editing ?
          <DialogEditText pictureBookContent={pictureBookContent} handleClose={handleClose} />
        : <DialogShowText pictureBookContent={pictureBookContent}/>
        }
        { editing ? null
        : <DialogActions>
            { isAuth ? <Button onClick={handleClickEditing}>変更</Button> : <></> }
            <Button onClick={handleClose}>とじる</Button>
          </DialogActions>
        }
      </Dialog>
    </React.Fragment>
  );
}