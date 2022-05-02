export interface IAuthUser {
  username: string;
  email: string;
  message: string;
  roles: string[];
  token: string;
  isAuthenticated: boolean;
  role: string;
  expiresOn: Date;
}
