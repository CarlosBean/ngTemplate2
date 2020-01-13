import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <app-topbar
      (action)="getTopbarEvt($event)"
      [config]="configTopbar"
    ></app-topbar>
    <div class="main-container">
      <ng-container *ngFor="let user of users; let i = index">
        <app-card [item]="user" (action)="getCardEvt($event, i)"></app-card>
      </ng-container>
    </div>
  `,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any;
  configTopbar = {
    title: 'registered users',
    placeholder: 'search account',
    button: { action: 'new', name: 'new' },
    filter: [
      { type: 'ASC', name: 'ascending' },
      { type: 'DESC', name: 'descending' }
    ],
    fabs: [
      { action: 'status', icon: 'user-alt-slash', class: 'btn-warning' },
      { action: 'delete', icon: 'trash', class: 'btn-danger' }
    ],
    menus: [
      { label: 'users', name: 'users', selected: true },
      { label: 'admins', name: 'admins', selected: false }
    ]
  };

  selected = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public userService: UserService
  ) {
    this.userService.getAll().subscribe(res => (this.users = res));
  }

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
        evt.status ? this.selected.push(evt.id) : this.removeSelected(evt.id);
        break;
      case 'delete':
        this.users.splice(index, 1);
        break;
      case 'edit':
        console.log(evt);
        break;
      default:
        console.log(evt);
        break;
    }
  }

  removeSelected(id: any) {
    const index = this.selected.indexOf(id);
    if (index > -1) this.selected.splice(index, 1);
  }
}
