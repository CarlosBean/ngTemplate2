import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      id: 1,
      cedula: '123456',
      nombre: 'Carlos De la Cruz',
      quantity: 10,
      status: true
    },
    {
      id: 2,
      cedula: '123456',
      nombre: 'Andres Gonzales',
      quantity: 15,
      status: true
    },
    {
      id: 3,
      cedula: '123456',
      nombre: 'Didier Perez',
      quantity: 8,
      status: true
    },
    {
      id: 4,
      cedula: '123456',
      nombre: 'Ofelia Nuñez',
      quantity: 22,
      status: true
    }
  ];

  constructor() {}

  getAll(): Observable<any> {
    return of(this.users);
  }
}
