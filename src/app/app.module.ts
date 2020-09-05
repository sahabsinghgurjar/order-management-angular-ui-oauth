import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CalendarModule} from 'primeng/calendar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {DropdownModule} from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputMaskModule} from 'primeng/inputmask';
import {MenubarModule} from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import { ProgressInterceptor } from './shared/progress.interceptor';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

const oktaConfig = {
  issuer: 'https://dev-676339.okta.com/oauth2/default',
  //redirectUri: window.location.origin + '/callback',
  redirectUri:'http://localhost:4200/callback',
 //redirectUri:'http://localhost:4200/orderManagement/home',
// post_logout_redirect_uri:'http://localhost:4200/orderManagement/home/logout',
  clientId: '0oau6kwt7fXnMRA904x6',
  scopes: ['read','profile','openid']
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    OktaAuthModule,
    CommonModule,
    BrowserModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,DropdownModule,InputMaskModule,RouterModule,MenubarModule,HttpClientModule,TableModule,ButtonModule,ProgressSpinnerModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ProgressInterceptor, multi: true },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 }
