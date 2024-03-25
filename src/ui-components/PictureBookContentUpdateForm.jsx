/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { PictureBookContent } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function PictureBookContentUpdateForm(props) {
  const {
    id: idProp,
    pictureBookContent: pictureBookContentModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    num: "",
    soundSource: "",
    textJap: "",
    textEng: "",
  };
  const [num, setNum] = React.useState(initialValues.num);
  const [soundSource, setSoundSource] = React.useState(
    initialValues.soundSource
  );
  const [textJap, setTextJap] = React.useState(initialValues.textJap);
  const [textEng, setTextEng] = React.useState(initialValues.textEng);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = pictureBookContentRecord
      ? { ...initialValues, ...pictureBookContentRecord }
      : initialValues;
    setNum(cleanValues.num);
    setSoundSource(cleanValues.soundSource);
    setTextJap(cleanValues.textJap);
    setTextEng(cleanValues.textEng);
    setErrors({});
  };
  const [pictureBookContentRecord, setPictureBookContentRecord] =
    React.useState(pictureBookContentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PictureBookContent, idProp)
        : pictureBookContentModelProp;
      setPictureBookContentRecord(record);
    };
    queryData();
  }, [idProp, pictureBookContentModelProp]);
  React.useEffect(resetStateValues, [pictureBookContentRecord]);
  const validations = {
    num: [{ type: "Required" }],
    soundSource: [],
    textJap: [],
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
          num,
          soundSource,
          textJap,
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
          await DataStore.save(
            PictureBookContent.copyOf(pictureBookContentRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PictureBookContentUpdateForm")}
      {...rest}
    >
      <TextField
        label="Num"
        isRequired={true}
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
              num: value,
              soundSource,
              textJap,
              textEng,
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
        label="Sound source"
        isRequired={false}
        isReadOnly={false}
        value={soundSource}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              num,
              soundSource: value,
              textJap,
              textEng,
            };
            const result = onChange(modelFields);
            value = result?.soundSource ?? value;
          }
          if (errors.soundSource?.hasError) {
            runValidationTasks("soundSource", value);
          }
          setSoundSource(value);
        }}
        onBlur={() => runValidationTasks("soundSource", soundSource)}
        errorMessage={errors.soundSource?.errorMessage}
        hasError={errors.soundSource?.hasError}
        {...getOverrideProps(overrides, "soundSource")}
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
              num,
              soundSource,
              textJap: value,
              textEng,
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
              num,
              soundSource,
              textJap,
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
          isDisabled={!(idProp || pictureBookContentModelProp)}
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
              !(idProp || pictureBookContentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
