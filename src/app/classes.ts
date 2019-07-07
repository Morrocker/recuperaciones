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
  user: string;
  machine: string;
  disk: string;
  deleted: boolean;
  date: string;
  size: string;
}

export class Login {
  email: string;
  passwd: string;
}
