/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextField,
} from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import { CreatePictureBookInput, CreatePictureBookMutation } from '../../API';
import { GraphQLResult } from "@aws-amplify/api-graphql";

interface CloseProp {
  seriesID: string
  onClose: () => void ;
}

export default function FormWithCreatePictureBook(props: CloseProp) {
  const { seriesID, onClose } = props;
  const initialValues = {
    pictureBookTitle: "",
    textEng: "",
  };
  const client = generateClient();
  const [pictureBookTitle, setPictureBookTitle] = React.useState(
    initialValues.pictureBookTitle
  );

  // DynamoDB登録
  const registerPictureBook = () =>{
    const pictureBook: CreatePictureBookInput = {
      seriesPictureBooksId: seriesID,
      pictureBookTitle: pictureBookTitle,
    }
    const create = async () => {
      const createPictureBook = (await client.graphql({
        query: mutations.createPictureBook,
        variables: { input: pictureBook }
      })) as GraphQLResult<CreatePictureBookMutation>;
      onClose()
    }
    create()
  }

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>絵本のタイトル</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        placeholder="what is red"
        value={pictureBookTitle}
        onChange={(e) => {
          let { value } = e.target;
          setPictureBookTitle(value);
        }}
      ></TextField>
      <Flex justifyContent="space-between">
        <Flex gap="15px">
          <Button
            children="キャンセル"
            type="button"
            onClick={onClose}
          ></Button>
          { (pictureBookTitle) ?
            <Button
              children="投稿"
              type="button"
              onClick={registerPictureBook}
              variation="primary"
            ></Button>
            : <></> 
          }
        </Flex>
      </Flex>
    </Grid>
  );
}
