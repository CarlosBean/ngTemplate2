import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { fontAwesomeIcons } from '../assets/icons/font-awesome-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './layouts/home/home.component';
import { IndexComponent } from './index/index/index.component';
import { HttpClientModule } from '@angular/common/http';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent, SidebarComponent, HomeComponent, IndexComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(...fontAwesomeIcons);
  }
}
