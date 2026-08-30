export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  password?: string;
  role: 'admin' | 'worker';
  remember_token: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface IUsersResponse {
  users: IUser[];
}