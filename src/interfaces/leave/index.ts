import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface LeaveInterface {
  id?: string;
  start_date: any;
  end_date: any;
  status: string;
  employee_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface LeaveGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  employee_id?: string;
}
