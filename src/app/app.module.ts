import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './search/search.component';
import {UsersService} from '../services/users.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavbarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    MatIconModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
