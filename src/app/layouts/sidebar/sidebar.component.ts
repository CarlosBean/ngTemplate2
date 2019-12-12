import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/index/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuToggled = false;

  accountMenu = [
    {
      title: 'Edit Profile',
      icon: 'fas fa-user',
      route: 'users'
    },
    {
      title: 'Option #2',
      icon: 'fas fa-user',
      route: 'users'
    },
    {
      title: 'Option #3',
      icon: 'fas fa-user',
      route: 'users'
    }
  ];

  generalMenu = [
    {
      title: 'Manage Users',
      icon: 'fas fa-user',
      route: 'users'
    },
    {
      title: 'Manage Posts',
      icon: 'fas fa-user',
      route: 'posts'
    },
    {
      title: 'Manage Comments',
      icon: 'fas fa-user',
      route: 'comments'
    },
    {
      title: 'Settings',
      icon: 'fas fa-cog',
      route: 'users'
    }
  ];

  constructor(public accountService: AccountService) {}

  ngOnInit() {}

  logout() {
    this.accountService.logout();
  }
}
