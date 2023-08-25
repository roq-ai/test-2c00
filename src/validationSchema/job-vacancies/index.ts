import * as yup from 'yup';

export const jobVacancyValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
