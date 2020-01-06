import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInOut } from 'src/app/animations';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
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

  configTopbar = {
    title: 'registered users',
    placeholder: 'search account',
    button: { action: 'new', name: 'new' },
    filter: [
      { type: 'ASC', name: 'ascending' },
      { type: 'DESC', name: 'descending' }
    ],
    /* fabs: [
      { action: 'status', icon: 'fas fa-user-alt-slash', class: 'btn-warning' },
      { action: 'delete', icon: 'fas fa-trash', class: 'btn-danger' },
      { action: 'delete', icon: 'fas fa-trash', class: 'btn-danger' },
      { action: 'delete', icon: 'fas fa-trash', class: 'btn-danger' },
      { action: 'delete', icon: 'fas fa-trash', class: 'btn-danger' }
    ] */
    menus: [
      /* { rsrc: 'users', name: 'users', selected: true },
      { rsrc: 'employees', name: 'employees', selected: false },
      { rsrc: 'admins', name: 'admins', selected: false },
      { rsrc: 'super', name: 'super', selected: false } */
    ]
  };

  selected = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  getTopbarEvt(action: string) {
    switch (action) {
      case 'new':
        this.router.navigate(['new'], { relativeTo: this.route });
        break;

      default:
        console.log(action);
        break;
    }
  }

  getCardEvt(evt: any, index: number) {
    switch (evt.action) {
      case 'check':
        this.selected = evt.status
          ? [...this.selected, evt.id]
          : this.selected.filter(card => card !== evt.id);
        break;
      case 'delete':
        this.users.splice(index, 1);
        break;
      case 'edit':
        console.log('edit');
        break;
      default:
        console.log(evt);
        break;
    }
  }
}
