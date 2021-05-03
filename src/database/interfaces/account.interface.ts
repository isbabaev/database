export interface CreateAccount {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface CreateAccountResult {
  id: number;
}
