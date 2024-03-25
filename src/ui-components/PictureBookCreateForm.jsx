/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { PictureBook } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function PictureBookCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    seriesTitle: "",
    pictureBookTitle: "",
    textEng: "",
  };
  const [seriesTitle, setSeriesTitle] = React.useState(
    initialValues.seriesTitle
  );
  const [pictureBookTitle, setPictureBookTitle] = React.useState(
    initialValues.pictureBookTitle
  );
  const [textEng, setTextEng] = React.useState(initialValues.textEng);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSeriesTitle(initialValues.seriesTitle);
    setPictureBookTitle(initialValues.pictureBookTitle);
    setTextEng(initialValues.textEng);
    setErrors({});
  };
  const validations = {
    seriesTitle: [],
    pictureBookTitle: [{ type: "Required" }],
    textEng: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
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
          seriesTitle,
          pictureBookTitle,
          textEng,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            pictureBookTitle: modelFields.pictureBookTitle,
          };
          await DataStore.save(new PictureBook(modelFieldsToSave));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PictureBookCreateForm")}
      {...rest}
    >
      <TextField
        label="シリーズタイトル"
        descriptiveText="わからないときは絵本の作者名"
        placeholder="first little readers A"
        value={seriesTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              seriesTitle: value,
              pictureBookTitle,
              textEng,
            };
            const result = onChange(modelFields);
            value = result?.seriesTitle ?? value;
          }
          if (errors.seriesTitle?.hasError) {
            runValidationTasks("seriesTitle", value);
          }
          setSeriesTitle(value);
        }}
        onBlur={() => runValidationTasks("seriesTitle", seriesTitle)}
        errorMessage={errors.seriesTitle?.errorMessage}
        hasError={errors.seriesTitle?.hasError}
        {...getOverrideProps(overrides, "seriesTitle")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>絵本のタイトル</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        placeholder="what is red"
        value={pictureBookTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              seriesTitle,
              pictureBookTitle: value,
              textEng,
            };
            const result = onChange(modelFields);
            value = result?.pictureBookTitle ?? value;
          }
          if (errors.pictureBookTitle?.hasError) {
            runValidationTasks("pictureBookTitle", value);
          }
          setPictureBookTitle(value);
        }}
        onBlur={() => runValidationTasks("pictureBookTitle", pictureBookTitle)}
        errorMessage={errors.pictureBookTitle?.errorMessage}
        hasError={errors.pictureBookTitle?.hasError}
        {...getOverrideProps(overrides, "pictureBookTitle")}
      ></TextField>
      <TextAreaField
        label="テキスト（任意）"
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              seriesTitle,
              pictureBookTitle,
              textEng: value,
            };
            const result = onChange(modelFields);
            value = result?.textEng ?? value;
          }
          if (errors.textEng?.hasError) {
            runValidationTasks("textEng", value);
          }
          setTextEng(value);
        }}
        onBlur={() => runValidationTasks("textEng", textEng)}
        errorMessage={errors.textEng?.errorMessage}
        hasError={errors.textEng?.hasError}
        {...getOverrideProps(overrides, "textEng")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="キャンセル"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="投稿"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
