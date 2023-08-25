const mapping: Record<string, string> = {
  attendances: 'attendance',
  employees: 'employee',
  'job-vacancies': 'job_vacancy',
  leaves: 'leave',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
