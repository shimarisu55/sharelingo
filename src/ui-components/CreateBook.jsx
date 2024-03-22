/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { PictureBook } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CreateBook(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    seriesTitle: "",
    pictureBookTitle: "",
    num: "",
    textJap: "",
    textEng: "",
    createdBy: "",
  };
  const [seriesTitle, setSeriesTitle] = React.useState(
    initialValues.seriesTitle
  );
  const [pictureBookTitle, setPictureBookTitle] = React.useState(
    initialValues.pictureBookTitle
  );
  const [num, setNum] = React.useState(initialValues.num);
  const [textJap, setTextJap] = React.useState(initialValues.textJap);
  const [textEng, setTextEng] = React.useState(initialValues.textEng);
  const [createdBy, setCreatedBy] = React.useState(initialValues.createdBy);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSeriesTitle(initialValues.seriesTitle);
    setPictureBookTitle(initialValues.pictureBookTitle);
    setNum(initialValues.num);
    setTextJap(initialValues.textJap);
    setTextEng(initialValues.textEng);
    setCreatedBy(initialValues.createdBy);
    setErrors({});
  };
  const validations = {
    seriesTitle: [{ type: "Required" }],
    pictureBookTitle: [{ type: "Required" }],
    num: [],
    textJap: [],
    textEng: [],
    createdBy: [],
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
          num,
          textJap,
          textEng,
          createdBy,
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
          await DataStore.save(new PictureBook(modelFields));
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
      {...getOverrideProps(overrides, "CreateBook")}
      {...rest}
    >
      <TextField
        label="Series title"
        isRequired={true}
        isReadOnly={false}
        value={seriesTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              seriesTitle: value,
              pictureBookTitle,
              num,
              textJap,
              textEng,
              createdBy,
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
        label="Picture book title"
        isRequired={true}
        isReadOnly={false}
        value={pictureBookTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              seriesTitle,
              pictureBookTitle: value,
              num,
              textJap,
              textEng,
              createdBy,
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
      <TextField
        label="Num"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={num}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              seriesTitle,
              pictureBookTitle,
              num: value,
              textJap,
              textEng,
              createdBy,
            };
            const result = onChange(modelFields);
            value = result?.num ?? value;
          }
          if (errors.num?.hasError) {
            runValidationTasks("num", value);
          }
          setNum(value);
        }}
        onBlur={() => runValidationTasks("num", num)}
        errorMessage={errors.num?.errorMessage}
        hasError={errors.num?.hasError}
        {...getOverrideProps(overrides, "num")}
      ></TextField>
      <TextField
        label="Text jap"
        isRequired={false}
        isReadOnly={false}
        value={textJap}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              seriesTitle,
              pictureBookTitle,
              num,
              textJap: value,
              textEng,
              createdBy,
            };
            const result = onChange(modelFields);
            value = result?.textJap ?? value;
          }
          if (errors.textJap?.hasError) {
            runValidationTasks("textJap", value);
          }
          setTextJap(value);
        }}
        onBlur={() => runValidationTasks("textJap", textJap)}
        errorMessage={errors.textJap?.errorMessage}
        hasError={errors.textJap?.hasError}
        {...getOverrideProps(overrides, "textJap")}
      ></TextField>
      <TextField
        label="Text eng"
        isRequired={false}
        isReadOnly={false}
        value={textEng}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              seriesTitle,
              pictureBookTitle,
              num,
              textJap,
              textEng: value,
              createdBy,
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
      ></TextField>
      <TextField
        label="Created by"
        isRequired={false}
        isReadOnly={false}
        value={createdBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              seriesTitle,
              pictureBookTitle,
              num,
              textJap,
              textEng,
              createdBy: value,
            };
            const result = onChange(modelFields);
            value = result?.createdBy ?? value;
          }
          if (errors.createdBy?.hasError) {
            runValidationTasks("createdBy", value);
          }
          setCreatedBy(value);
        }}
        onBlur={() => runValidationTasks("createdBy", createdBy)}
        errorMessage={errors.createdBy?.errorMessage}
        hasError={errors.createdBy?.hasError}
        {...getOverrideProps(overrides, "createdBy")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
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
