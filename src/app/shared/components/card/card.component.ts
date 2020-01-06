import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="card" [class.card-checked]="item.checked">
      <div class="card-body">
        <div>
          <p class="mb-1">{{ item.cedula }}</p>
          <h6 class="m-0">{{ item.nombre }}</h6>
        </div>
        <div>
          <p class="light-text mb-1">{{ item.quantity }} Proyectos</p>
          <p class="light-text mb-1">{{ item.quantity }} Tareas</p>
          <small>{{ item.estado ? 'activo' : 'inactivo' }}</small>
        </div>
      </div>
      <div class="card-options">
        <input
          [(ngModel)]="item.checked"
          type="checkbox"
          (ngModelChange)="
            action.emit({ id: item.id, action: 'check', status: item.checked })
          "
        />
        <button [disabled]="item.checked">
          <fa-icon icon="user" fixedWidth="true" size="sm"></fa-icon>
          <!-- <i class="fas fa-user fa-sm fa-fw"></i> -->
        </button>
        <button
          [disabled]="item.checked"
          (click)="action.emit({ id: item.id, action: 'edit' })"
        >
          <fa-icon icon="pen" fixedWidth="true" size="sm"></fa-icon>
          <!-- <i class="fas fa-pen fa-sm fa-fw"></i> -->
        </button>
        <button
          [disabled]="item.checked"
          (click)="action.emit({ id: item.id, action: 'delete' })"
        >
          <fa-icon icon="times" fixedWidth="true" size="sm"></fa-icon>
        </button>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() item: any;
  @Output() action = new EventEmitter<any>();
}
