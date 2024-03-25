import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerSeries = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Series, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly seriesTitle: string;
  readonly pictureBooks?: (PictureBook | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySeries = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Series, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly seriesTitle: string;
  readonly pictureBooks: AsyncCollection<PictureBook>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Series = LazyLoading extends LazyLoadingDisabled ? EagerSeries : LazySeries

export declare const Series: (new (init: ModelInit<Series>) => Series) & {
  copyOf(source: Series, mutator: (draft: MutableModel<Series>) => MutableModel<Series> | void): Series;
}

type EagerPictureBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PictureBook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly series?: Series | null;
  readonly pictureBookTitle: string;
  readonly contents?: (PictureBookContent | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly seriesPictureBooksId?: string | null;
}

type LazyPictureBook = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PictureBook, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly series: AsyncItem<Series | undefined>;
  readonly pictureBookTitle: string;
  readonly contents: AsyncCollection<PictureBookContent>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly seriesPictureBooksId?: string | null;
}

export declare type PictureBook = LazyLoading extends LazyLoadingDisabled ? EagerPictureBook : LazyPictureBook

export declare const PictureBook: (new (init: ModelInit<PictureBook>) => PictureBook) & {
  copyOf(source: PictureBook, mutator: (draft: MutableModel<PictureBook>) => MutableModel<PictureBook> | void): PictureBook;
}

type EagerPictureBookContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PictureBookContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pictureBookId?: string | null;
  readonly num: number;
  readonly soundSource?: string | null;
  readonly textJap?: string | null;
  readonly textEng?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPictureBookContent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PictureBookContent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pictureBookId?: string | null;
  readonly num: number;
  readonly soundSource?: string | null;
  readonly textJap?: string | null;
  readonly textEng?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PictureBookContent = LazyLoading extends LazyLoadingDisabled ? EagerPictureBookContent : LazyPictureBookContent

export declare const PictureBookContent: (new (init: ModelInit<PictureBookContent>) => PictureBookContent) & {
  copyOf(source: PictureBookContent, mutator: (draft: MutableModel<PictureBookContent>) => MutableModel<PictureBookContent> | void): PictureBookContent;
}