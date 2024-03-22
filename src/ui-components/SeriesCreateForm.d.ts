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
export declare type SeriesCreateFormInputValues = {
    seriesTitle?: string;
};
export declare type SeriesCreateFormValidationValues = {
    seriesTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeriesCreateFormOverridesProps = {
    SeriesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    seriesTitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeriesCreateFormProps = React.PropsWithChildren<{
    overrides?: SeriesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SeriesCreateFormInputValues) => SeriesCreateFormInputValues;
    onSuccess?: (fields: SeriesCreateFormInputValues) => void;
    onError?: (fields: SeriesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeriesCreateFormInputValues) => SeriesCreateFormInputValues;
    onValidate?: SeriesCreateFormValidationValues;
} & React.CSSProperties>;
export default function SeriesCreateForm(props: SeriesCreateFormProps): React.ReactElement;
