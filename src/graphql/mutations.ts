/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSeries = /* GraphQL */ `mutation CreateSeries(
  $input: CreateSeriesInput!
  $condition: ModelSeriesConditionInput
) {
  createSeries(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSeriesMutationVariables,
  APITypes.CreateSeriesMutation
>;
export const updateSeries = /* GraphQL */ `mutation UpdateSeries(
  $input: UpdateSeriesInput!
  $condition: ModelSeriesConditionInput
) {
  updateSeries(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSeriesMutationVariables,
  APITypes.UpdateSeriesMutation
>;
export const deleteSeries = /* GraphQL */ `mutation DeleteSeries(
  $input: DeleteSeriesInput!
  $condition: ModelSeriesConditionInput
) {
  deleteSeries(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSeriesMutationVariables,
  APITypes.DeleteSeriesMutation
>;
export const createPictureBook = /* GraphQL */ `mutation CreatePictureBook(
  $input: CreatePictureBookInput!
  $condition: ModelPictureBookConditionInput
) {
  createPictureBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePictureBookMutationVariables,
  APITypes.CreatePictureBookMutation
>;
export const updatePictureBook = /* GraphQL */ `mutation UpdatePictureBook(
  $input: UpdatePictureBookInput!
  $condition: ModelPictureBookConditionInput
) {
  updatePictureBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePictureBookMutationVariables,
  APITypes.UpdatePictureBookMutation
>;
export const deletePictureBook = /* GraphQL */ `mutation DeletePictureBook(
  $input: DeletePictureBookInput!
  $condition: ModelPictureBookConditionInput
) {
  deletePictureBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePictureBookMutationVariables,
  APITypes.DeletePictureBookMutation
>;
export const createPictureBookContent = /* GraphQL */ `mutation CreatePictureBookContent(
  $input: CreatePictureBookContentInput!
  $condition: ModelPictureBookContentConditionInput
) {
  createPictureBookContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePictureBookContentMutationVariables,
  APITypes.CreatePictureBookContentMutation
>;
export const updatePictureBookContent = /* GraphQL */ `mutation UpdatePictureBookContent(
  $input: UpdatePictureBookContentInput!
  $condition: ModelPictureBookContentConditionInput
) {
  updatePictureBookContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePictureBookContentMutationVariables,
  APITypes.UpdatePictureBookContentMutation
>;
export const deletePictureBookContent = /* GraphQL */ `mutation DeletePictureBookContent(
  $input: DeletePictureBookContentInput!
  $condition: ModelPictureBookContentConditionInput
) {
  deletePictureBookContent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePictureBookContentMutationVariables,
  APITypes.DeletePictureBookContentMutation
>;
