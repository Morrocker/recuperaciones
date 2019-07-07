import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Request, Recovery } from './classes';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const recoveries = [
      {
        id: 0,
        user: 'user1@empresa1.cl',
        machine: 'maquina1-laptop',
        disk: 'C',
        deleted: false,
        size: '475674',
        date: '234235'
      },
      {
        id: 1,
        user: 'user2@empresa1.cl',
        machine: 'maquina1-pc',
        disk: 'C',
        deleted: false,
        size: '12345',
        date: '09807'
      },
      {
        id: 2,
        user: 'director@empresa1.cl',
        machine: 'maquinaX-laptop',
        disk: 'D',
        deleted: true,
        size: '97752',
        date: '86876'
      },
    ];

    const requests = [
      { id: 0,
        rStatus: 'finalizada',
        motive: 'loss',
        rSize: '90879',
        rDate: '9387365',
        delivery: {
          cName: 'alvaro',
          cPhone: '9349583',
          address: {
            city: 'Santiago',
            com: 'Providencia',
            street: 'Providencia',
            sNumber: 231434,
            details: 'none'
          },
          fromTime: '23424324',
          toTime: '97978'}
      },
      { id: 1,
        rStatus: 'finalizada',
        motive: 'robo',
        rSize: '3456',
        rDate: '38756',
        delivery: {
          cName: 'Fernando',
          cPhone: '395687',
          address: {
            city: 'Santiago',
            com: 'Las Condes',
            street: 'Apoquindo',
            sNumber: 34646,
            details: 'oficina 4'
          },
          fromTime: '46353',
          toTime: '098908'}
      },
      { id: 2,
        rStatus: 'en curso',
        motive: 'virus',
        rSize: '6543',
        rDate: '234270',
        delivery: {
          cName: 'Miguel',
          cPhone: '289564',
          address: {
            city: 'Rancagua',
            com: 'La Pintana',
            street: 'Los abetos',
            sNumber: 3365,
            details: 'parcela 3'
          },
          fromTime: '2345687',
          toTime: '07998796'}
      },
    ];

    return {requests, recoveries};
  }

  constructor() { }
}
