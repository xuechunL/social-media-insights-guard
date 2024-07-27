// src/utils/roles.js
export const roles = {
  ADMIN: 'admin', // Can access all pages
  ANALYST: 'analyst', // Can access Analysis page
  ENGINEER: 'engineer', // Can access Workplace page
  NOCODE_USER: 'default', // Can access ONLY the Monitor page
};

export const rolePermissions = {
  [roles.ADMIN]: ['/analysis', '/monitor', '/workplace'],
  [roles.ANALYST]: ['/analysis'],
  [roles.ENGINEER]: ['/workplace'],
  [roles.NOCODE_USER]: ['/default'],
};
