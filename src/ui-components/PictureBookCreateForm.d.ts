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
export declare type PictureBookCreateFormInputValues = {
    pictureBookTitle?: string;
};
export declare type PictureBookCreateFormValidationValues = {
    pictureBookTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PictureBookCreateFormOverridesProps = {
    PictureBookCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    pictureBookTitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PictureBookCreateFormProps = React.PropsWithChildren<{
    overrides?: PictureBookCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PictureBookCreateFormInputValues) => PictureBookCreateFormInputValues;
    onSuccess?: (fields: PictureBookCreateFormInputValues) => void;
    onError?: (fields: PictureBookCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PictureBookCreateFormInputValues) => PictureBookCreateFormInputValues;
    onValidate?: PictureBookCreateFormValidationValues;
} & React.CSSProperties>;
export default function PictureBookCreateForm(props: PictureBookCreateFormProps): React.ReactElement;
