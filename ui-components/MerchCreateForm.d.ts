/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MerchCreateFormInputValues = {
    merchName?: string;
    merchPrice?: number;
    merchQuantity?: number;
};
export declare type MerchCreateFormValidationValues = {
    merchName?: ValidationFunction<string>;
    merchPrice?: ValidationFunction<number>;
    merchQuantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MerchCreateFormOverridesProps = {
    MerchCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    merchName?: PrimitiveOverrideProps<TextFieldProps>;
    merchPrice?: PrimitiveOverrideProps<TextFieldProps>;
    merchQuantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MerchCreateFormProps = React.PropsWithChildren<{
    overrides?: MerchCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MerchCreateFormInputValues) => MerchCreateFormInputValues;
    onSuccess?: (fields: MerchCreateFormInputValues) => void;
    onError?: (fields: MerchCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MerchCreateFormInputValues) => MerchCreateFormInputValues;
    onValidate?: MerchCreateFormValidationValues;
} & React.CSSProperties>;
export default function MerchCreateForm(props: MerchCreateFormProps): React.ReactElement;
