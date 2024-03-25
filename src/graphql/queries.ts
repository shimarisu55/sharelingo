/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSeries = /* GraphQL */ `query GetSeries($id: ID!) {
  getSeries(id: $id) {
    id
    seriesTitle
    pictureBooks {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetSeriesQueryVariables, APITypes.GetSeriesQuery>;
export const listSeries = /* GraphQL */ `query ListSeries(
  $filter: ModelSeriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listSeries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      seriesTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSeriesQueryVariables,
  APITypes.ListSeriesQuery
>;
export const syncSeries = /* GraphQL */ `query SyncSeries(
  $filter: ModelSeriesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncSeries(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      seriesTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncSeriesQueryVariables,
  APITypes.SyncSeriesQuery
>;
export const getPictureBook = /* GraphQL */ `query GetPictureBook($id: ID!) {
  getPictureBook(id: $id) {
    id
    series {
      id
      seriesTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    pictureBookTitle
    contents {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    seriesPictureBooksId
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPictureBookQueryVariables,
  APITypes.GetPictureBookQuery
>;
export const listPictureBooks = /* GraphQL */ `query ListPictureBooks(
  $filter: ModelPictureBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listPictureBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      pictureBookTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      seriesPictureBooksId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPictureBooksQueryVariables,
  APITypes.ListPictureBooksQuery
>;
export const syncPictureBooks = /* GraphQL */ `query SyncPictureBooks(
  $filter: ModelPictureBookFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPictureBooks(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      pictureBookTitle
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      seriesPictureBooksId
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPictureBooksQueryVariables,
  APITypes.SyncPictureBooksQuery
>;
export const getPictureBookContent = /* GraphQL */ `query GetPictureBookContent($id: ID!) {
  getPictureBookContent(id: $id) {
    id
    pictureBookId
    num
    soundSource
    textJap
    textEng
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPictureBookContentQueryVariables,
  APITypes.GetPictureBookContentQuery
>;
export const listPictureBookContents = /* GraphQL */ `query ListPictureBookContents(
  $filter: ModelPictureBookContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPictureBookContents(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pictureBookId
      num
      soundSource
      textJap
      textEng
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPictureBookContentsQueryVariables,
  APITypes.ListPictureBookContentsQuery
>;
export const syncPictureBookContents = /* GraphQL */ `query SyncPictureBookContents(
  $filter: ModelPictureBookContentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPictureBookContents(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      pictureBookId
      num
      soundSource
      textJap
      textEng
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPictureBookContentsQueryVariables,
  APITypes.SyncPictureBookContentsQuery
>;
export const listPictureBookContentSortByNum = /* GraphQL */ `query ListPictureBookContentSortByNum(
  $pictureBookId: ID!
  $num: ModelIntKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPictureBookContentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPictureBookContentSortByNum(
    pictureBookId: $pictureBookId
    num: $num
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      pictureBookId
      num
      soundSource
      textJap
      textEng
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPictureBookContentSortByNumQueryVariables,
  APITypes.ListPictureBookContentSortByNumQuery
>;
