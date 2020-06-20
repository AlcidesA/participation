import React from 'react';
import { Input, Button, Wrapper, StyledForm } from './styles';
import { useFormik } from 'formik';
import { Container } from '../../../styles/container';
import ParticipationSchema from '../../../helpers/validators/participation';
import InputErrorMessage from '../../InputErrorMessage';
import { Participation } from '../../../views/Participation';

interface FormProps {
  addParticipation: (participation: Participation) => void;
}

interface FormValues {
  firstName: string;
  lastName: string;
  participation: number;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  participation: 0
};

const Form: React.FC<FormProps> = ({ addParticipation }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: ParticipationSchema,
    onSubmit: (values) => {
      addParticipation(values);
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
            type="number"
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
