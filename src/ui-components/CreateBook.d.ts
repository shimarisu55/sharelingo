/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateBookInputValues = {
    seriesTitle?: string;
    pictureBookTitle?: string;
    num?: number;
    textJap?: string;
    textEng?: string;
    createdBy?: string;
};
export declare type CreateBookValidationValues = {
    seriesTitle?: ValidationFunction<string>;
    pictureBookTitle?: ValidationFunction<string>;
    num?: ValidationFunction<number>;
    textJap?: ValidationFunction<string>;
    textEng?: ValidationFunction<string>;
    createdBy?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateBookOverridesProps = {
    CreateBookGrid?: PrimitiveOverrideProps<GridProps>;
    seriesTitle?: PrimitiveOverrideProps<TextFieldProps>;
    pictureBookTitle?: PrimitiveOverrideProps<TextFieldProps>;
    num?: PrimitiveOverrideProps<TextFieldProps>;
    textJap?: PrimitiveOverrideProps<TextFieldProps>;
    textEng?: PrimitiveOverrideProps<TextFieldProps>;
    createdBy?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateBookProps = React.PropsWithChildren<{
    overrides?: CreateBookOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateBookInputValues) => CreateBookInputValues;
    onSuccess?: (fields: CreateBookInputValues) => void;
    onError?: (fields: CreateBookInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateBookInputValues) => CreateBookInputValues;
    onValidate?: CreateBookValidationValues;
} & React.CSSProperties>;
export default function CreateBook(props: CreateBookProps): React.ReactElement;
