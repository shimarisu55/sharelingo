import { useEffect, useState } from "react";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import TextModal from './Text/TextModal';
import ButtonWithDownloadFile from './ButtonWithDownloadFile';
import ButtonWithDeleteContentDialog from './ButtonWithDeleteContentDialog';
import { PictureBookContent } from "../../../../API";
import { getCurrentUser } from 'aws-amplify/auth';

interface BookContent {
  pictureBookContent: PictureBookContent;
  pictureBookTitle: string;
}

export default function BookContent(props: BookContent) {
  const { pictureBookContent, pictureBookTitle } = props;
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => { 
    const getUserId = async () => {   
      const { userId } = await getCurrentUser();
      const isAuthenticated = pictureBookContent.createdBy === userId
      setIsAuth(isAuthenticated);
    }
    getUserId();
  }, []);

  return (
    <TableRow key={pictureBookContent.id}>
      <TableCell component="th" scope="row">
        {pictureBookContent.num}
      </TableCell>
      <TableCell component="th" scope="row">
        {pictureBookContent.textEng ? (
          <Button variant="text" size="small">
            <TextModal pictureBookContent={pictureBookContent} />
          </Button>
        ) : (
          <></>
        )}
      </TableCell>
      
      <TableCell align="right" component="th" scope="row">
        { pictureBookContent.soundSource ? (
          <ButtonWithDownloadFile  
            pictureBookTitle={pictureBookTitle} 
            pictureBookNum={pictureBookContent.num} 
            soundSource={pictureBookContent.soundSource} /> 
            // ダウンロードボタン
        ):(
          <></>
        )}
      </TableCell>
      
      <TableCell align="right" component="th" scope="row">
        { isAuth ? (
          <ButtonWithDeleteContentDialog 
            pictureBookContentId={pictureBookContent.id} 
            version={pictureBookContent._version}
            soundSource={pictureBookContent.soundSource} />
            // 削除ボタン
        ):(
          <></>
        )}
      </TableCell> 
    </TableRow>
  )
}