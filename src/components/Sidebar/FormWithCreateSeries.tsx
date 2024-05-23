
import {
  Button,
  Flex,
  Grid,
  TextField,
} from "@aws-amplify/ui-react";
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import { CreateSeriesInput } from '../../API';
import { useState } from 'react';

interface CloseProp {
  onClose: () => void ;
}

export default function FormWithCreateSeries(props: CloseProp) {
  const { onClose } = props;
  const initialValues = {
    seriesTitle: ""
  };
  const [seriesTitle, setSeriesTitle] = useState(initialValues.seriesTitle);
  const client = generateClient();
  
  // DynamoDBシリーズ登録
  const registerPictureBook = () =>{
    const series: CreateSeriesInput = {
      seriesTitle: seriesTitle,
    }
    
    const createSeries = async () => {
      const create = client.graphql({
        query: mutations.createSeries,
        variables: { input: series }
      }) 
      onClose()
    }
    createSeries()
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
            <span>シリーズタイトル</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        descriptiveText="不明なときは絵本の作者名を入力"
        isRequired={true}
        isReadOnly={false}
        placeholder="First Little Readers Level A"
        value={seriesTitle}
        onChange={(e) => {
          let { value } = e.target;
          setSeriesTitle(value);
        }}
      ></TextField>
      <Flex justifyContent="space-between">
        <Flex gap="15px">
          <Button
            children="キャンセル"
            type="button"
            onClick={onClose}
          ></Button>
          { (seriesTitle) ?
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
