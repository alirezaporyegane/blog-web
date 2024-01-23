export enum Role {
  WRITER = 'WRITER',
  ADMIN = 'ADMIN',
  USER = 'USER',
}



export type Account = {
  _id: string;
  firstName: string;
  userName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: Role[];
  legality: 0 | 1;
  image: string;
  confirmEmail: boolean;
  confirmPhoneNumber: boolean;
  confirmedProfile: boolean;
  password: string;
  confirmPassword: string;
  birthDate: string;
  job: string;
  nationalId: string;
};

export type LoginIn = Pick<Account, 'phoneNumber' | 'password'> & {
  uniqueId: string;
};

export type LoginOut = Pick<
  Account,
  | '_id'
  | 'userName'
  | 'phoneNumber'
  | 'email'
  | 'role'
  | 'firstName'
  | 'lastName'
> & {
  token: string;
  refreshToken: string;
  ttl: number;
  refreshTtl: number;
};
