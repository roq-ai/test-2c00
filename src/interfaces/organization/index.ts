import { EmployeeInterface } from 'interfaces/employee';
import { JobVacancyInterface } from 'interfaces/job-vacancy';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  employee?: EmployeeInterface[];
  job_vacancy?: JobVacancyInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    job_vacancy?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
