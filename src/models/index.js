// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Series, PictureBook, PictureBookContent } = initSchema(schema);

export {
  Series,
  PictureBook,
  PictureBookContent
};