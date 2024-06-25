
// import { Types } from 'mongoose';

// export interface User {
//   id?: string; // Optional id field
//   username: string;
//   password: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   roles: string[];
// }

export interface User {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
  companyCode?: string;
}

