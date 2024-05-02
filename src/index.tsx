import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
// 日本語対応
import { I18n } from 'aws-amplify/utils';
import { jaDict } from "./Auth/vocabularies";

Amplify.configure(config);
I18n.putVocabularies(jaDict);
I18n.setLanguage('ja');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
