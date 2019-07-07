export class Request {
  id: number;
  delivery: {
    cName: string;
    cPhone: string;
    address: {
      city: string;
      com: string;
      street: string;
      sNumber: number;
      details: string;
    };
    fromTime: string;
    toTime: string;
  };
  motive: string;
  rDate: string;
  rStatus: string;
  rSize: string;
}

export class RequestShort {
  id: number;
  rDate: string;
  rStatus: string;
  rSize: string;
}


export class Recovery {
  id: number;
  recId: number;
  user: string;
  machine: string;
  disk: string;
  deleted: boolean;
  date: string;
  size: string;
}

export class NewRecovery {
  name: string;
  machine: string;
  disk: string;
  deleted: boolean;
  recoveryDate: string;
}

export class Login {
  email: string;
  passwd: string;
}
export class Request2 {
  id: number;
  userId: number;
  delivery: {
    cName: string;
    cPhone: string;
    address: {
      city: string;
      com: string;
      street: string;
      sNumber: number;
      details: string;
    };
    fromTime: string;
    toTime: string;
  };
  motive: string;
  rDate: string;
  rStatus: string;
  rSize: string;
}
