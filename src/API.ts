/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSeriesInput = {
  id?: string | null,
  seriesTitle: string,
  _version?: number | null,
};

export type ModelSeriesConditionInput = {
  seriesTitle?: ModelStringInput | null,
  and?: Array< ModelSeriesConditionInput | null > | null,
  or?: Array< ModelSeriesConditionInput | null > | null,
  not?: ModelSeriesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Series = {
  __typename: "Series",
  id: string,
  seriesTitle: string,
  pictureBooks?: ModelPictureBookConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type ModelPictureBookConnection = {
  __typename: "ModelPictureBookConnection",
  items:  Array<PictureBook | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PictureBook = {
  __typename: "PictureBook",
  id: string,
  series?: Series | null,
  pictureBookTitle: string,
  contents?: ModelPictureBookContentConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  seriesPictureBooksId?: string | null,
  owner?: string | null,
};

export type ModelPictureBookContentConnection = {
  __typename: "ModelPictureBookContentConnection",
  items:  Array<PictureBookContent | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PictureBookContent = {
  __typename: "PictureBookContent",
  id: string,
  pictureBookId?: string | null,
  num: number,
  soundSource?: string | null,
  textJap?: string | null,
  textEng?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
};

export type UpdateSeriesInput = {
  id: string,
  seriesTitle?: string | null,
  _version?: number | null,
};

export type DeleteSeriesInput = {
  id: string,
  _version?: number | null,
};

export type CreatePictureBookInput = {
  id?: string | null,
  pictureBookTitle: string,
  _version?: number | null,
  seriesPictureBooksId?: string | null,
};

export type ModelPictureBookConditionInput = {
  pictureBookTitle?: ModelStringInput | null,
  and?: Array< ModelPictureBookConditionInput | null > | null,
  or?: Array< ModelPictureBookConditionInput | null > | null,
  not?: ModelPictureBookConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  seriesPictureBooksId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePictureBookInput = {
  id: string,
  pictureBookTitle?: string | null,
  _version?: number | null,
  seriesPictureBooksId?: string | null,
};

export type DeletePictureBookInput = {
  id: string,
  _version?: number | null,
};

export type CreatePictureBookContentInput = {
  id?: string | null,
  pictureBookId?: string | null,
  num: number,
  soundSource?: string | null,
  textJap?: string | null,
  textEng?: string | null,
  _version?: number | null,
};

export type ModelPictureBookContentConditionInput = {
  pictureBookId?: ModelIDInput | null,
  num?: ModelIntInput | null,
  soundSource?: ModelStringInput | null,
  textJap?: ModelStringInput | null,
  textEng?: ModelStringInput | null,
  and?: Array< ModelPictureBookContentConditionInput | null > | null,
  or?: Array< ModelPictureBookContentConditionInput | null > | null,
  not?: ModelPictureBookContentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdatePictureBookContentInput = {
  id: string,
  pictureBookId?: string | null,
  num?: number | null,
  soundSource?: string | null,
  textJap?: string | null,
  textEng?: string | null,
  _version?: number | null,
};

export type DeletePictureBookContentInput = {
  id: string,
  _version?: number | null,
};

export type ModelSeriesFilterInput = {
  id?: ModelIDInput | null,
  seriesTitle?: ModelStringInput | null,
  and?: Array< ModelSeriesFilterInput | null > | null,
  or?: Array< ModelSeriesFilterInput | null > | null,
  not?: ModelSeriesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSeriesConnection = {
  __typename: "ModelSeriesConnection",
  items:  Array<Series | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPictureBookFilterInput = {
  id?: ModelIDInput | null,
  pictureBookTitle?: ModelStringInput | null,
  and?: Array< ModelPictureBookFilterInput | null > | null,
  or?: Array< ModelPictureBookFilterInput | null > | null,
  not?: ModelPictureBookFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  seriesPictureBooksId?: ModelIDInput | null,
};

export type ModelPictureBookContentFilterInput = {
  id?: ModelIDInput | null,
  pictureBookId?: ModelIDInput | null,
  num?: ModelIntInput | null,
  soundSource?: ModelStringInput | null,
  textJap?: ModelStringInput | null,
  textEng?: ModelStringInput | null,
  and?: Array< ModelPictureBookContentFilterInput | null > | null,
  or?: Array< ModelPictureBookContentFilterInput | null > | null,
  not?: ModelPictureBookContentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionSeriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  seriesTitle?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSeriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionSeriesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPictureBookFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  pictureBookTitle?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPictureBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionPictureBookFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionPictureBookContentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  pictureBookId?: ModelSubscriptionIDInput | null,
  num?: ModelSubscriptionIntInput | null,
  soundSource?: ModelSubscriptionStringInput | null,
  textJap?: ModelSubscriptionStringInput | null,
  textEng?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPictureBookContentFilterInput | null > | null,
  or?: Array< ModelSubscriptionPictureBookContentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateSeriesMutationVariables = {
  input: CreateSeriesInput,
  condition?: ModelSeriesConditionInput | null,
};

export type CreateSeriesMutation = {
  createSeries?:  {
    __typename: "Series",
    id: string,
    seriesTitle: string,
    pictureBooks?:  {
      __typename: "ModelPictureBookConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdateSeriesMutationVariables = {
  input: UpdateSeriesInput,
  condition?: ModelSeriesConditionInput | null,
};

export type UpdateSeriesMutation = {
  updateSeries?:  {
    __typename: "Series",
    id: string,
    seriesTitle: string,
    pictureBooks?:  {
      __typename: "ModelPictureBookConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeleteSeriesMutationVariables = {
  input: DeleteSeriesInput,
  condition?: ModelSeriesConditionInput | null,
};

export type DeleteSeriesMutation = {
  deleteSeries?:  {
    __typename: "Series",
    id: string,
    seriesTitle: string,
    pictureBooks?:  {
      __typename: "ModelPictureBookConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type CreatePictureBookMutationVariables = {
  input: CreatePictureBookInput,
  condition?: ModelPictureBookConditionInput | null,
};

export type CreatePictureBookMutation = {
  createPictureBook?:  {
    __typename: "PictureBook",
    id: string,
    series?:  {
      __typename: "Series",
      id: string,
      seriesTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    pictureBookTitle: string,
    contents?:  {
      __typename: "ModelPictureBookContentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seriesPictureBooksId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePictureBookMutationVariables = {
  input: UpdatePictureBookInput,
  condition?: ModelPictureBookConditionInput | null,
};

export type UpdatePictureBookMutation = {
  updatePictureBook?:  {
    __typename: "PictureBook",
    id: string,
    series?:  {
      __typename: "Series",
      id: string,
      seriesTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    pictureBookTitle: string,
    contents?:  {
      __typename: "ModelPictureBookContentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seriesPictureBooksId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePictureBookMutationVariables = {
  input: DeletePictureBookInput,
  condition?: ModelPictureBookConditionInput | null,
};

export type DeletePictureBookMutation = {
  deletePictureBook?:  {
    __typename: "PictureBook",
    id: string,
    series?:  {
      __typename: "Series",
      id: string,
      seriesTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    pictureBookTitle: string,
    contents?:  {
      __typename: "ModelPictureBookContentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seriesPictureBooksId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreatePictureBookContentMutationVariables = {
  input: CreatePictureBookContentInput,
  condition?: ModelPictureBookContentConditionInput | null,
};

export type CreatePictureBookContentMutation = {
  createPictureBookContent?:  {
    __typename: "PictureBookContent",
    id: string,
    pictureBookId?: string | null,
    num: number,
    soundSource?: string | null,
    textJap?: string | null,
    textEng?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type UpdatePictureBookContentMutationVariables = {
  input: UpdatePictureBookContentInput,
  condition?: ModelPictureBookContentConditionInput | null,
};

export type UpdatePictureBookContentMutation = {
  updatePictureBookContent?:  {
    __typename: "PictureBookContent",
    id: string,
    pictureBookId?: string | null,
    num: number,
    soundSource?: string | null,
    textJap?: string | null,
    textEng?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type DeletePictureBookContentMutationVariables = {
  input: DeletePictureBookContentInput,
  condition?: ModelPictureBookContentConditionInput | null,
};

export type DeletePictureBookContentMutation = {
  deletePictureBookContent?:  {
    __typename: "PictureBookContent",
    id: string,
    pictureBookId?: string | null,
    num: number,
    soundSource?: string | null,
    textJap?: string | null,
    textEng?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetSeriesQueryVariables = {
  id: string,
};

export type GetSeriesQuery = {
  getSeries?:  {
    __typename: "Series",
    id: string,
    seriesTitle: string,
    pictureBooks?:  {
      __typename: "ModelPictureBookConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListSeriesQueryVariables = {
  filter?: ModelSeriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSeriesQuery = {
  listSeries?:  {
    __typename: "ModelSeriesConnection",
    items:  Array< {
      __typename: "Series",
      id: string,
      seriesTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSeriesQueryVariables = {
  filter?: ModelSeriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSeriesQuery = {
  syncSeries?:  {
    __typename: "ModelSeriesConnection",
    items:  Array< {
      __typename: "Series",
      id: string,
      seriesTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPictureBookQueryVariables = {
  id: string,
};

export type GetPictureBookQuery = {
  getPictureBook?:  {
    __typename: "PictureBook",
    id: string,
    series?:  {
      __typename: "Series",
      id: string,
      seriesTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    pictureBookTitle: string,
    contents?:  {
      __typename: "ModelPictureBookContentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seriesPictureBooksId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPictureBooksQueryVariables = {
  filter?: ModelPictureBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPictureBooksQuery = {
  listPictureBooks?:  {
    __typename: "ModelPictureBookConnection",
    items:  Array< {
      __typename: "PictureBook",
      id: string,
      pictureBookTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      seriesPictureBooksId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPictureBooksQueryVariables = {
  filter?: ModelPictureBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPictureBooksQuery = {
  syncPictureBooks?:  {
    __typename: "ModelPictureBookConnection",
    items:  Array< {
      __typename: "PictureBook",
      id: string,
      pictureBookTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      seriesPictureBooksId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPictureBookContentQueryVariables = {
  id: string,
};

export type GetPictureBookContentQuery = {
  getPictureBookContent?:  {
    __typename: "PictureBookContent",
    id: string,
    pictureBookId?: string | null,
    num: number,
    soundSource?: string | null,
    textJap?: string | null,
    textEng?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type ListPictureBookContentsQueryVariables = {
  filter?: ModelPictureBookContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPictureBookContentsQuery = {
  listPictureBookContents?:  {
    __typename: "ModelPictureBookContentConnection",
    items:  Array< {
      __typename: "PictureBookContent",
      id: string,
      pictureBookId?: string | null,
      num: number,
      soundSource?: string | null,
      textJap?: string | null,
      textEng?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPictureBookContentsQueryVariables = {
  filter?: ModelPictureBookContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPictureBookContentsQuery = {
  syncPictureBookContents?:  {
    __typename: "ModelPictureBookContentConnection",
    items:  Array< {
      __typename: "PictureBookContent",
      id: string,
      pictureBookId?: string | null,
      num: number,
      soundSource?: string | null,
      textJap?: string | null,
      textEng?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ListPictureBookContentSortByNumQueryVariables = {
  pictureBookId: string,
  num?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPictureBookContentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPictureBookContentSortByNumQuery = {
  listPictureBookContentSortByNum?:  {
    __typename: "ModelPictureBookContentConnection",
    items:  Array< {
      __typename: "PictureBookContent",
      id: string,
      pictureBookId?: string | null,
      num: number,
      soundSource?: string | null,
      textJap?: string | null,
      textEng?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateSeriesSubscriptionVariables = {
  filter?: ModelSubscriptionSeriesFilterInput | null,
  owner?: string | null,
};

export type OnCreateSeriesSubscription = {
  onCreateSeries?:  {
    __typename: "Series",
    id: string,
    seriesTitle: string,
    pictureBooks?:  {
      __typename: "ModelPictureBookConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateSeriesSubscriptionVariables = {
  filter?: ModelSubscriptionSeriesFilterInput | null,
  owner?: string | null,
};

export type OnUpdateSeriesSubscription = {
  onUpdateSeries?:  {
    __typename: "Series",
    id: string,
    seriesTitle: string,
    pictureBooks?:  {
      __typename: "ModelPictureBookConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteSeriesSubscriptionVariables = {
  filter?: ModelSubscriptionSeriesFilterInput | null,
  owner?: string | null,
};

export type OnDeleteSeriesSubscription = {
  onDeleteSeries?:  {
    __typename: "Series",
    id: string,
    seriesTitle: string,
    pictureBooks?:  {
      __typename: "ModelPictureBookConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnCreatePictureBookSubscriptionVariables = {
  filter?: ModelSubscriptionPictureBookFilterInput | null,
  owner?: string | null,
};

export type OnCreatePictureBookSubscription = {
  onCreatePictureBook?:  {
    __typename: "PictureBook",
    id: string,
    series?:  {
      __typename: "Series",
      id: string,
      seriesTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    pictureBookTitle: string,
    contents?:  {
      __typename: "ModelPictureBookContentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seriesPictureBooksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePictureBookSubscriptionVariables = {
  filter?: ModelSubscriptionPictureBookFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePictureBookSubscription = {
  onUpdatePictureBook?:  {
    __typename: "PictureBook",
    id: string,
    series?:  {
      __typename: "Series",
      id: string,
      seriesTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    pictureBookTitle: string,
    contents?:  {
      __typename: "ModelPictureBookContentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seriesPictureBooksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePictureBookSubscriptionVariables = {
  filter?: ModelSubscriptionPictureBookFilterInput | null,
  owner?: string | null,
};

export type OnDeletePictureBookSubscription = {
  onDeletePictureBook?:  {
    __typename: "PictureBook",
    id: string,
    series?:  {
      __typename: "Series",
      id: string,
      seriesTitle: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null,
    pictureBookTitle: string,
    contents?:  {
      __typename: "ModelPictureBookContentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    seriesPictureBooksId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreatePictureBookContentSubscriptionVariables = {
  filter?: ModelSubscriptionPictureBookContentFilterInput | null,
  owner?: string | null,
};

export type OnCreatePictureBookContentSubscription = {
  onCreatePictureBookContent?:  {
    __typename: "PictureBookContent",
    id: string,
    pictureBookId?: string | null,
    num: number,
    soundSource?: string | null,
    textJap?: string | null,
    textEng?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdatePictureBookContentSubscriptionVariables = {
  filter?: ModelSubscriptionPictureBookContentFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePictureBookContentSubscription = {
  onUpdatePictureBookContent?:  {
    __typename: "PictureBookContent",
    id: string,
    pictureBookId?: string | null,
    num: number,
    soundSource?: string | null,
    textJap?: string | null,
    textEng?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeletePictureBookContentSubscriptionVariables = {
  filter?: ModelSubscriptionPictureBookContentFilterInput | null,
  owner?: string | null,
};

export type OnDeletePictureBookContentSubscription = {
  onDeletePictureBookContent?:  {
    __typename: "PictureBookContent",
    id: string,
    pictureBookId?: string | null,
    num: number,
    soundSource?: string | null,
    textJap?: string | null,
    textEng?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
