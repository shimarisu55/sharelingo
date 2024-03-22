import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useEffect, useState } from "react";
import invitationEnv from "../../invitationEnv.json";

export default function ButtonWithInvitation() {
  const [open, setOpen] = useState(false);
  const [invitationCode, setInvitationCode] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          らら@non5515_vrchat(Xアカウント)
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  useEffect(() => {    
    // 招待コードの作成
    const min = Math.ceil(invitationEnv.min) * invitationEnv.prime_number;
    const max = Math.floor(invitationEnv.max)* invitationEnv.prime_number;
    const randomCode = Math.floor(Math.random() * (max - min) + min);
    setInvitationCode(randomCode)
  }, []);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        紹介する
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          紹介コード： {invitationCode}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            サイト使用のために必要な紹介コードです。サイトのurlと一緒に送ってください。
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
          　
          <DialogContentText id="alert-dialog-description">
            しぇありんごとは？
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          おうち英語を営む家庭向けに作られた、音声ペン用の音源を共有する内輪サイトです。
          著作権の関係上あくまで「内輪」でやるため招待制としていますが、必要な人には誰にでも届いて活用してもらえたら嬉しいです。
          もちろん投稿も歓迎です。
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          ＊悪意のある投稿やユーザーを発見した場合、予告なく削除させていただくことがあります。
          </DialogContentText>
          <Copyright />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}