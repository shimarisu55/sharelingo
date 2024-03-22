/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PictureBook } from "../models";
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
export declare type PictureBookUpdateFormInputValues = {
    pictureBookTitle?: string;
};
export declare type PictureBookUpdateFormValidationValues = {
    pictureBookTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PictureBookUpdateFormOverridesProps = {
    PictureBookUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pictureBookTitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PictureBookUpdateFormProps = React.PropsWithChildren<{
    overrides?: PictureBookUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pictureBook?: PictureBook;
    onSubmit?: (fields: PictureBookUpdateFormInputValues) => PictureBookUpdateFormInputValues;
    onSuccess?: (fields: PictureBookUpdateFormInputValues) => void;
    onError?: (fields: PictureBookUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PictureBookUpdateFormInputValues) => PictureBookUpdateFormInputValues;
    onValidate?: PictureBookUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PictureBookUpdateForm(props: PictureBookUpdateFormProps): React.ReactElement;
