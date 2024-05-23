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
    const primeString = process.env.REACT_APP_INV_PRIME_NUMBER ?? "";
    const prime = parseInt(primeString,10)
    const min = 100000; // 6桁の最小値
    const max = 999999; // 6桁の最大値
    // 6桁の範囲内で4423の倍数の最小値と最大値を計算
    const minMultiple = Math.ceil(min / prime);
    const maxMultiple = Math.floor(max / prime);
    // ランダムに4423の倍数を選ぶ
    const randomMultiple = Math.floor(Math.random() * (maxMultiple - minMultiple + 1)) + minMultiple;
    // 素数の倍数を計算
    const randomSixDigitNumber = randomMultiple * prime;
    setInvitationCode(randomSixDigitNumber)
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
          <DialogContentText>
            サイト使用のために必要な紹介コードです。サイトのurlと一緒に送ってください。
          </DialogContentText>
          <DialogContentText>
          </DialogContentText>
          　
          <DialogContentText>
            しぇありんごとは？
          </DialogContentText>
          <DialogContentText>
          おうち英語を営む家庭向けに作られた、音声ペン用の音源を共有する内輪サイトです。
          自宅にある絵本のテキストを入力すると、chatGPTが英語に翻訳してくれます。
          ついでに英文の音源も作ったので、自由にダウンロードして使ってください。
          著作権の関係上あくまで「内輪」でやるため招待制としていますが、必要な人には誰にでも届いて活用してもらえたら嬉しいです。
          もちろん投稿も歓迎です。
          </DialogContentText>
          <DialogContentText>
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