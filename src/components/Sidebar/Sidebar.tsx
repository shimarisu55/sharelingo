import * as React from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm"
import SidebarList from "./SidebarList"
import ButtonWithCreateSeriesDialog from '../Sidebar/ButtonWithCreateSeriesDialog';

import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries';
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { ListSeriesQuery } from "../../API";

interface SidebarProps {
  clickListItems: (id: string, seriesTitle: string) => void; // クリックしたらMainで絵本一覧を表示
}

export default function Sidebar(props: SidebarProps) {
  const { clickListItems } = props;
  const initialValues = {
    series: [{ id: "", seriesTitle: ""}]
  };
  // APIからとってきたデータを保存
  const [fetchedSeriesTitles, setFetchedSeriesTitles] = useState(initialValues.series);
  // 実際に表示するデータを格納
  const [showSeriesTitles, setSeriesTitles] = useState(initialValues.series);

  const client = generateClient();

  useEffect(() => {   
    // 初期化
    setFetchedSeriesTitles(initialValues.series)
    const fetch = async () => {
      const api = await client.graphql({
        query: queries.listSeries,
      }) as GraphQLResult<ListSeriesQuery>;
      const listPictureBooks = api.data.listSeries?.items;
      
      if (listPictureBooks) {
        let series = initialValues.series
        series.pop()
        listPictureBooks.forEach((item) => {
          if (item?.seriesTitle) {
            setFetchedSeriesTitles(prev => [...prev, { id: item.id, seriesTitle: item.seriesTitle }]);
            series.push({ id: item.id, seriesTitle: item.seriesTitle });
          }
        });
      }
    };
    fetch()
    .then(() => { setSeriesTitles(fetchedSeriesTitles) });
  }, []);

  //　リアルタイム検索用の関数
  const selectSeriesTitle = (inputWord: string) => {
    // 空欄になったらリセット
    if (inputWord == "") {
      setSeriesTitles(fetchedSeriesTitles);
      return;
    }
    const result = fetchedSeriesTitles.filter(
      (item) => item.seriesTitle.toLowerCase().includes(inputWord.toLocaleLowerCase())
    )
    if (result.length) {
      setSeriesTitles(result)
    } else {
      // DBにないとき
      setSeriesTitles([{ id: "non", seriesTitle: ""}])
    }
  };

  return (
    <Grid item xs={12} md={4}>
      <SearchForm searchSeriesTitles={selectSeriesTitle} />
      { showSeriesTitles[0].id == "non" ?
        <Stack direction="row" columnGap="15px" padding="10px">
          <Typography variant="body1" color={red[500]}> ありません。新しく作成してください。</Typography>
          <ButtonWithCreateSeriesDialog />
        </Stack>
      : null
      }
      {/* // シリーズ名のリストは10件以内にする */}
      { showSeriesTitles.map((item, index) => {
        if (index > 9) { return null } 
        return (
          <SidebarList key={item.id} listItem={item} clickListItems={clickListItems} />
        )
      })}
    </Grid>
  );
}