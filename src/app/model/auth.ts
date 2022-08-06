export interface Auth {
  accessToken: string | null;
}

export interface Credentials {
  email: string;
  password: string;
}

interface Users {
  email: string;
  password: string;
} []

export type List = Users []