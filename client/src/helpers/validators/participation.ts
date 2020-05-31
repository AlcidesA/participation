import * as Yup from 'yup';

const ParticipationSchema = Yup.object({
  firstName: Yup.string().required('Please enter your first name'),
  lastName: Yup.string().required('Please enter your last name'),
  participation: Yup.string().required('Please enter a participation')
});

export default ParticipationSchema;
