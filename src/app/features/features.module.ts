import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserRegisterationComponent } from './components/user-registeration/user-registeration.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductRegisterationComponent } from './components/product-registeration/product-registeration.component';
import { OrderSearchComponent } from './components/order-search/order-search.component';
import { RouterModule } from '@angular/router';
import { FeaturesRoutingModule } from './features-routing.module';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ButtonModule} from 'primeng/button';
import { OrderFormComponent } from './components/order-form/order-form.component';



@NgModule({
  declarations: [ UserSearchComponent, UserRegisterationComponent, ProductSearchComponent, ProductRegisterationComponent, OrderSearchComponent, OrderFormComponent],
  imports: [
    RouterModule,FeaturesRoutingModule,TableModule ,CommonModule,ReactiveFormsModule,MessagesModule,MessageModule,ButtonModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class FeaturesModule { }
