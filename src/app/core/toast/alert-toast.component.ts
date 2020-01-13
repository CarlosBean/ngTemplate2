import { Component, Input } from '@angular/core';
import { ICustomAlert } from './custom-alert.model';

@Component({
  selector: 'app-alert',
  styleUrls: ['./alert-toast.component.scss'],
  template: `
    <div class="custom-alert" [ngClass]="config.alertType">
      <span class="icon-alert">
        <fa-icon [icon]="config.icon" fixedWidth="true" size="3x"></fa-icon>
      </span>
      <div class="info-alert">
        <h3>{{ config.title }}</h3>
        <p>{{ config.text }}</p>
      </div>
    </div>
  `
})
export class AlertToastComponent {
  @Input() config: ICustomAlert;
}
