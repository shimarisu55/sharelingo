/* eslint-disable */
import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BookContent from './RowContent/BookContent';
import ButtonWithCreateContentDialog from './ButtonWithCreateContentDialog';
import ButtonWithDeletePictureBookDialog from './ButtonWithDeletePictureBookDialog';
import { getCurrentUser } from 'aws-amplify/auth';

import { generateClient } from 'aws-amplify/api';
import * as subscriptions from '../../../graphql/subscriptions';
import * as queries from '../../../graphql/queries';
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { PictureBook, PictureBookContent, ListPictureBookContentSortByNumQuery, ListPictureBookContentsQueryVariables} from "../../../API";
  
interface RowBook {
  pictureBook: PictureBook
}

const initialValues = {
  contents: Array<PictureBookContent>,
  nextContentNumber: 0
}

  {/*　テーブルの行を作成  */}
export default function PictureBookRow(props: RowBook) {
  const { pictureBook } = props;
  const [open, setOpen] = useState(false);
  const [ contents, setContents] = useState(initialValues.contents);
  const [ nextContentNumber, setNextContentNumber] = useState(initialValues.nextContentNumber);
  const [ isAuth, setIsAuth] = useState(false);

  const client = generateClient();
  
  useEffect(() => { 

    // pictureBookを削除する権限があるかチェック
    const getUserAuth = async () => {   
      const { username } = await getCurrentUser();
      const isAuthenticated = pictureBook.owner === username
      setIsAuth(isAuthenticated);
    }
    getUserAuth();
    
    const variables = {
      filter: {pictureBookId: {eq: pictureBook.id }}
    }
    // サブスクライブ　pictureBookContentが更新・削除されたら再fetch
    const subscribeCreate = client.graphql({
      query: subscriptions.onCreatePictureBookContent,
      variables: variables
    })
    .subscribe({
      next: ({ data }) => {
        const pictureBookContent = data.onCreatePictureBookContent
        setContents(prev => [...prev, pictureBookContent])
      },
      error: (error) => console.warn(error)
    });

    // 削除
    const subscribeDelete = client.graphql({
      query: subscriptions.onDeletePictureBookContent,
      variables: variables
    })
    .subscribe({
      next: () => { fetchByPictureBook() },
      error: (error) => console.warn(error)
    });
      
    return () => {
      subscribeCreate.unsubscribe();
      subscribeDelete.unsubscribe();
    }
  }, []);

  // tableの↓アイコンがckickされたら、PictureBookContentをfetchする
  const fetchByPictureBook = () => {
    // 初期化
    setContents([])
    const variables = {
      pictureBookId: pictureBook.id,
      filter: { _deleted: { ne: true } } // 削除フラグ
    }
    const listContents = async () => {
      const apiResult = await client.graphql({
        query: queries.listPictureBookContentSortByNum,
        variables: variables
      }) as GraphQLResult<ListPictureBookContentSortByNumQuery>;

      const listPictureBookContents = apiResult.data.listPictureBookContentSortByNum;
      const content: Array<PictureBookContent> = []
      const contentNumbers = [initialValues.nextContentNumber]
      if (listPictureBookContents) {
        listPictureBookContents.items.forEach((item) => {
          if (item) {
            content.push(item)
            contentNumbers.push(item.num)
          }
        });
        setContents(content);
      }
      // これまでアップロードされたコンテンツ番号の次の数字を出す
      setNextContentNumber(Math.max(...contentNumbers)+1)
    };
    listContents();
  }
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

        <TableCell>
          <IconButton aria-label="expand row" size="small"
            onClick={() => {
              setOpen(!open);
              {!open ? fetchByPictureBook() : null}        
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell component="th" scope="row">
          {pictureBook.pictureBookTitle} {/* ここに絵本のタイトルが入る */}
        </TableCell>

        { open ?
          <TableCell align="right" component="th" scope="row">
            <ButtonWithCreateContentDialog 
              pictureBookID={pictureBook.id} 
              nextContentNumber={nextContentNumber} /> {/* アップロードボタン */}
          </TableCell>
        : null}
        { open && contents.length == 0 && isAuth ?
          <TableCell align="right" component="th" scope="row">
            <ButtonWithDeletePictureBookDialog 
            pictureBookId={pictureBook.id} 
            version={pictureBook._version} /> {/* PictureBook更新ボタン */}
          </TableCell>
        : null}
      </TableRow>
      
      <TableRow> {/* ここから下がコンテンツ */}
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                </TableHead>
                <TableBody>
                  {contents.map((item) => (
                    <BookContent key={item.id} 
                    pictureBookContent={item} 
                    pictureBookTitle={pictureBook.pictureBookTitle} /> 
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}