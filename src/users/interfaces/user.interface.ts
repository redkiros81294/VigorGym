// src/users/interfaces/user.interface.ts
// export interface User {
//     id?: string;
//     username: string;
//     password: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//   }
  
// user.interface.ts
import { Types } from 'mongoose';

export interface User {
  id?: string; // Optional id field
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
}


