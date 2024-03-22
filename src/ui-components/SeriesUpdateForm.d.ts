/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Series } from "../models";
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
export declare type SeriesUpdateFormInputValues = {
    seriesTitle?: string;
};
export declare type SeriesUpdateFormValidationValues = {
    seriesTitle?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SeriesUpdateFormOverridesProps = {
    SeriesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    seriesTitle?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SeriesUpdateFormProps = React.PropsWithChildren<{
    overrides?: SeriesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    series?: Series;
    onSubmit?: (fields: SeriesUpdateFormInputValues) => SeriesUpdateFormInputValues;
    onSuccess?: (fields: SeriesUpdateFormInputValues) => void;
    onError?: (fields: SeriesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SeriesUpdateFormInputValues) => SeriesUpdateFormInputValues;
    onValidate?: SeriesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SeriesUpdateForm(props: SeriesUpdateFormProps): React.ReactElement;
