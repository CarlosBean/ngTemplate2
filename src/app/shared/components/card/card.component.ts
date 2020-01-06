import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="card" [class.card-checked]="user.checked">
      <div class="card-body">
        <div>
          <p class="mb-1">{{ user.id }}</p>
          <h6 class="m-0">{{ user.name }}</h6>
        </div>
        <div>
          <p class="light-text mb-1">{{ user.quantity }} users</p>
          <small>{{ user.status ? 'active' : 'inactive' }}</small>
        </div>
      </div>
      <div class="card-options">
        <input
          [(ngModel)]="user.checked"
          type="checkbox"
          (ngModelChange)="
            action.emit({ id: user.id, action: 'check', status: user.checked })
          "
        />
        <button [disabled]="user.checked">
          <fa-icon icon="user" fixedWidth="true" size="sm"></fa-icon>
          <!-- <i class="fas fa-user fa-sm fa-fw"></i> -->
        </button>
        <button
          [disabled]="user.checked"
          (click)="action.emit({ id: user.id, action: 'edit' })"
        >
          <fa-icon icon="pen" fixedWidth="true" size="sm"></fa-icon>
          <!-- <i class="fas fa-pen fa-sm fa-fw"></i> -->
        </button>
        <button
          [disabled]="user.checked"
          (click)="action.emit({ id: user.id, action: 'delete' })"
        >
          <!-- <i class="fas fa-times fa-sm fa-fw"></i> -->
          <fa-icon icon="times" fixedWidth="true" size="sm"></fa-icon>
        </button>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() user: any;
  @Output() action = new EventEmitter<any>();
}
