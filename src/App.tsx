import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Header from './components/Header/Header'
import Main from "./components/Main/Main"
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import { Authenticator } from '@aws-amplify/ui-react';

const defaultTheme = createTheme();

const initialValues = {
  seriesID: "",
  seriesTitle: ""
}

  // 招待コードを追加したフォームフィールド	
const formFields = {
  signUp: {
    "custom:invitation": {
      placeholder: "招待コードを入力してください", // 6桁の数字
      order: 1,
    },
    username: {
      order: 2
    },
    email: {
      order: 3
    },
    password: {
      order: 4,
    },
  },
};

export function App() {
  const [seriesID, setSeriesID] = useState(initialValues.seriesID);
  const [showSeriesTitle, setSeriesTitle] = useState(initialValues.seriesTitle);

  // sidebarのリストがクリックされた時の関数
  const clickListItems = (seriesId: string, seriesTitle: string) => {
    setSeriesID(seriesId)
    setSeriesTitle(seriesTitle)
  }

  return (
    <Authenticator
      initialState="signIn"
      formFields={formFields}         
    >
    {({ }) => (
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header title="しぇありんご" />
          <main>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <Sidebar clickListItems={clickListItems} />
              <Main seriesIDByParent={seriesID} seriesTitleByParent={showSeriesTitle}/>
            </Grid>
          </main>
          <Footer />
        </Container>
      </ThemeProvider>
    )}
    </Authenticator>
  );
  
}

export default App;
