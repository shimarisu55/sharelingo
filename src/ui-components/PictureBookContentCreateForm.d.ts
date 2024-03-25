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
export declare type PictureBookContentCreateFormInputValues = {
    num?: number;
    soundSource?: string;
    textJap?: string;
    textEng?: string;
};
export declare type PictureBookContentCreateFormValidationValues = {
    num?: ValidationFunction<number>;
    soundSource?: ValidationFunction<string>;
    textJap?: ValidationFunction<string>;
    textEng?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PictureBookContentCreateFormOverridesProps = {
    PictureBookContentCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    num?: PrimitiveOverrideProps<TextFieldProps>;
    soundSource?: PrimitiveOverrideProps<TextFieldProps>;
    textJap?: PrimitiveOverrideProps<TextFieldProps>;
    textEng?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PictureBookContentCreateFormProps = React.PropsWithChildren<{
    overrides?: PictureBookContentCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PictureBookContentCreateFormInputValues) => PictureBookContentCreateFormInputValues;
    onSuccess?: (fields: PictureBookContentCreateFormInputValues) => void;
    onError?: (fields: PictureBookContentCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PictureBookContentCreateFormInputValues) => PictureBookContentCreateFormInputValues;
    onValidate?: PictureBookContentCreateFormValidationValues;
} & React.CSSProperties>;
export default function PictureBookContentCreateForm(props: PictureBookContentCreateFormProps): React.ReactElement;
