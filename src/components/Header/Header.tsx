import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ButtonWithInvitation from './ButtonWithInvitation';
import { signOut } from 'aws-amplify/auth';

interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;
  const envName = process.env.REACT_APP_ENV_NAME ?? "";

  async function handleSignOut() {
    try {
      await signOut();
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button onClick={handleSignOut}>ログアウト</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title} 
        </Typography>
        <Typography>{envName}</Typography>
        <ButtonWithInvitation />
      </Toolbar>
    </React.Fragment>
  );
}