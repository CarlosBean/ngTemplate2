import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertToastComponent } from './toast/alert-toast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AlertToastComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AlertToastComponent],
  entryComponents: [AlertToastComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {}
