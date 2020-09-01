import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import { RouterModule } from '@angular/router';
import { AppCommonRoutingModule } from './app-common-routing.module';
import { FeaturesModule } from '../features/features.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    MenubarModule,RouterModule,MenuModule,AppCommonRoutingModule,FeaturesModule,CommonModule
    
  ] ,schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppCommonModule { }
