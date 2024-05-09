import * as React from "react";
import { Autocomplete, Grid } from "@aws-amplify/ui-react";
import { useState } from 'react';

// リアルタイム検索用の関数
interface SearchProps {
  searchSeriesTitles: (inputWord: string) => void;
}

export default function SearchForm(props: SearchProps) {
  const { searchSeriesTitles } = props;

  // テキストフィールド自動反映
  const initialValues = {
    SearchField: ""
  };
  const [SearchField, setSearchField] = useState(initialValues.SearchField);

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
    >
      <Autocomplete
        label=""
        placeholder="Peppa Pig"
        isRequired={false}
        options={[]}
        onClear={() => {
          setSearchField("");
          {searchSeriesTitles("")}
        }}
        onChange={(e) => {
          let { value } = e.target;
          setSearchField(value);
          {searchSeriesTitles(value)}
        }}
        labelHidden={false}
      ></Autocomplete>
    </Grid>
  );
}
