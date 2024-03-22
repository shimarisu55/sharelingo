/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSeries = /* GraphQL */ `subscription OnCreateSeries(
  $filter: ModelSubscriptionSeriesFilterInput
  $owner: String
) {
  onCreateSeries(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateSeriesSubscriptionVariables,
  APITypes.OnCreateSeriesSubscription
>;
export const onUpdateSeries = /* GraphQL */ `subscription OnUpdateSeries(
  $filter: ModelSubscriptionSeriesFilterInput
  $owner: String
) {
  onUpdateSeries(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateSeriesSubscriptionVariables,
  APITypes.OnUpdateSeriesSubscription
>;
export const onDeleteSeries = /* GraphQL */ `subscription OnDeleteSeries(
  $filter: ModelSubscriptionSeriesFilterInput
  $owner: String
) {
  onDeleteSeries(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteSeriesSubscriptionVariables,
  APITypes.OnDeleteSeriesSubscription
>;
export const onCreatePictureBook = /* GraphQL */ `subscription OnCreatePictureBook(
  $filter: ModelSubscriptionPictureBookFilterInput
  $owner: String
) {
  onCreatePictureBook(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePictureBookSubscriptionVariables,
  APITypes.OnCreatePictureBookSubscription
>;
export const onUpdatePictureBook = /* GraphQL */ `subscription OnUpdatePictureBook(
  $filter: ModelSubscriptionPictureBookFilterInput
  $owner: String
) {
  onUpdatePictureBook(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePictureBookSubscriptionVariables,
  APITypes.OnUpdatePictureBookSubscription
>;
export const onDeletePictureBook = /* GraphQL */ `subscription OnDeletePictureBook(
  $filter: ModelSubscriptionPictureBookFilterInput
  $owner: String
) {
  onDeletePictureBook(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePictureBookSubscriptionVariables,
  APITypes.OnDeletePictureBookSubscription
>;
export const onCreatePictureBookContent = /* GraphQL */ `subscription OnCreatePictureBookContent(
  $filter: ModelSubscriptionPictureBookContentFilterInput
  $owner: String
) {
  onCreatePictureBookContent(filter: $filter, owner: $owner) {
    id
    pictureBookId
    num
    soundSource
    textJap
    textEng
    createdBy
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePictureBookContentSubscriptionVariables,
  APITypes.OnCreatePictureBookContentSubscription
>;
export const onUpdatePictureBookContent = /* GraphQL */ `subscription OnUpdatePictureBookContent(
  $filter: ModelSubscriptionPictureBookContentFilterInput
  $owner: String
) {
  onUpdatePictureBookContent(filter: $filter, owner: $owner) {
    id
    pictureBookId
    num
    soundSource
    textJap
    textEng
    createdBy
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePictureBookContentSubscriptionVariables,
  APITypes.OnUpdatePictureBookContentSubscription
>;
export const onDeletePictureBookContent = /* GraphQL */ `subscription OnDeletePictureBookContent(
  $filter: ModelSubscriptionPictureBookContentFilterInput
  $owner: String
) {
  onDeletePictureBookContent(filter: $filter, owner: $owner) {
    id
    pictureBookId
    num
    soundSource
    textJap
    textEng
    createdBy
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePictureBookContentSubscriptionVariables,
  APITypes.OnDeletePictureBookContentSubscription
>;
