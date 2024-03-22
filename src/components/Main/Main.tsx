
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import PictureBookTable from "./PictureBookTable"
import ButtonWithCreatePictureBookDialog from './ButtonWithCreatePictureBookDialog';
import { useEffect, useState } from "react";

import { generateClient } from 'aws-amplify/api';
import * as queries from '../../graphql/queries';
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { ListPictureBooksQuery, PictureBook } from "../../API";
import * as subscriptions from '../../graphql/subscriptions';

interface MainProps {
  seriesIDByParent: string,
  seriesTitleByParent: string
}

const initialValues = {
  booksBySeriesTitle: Array<PictureBook> 
}

export function Main(props: MainProps) {
  const { seriesIDByParent, seriesTitleByParent } = props;

  const [seriesID, setSeriesID] = useState(seriesIDByParent);
  const [showSeriesTitle, setSeriesTitle] = useState(seriesTitleByParent);
  const [booksBySeriesTitle, setBooksBySeriesTitle] = useState(initialValues.booksBySeriesTitle);

  const client = generateClient();

  // 絵本のidをもとに絵本全体の情報をAPI呼び出し   
  useEffect(() => { 
    const variables = {
      filter: {
        seriesPictureBooksId: {
          eq: seriesIDByParent
        },
        _deleted: { ne: true }  // 削除フラグ
      }
    };
    const getBooks = async () => {
      // 初期化
      setBooksBySeriesTitle([])
      const apiResult = (await client.graphql({
        query: queries.listPictureBooks,
        variables: variables
      })) as GraphQLResult<ListPictureBooksQuery>;
      const listPictureBooks = apiResult.data.listPictureBooks;
      if (listPictureBooks) {
        listPictureBooks.items.forEach((item) => {
          if (item) {
            setBooksBySeriesTitle(prev => [...prev, item]);
          }
        });
      }
    };
    getBooks();
    setSeriesID(seriesIDByParent)
    setSeriesTitle(seriesTitleByParent)

    // サブスクライブ　pictureBookが更新・削除されたら再fetch
    const subscribeCreate = client.graphql({
      query: subscriptions.onCreatePictureBook
    })
    .subscribe({
      next: () => { getBooks() },
      error: (error) => console.warn(error)
    });
    return () => {
      subscribeCreate.unsubscribe();
    }
  }, [seriesIDByParent]);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      { showSeriesTitle == "" ? null : 
      <Stack direction="row" columnGap="15px" padding="10px">
        <Typography variant="h6">{showSeriesTitle}</Typography>
        <ButtonWithCreatePictureBookDialog seriesID={seriesID} /> {/*絵本追加ボタン */}
      </Stack>}  
      <Divider />
      <PictureBookTable booksBySeriesTitle={booksBySeriesTitle}/> {/* 絵本Content */}
    </Grid>
  );
}

export default Main;