import axios from 'axios';
import queryString from 'query-string';
import { JobVacancyInterface, JobVacancyGetQueryInterface } from 'interfaces/job-vacancy';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getJobVacancies = async (
  query?: JobVacancyGetQueryInterface,
): Promise<PaginatedInterface<JobVacancyInterface>> => {
  const response = await axios.get('/api/job-vacancies', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createJobVacancy = async (jobVacancy: JobVacancyInterface) => {
  const response = await axios.post('/api/job-vacancies', jobVacancy);
  return response.data;
};

export const updateJobVacancyById = async (id: string, jobVacancy: JobVacancyInterface) => {
  const response = await axios.put(`/api/job-vacancies/${id}`, jobVacancy);
  return response.data;
};

export const getJobVacancyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/job-vacancies/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteJobVacancyById = async (id: string) => {
  const response = await axios.delete(`/api/job-vacancies/${id}`);
  return response.data;
};
