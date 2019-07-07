export class ILogin {
    userid: string;
    password: string;
}

export class LoginResp {
  authLogin: boolean;
  isAdmin: boolean;
}
