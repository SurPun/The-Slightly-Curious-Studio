/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Merch } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MerchUpdateForm(props) {
  const {
    id: idProp,
    merch,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    merchName: "",
    merchPrice: "",
    merchQuantity: "",
  };
  const [merchName, setMerchName] = React.useState(initialValues.merchName);
  const [merchPrice, setMerchPrice] = React.useState(initialValues.merchPrice);
  const [merchQuantity, setMerchQuantity] = React.useState(
    initialValues.merchQuantity
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = merchRecord
      ? { ...initialValues, ...merchRecord }
      : initialValues;
    setMerchName(cleanValues.merchName);
    setMerchPrice(cleanValues.merchPrice);
    setMerchQuantity(cleanValues.merchQuantity);
    setErrors({});
  };
  const [merchRecord, setMerchRecord] = React.useState(merch);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp ? await DataStore.query(Merch, idProp) : merch;
      setMerchRecord(record);
    };
    queryData();
  }, [idProp, merch]);
  React.useEffect(resetStateValues, [merchRecord]);
  const validations = {
    merchName: [],
    merchPrice: [],
    merchQuantity: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          merchName,
          merchPrice,
          merchQuantity,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Merch.copyOf(merchRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "MerchUpdateForm")}
      {...rest}
    >
      <TextField
        label="Merch name"
        isRequired={false}
        isReadOnly={false}
        value={merchName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              merchName: value,
              merchPrice,
              merchQuantity,
            };
            const result = onChange(modelFields);
            value = result?.merchName ?? value;
          }
          if (errors.merchName?.hasError) {
            runValidationTasks("merchName", value);
          }
          setMerchName(value);
        }}
        onBlur={() => runValidationTasks("merchName", merchName)}
        errorMessage={errors.merchName?.errorMessage}
        hasError={errors.merchName?.hasError}
        {...getOverrideProps(overrides, "merchName")}
      ></TextField>
      <TextField
        label="Merch price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={merchPrice}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              merchName,
              merchPrice: value,
              merchQuantity,
            };
            const result = onChange(modelFields);
            value = result?.merchPrice ?? value;
          }
          if (errors.merchPrice?.hasError) {
            runValidationTasks("merchPrice", value);
          }
          setMerchPrice(value);
        }}
        onBlur={() => runValidationTasks("merchPrice", merchPrice)}
        errorMessage={errors.merchPrice?.errorMessage}
        hasError={errors.merchPrice?.hasError}
        {...getOverrideProps(overrides, "merchPrice")}
      ></TextField>
      <TextField
        label="Merch quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={merchQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              merchName,
              merchPrice,
              merchQuantity: value,
            };
            const result = onChange(modelFields);
            value = result?.merchQuantity ?? value;
          }
          if (errors.merchQuantity?.hasError) {
            runValidationTasks("merchQuantity", value);
          }
          setMerchQuantity(value);
        }}
        onBlur={() => runValidationTasks("merchQuantity", merchQuantity)}
        errorMessage={errors.merchQuantity?.errorMessage}
        hasError={errors.merchQuantity?.hasError}
        {...getOverrideProps(overrides, "merchQuantity")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || merch)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || merch) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
