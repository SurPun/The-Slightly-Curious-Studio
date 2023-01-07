/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Merch } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MerchUpdateFormInputValues = {
    merchName?: string;
    merchPrice?: number;
    merchQuantity?: number;
};
export declare type MerchUpdateFormValidationValues = {
    merchName?: ValidationFunction<string>;
    merchPrice?: ValidationFunction<number>;
    merchQuantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MerchUpdateFormOverridesProps = {
    MerchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    merchName?: PrimitiveOverrideProps<TextFieldProps>;
    merchPrice?: PrimitiveOverrideProps<TextFieldProps>;
    merchQuantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MerchUpdateFormProps = React.PropsWithChildren<{
    overrides?: MerchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    merch?: Merch;
    onSubmit?: (fields: MerchUpdateFormInputValues) => MerchUpdateFormInputValues;
    onSuccess?: (fields: MerchUpdateFormInputValues) => void;
    onError?: (fields: MerchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MerchUpdateFormInputValues) => MerchUpdateFormInputValues;
    onValidate?: MerchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MerchUpdateForm(props: MerchUpdateFormProps): React.ReactElement;
