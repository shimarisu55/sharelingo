/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PictureBookContent } from "../models";
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
export declare type PictureBookContentUpdateFormInputValues = {
    num?: number;
    soundSource?: string;
    textJap?: string;
    textEng?: string;
};
export declare type PictureBookContentUpdateFormValidationValues = {
    num?: ValidationFunction<number>;
    soundSource?: ValidationFunction<string>;
    textJap?: ValidationFunction<string>;
    textEng?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PictureBookContentUpdateFormOverridesProps = {
    PictureBookContentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    num?: PrimitiveOverrideProps<TextFieldProps>;
    soundSource?: PrimitiveOverrideProps<TextFieldProps>;
    textJap?: PrimitiveOverrideProps<TextFieldProps>;
    textEng?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PictureBookContentUpdateFormProps = React.PropsWithChildren<{
    overrides?: PictureBookContentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pictureBookContent?: PictureBookContent;
    onSubmit?: (fields: PictureBookContentUpdateFormInputValues) => PictureBookContentUpdateFormInputValues;
    onSuccess?: (fields: PictureBookContentUpdateFormInputValues) => void;
    onError?: (fields: PictureBookContentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PictureBookContentUpdateFormInputValues) => PictureBookContentUpdateFormInputValues;
    onValidate?: PictureBookContentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PictureBookContentUpdateForm(props: PictureBookContentUpdateFormProps): React.ReactElement;
