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

export default function TextMordal(props: TextModal) {
  const { pictureBookContent } = props;
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => { 
    const getUserId = async () => {   
      const { userId } = await getCurrentUser();
      const isAuthenticated = pictureBookContent.createdBy === userId
      setIsAuth(isAuthenticated);
    }
    getUserId();
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
      <Button onClick={handleClickOpen}>Text</Button>
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