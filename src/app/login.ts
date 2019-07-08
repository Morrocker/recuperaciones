export class ILogin {
    userId: string;
    password: string;
}

export class LoginResp {
  authLogin: boolean;
  isAdmin: boolean;
  userId: number;
}
