interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'HR Manager', 'Employee', 'Administrator'],
  tenantName: 'Organization',
  applicationName: 'test',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
