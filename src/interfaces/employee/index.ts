import { AttendanceInterface } from 'interfaces/attendance';
import { LeaveInterface } from 'interfaces/leave';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  job_title: string;
  status: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  leave?: LeaveInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    attendance?: number;
    leave?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  status?: string;
  user_id?: string;
  organization_id?: string;
}
