import React from 'react';
import { Input, Button, Wrapper, StyledForm } from './styles';
import { useFormik } from 'formik';
import { Container } from '../../../styles/container';
import ParticipationSchema from '../../../helpers/validators/participation';
import InputErrorMessage from '../../InputErrorMessage';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      participation: ''
    },
    validationSchema: ParticipationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Wrapper>
      <Container>
        <StyledForm onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <Input
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <Input
            type="text"
            placeholder="Participation"
            name="participation"
            onChange={formik.handleChange}
            value={formik.values.participation}
          />
          <Button>Send</Button>

          <InputErrorMessage formik={formik} field="firstName" />
          <InputErrorMessage formik={formik} field="lastName" />
          <InputErrorMessage formik={formik} field="participation" />
        </StyledForm>
      </Container>
    </Wrapper>
  );
};

export default Form;
