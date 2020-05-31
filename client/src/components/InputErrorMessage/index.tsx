import React from 'react';
import { FormikProps } from 'formik';
import { Text } from './styles';

interface InputErrorMessageProps {
  formik: FormikProps<any>;
  field: string;
}

const InputErrorMessage: React.FC<InputErrorMessageProps> = ({
  formik,
  field
}) =>
  formik.errors[field] && formik.touched[field] ? (
    <Text>{formik.errors[field]}</Text>
  ) : (
    <Text></Text>
  );

export default InputErrorMessage;
