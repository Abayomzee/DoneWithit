import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import AppTextInput from "../AppTextInput";

function AppFormField({ name, ...otherProps }) {
  const {
    errors,
    values,
    touched,
    setFieldValue,
    setFieldTouched,
  } = useFormikContext();
  return (
    <>
      <AppTextInput
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
