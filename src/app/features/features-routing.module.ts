import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserRegisterationComponent } from './components/user-registeration/user-registeration.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductRegisterationComponent } from './components/product-registeration/product-registeration.component';
import { CommonModule } from '@angular/common';
import {OktaAuthGuard } from  '@okta/okta-angular';
import { OrderFormComponent } from './components/order-form/order-form.component';



const routes: Routes = [
  { path: 'userSearch', component:UserSearchComponent,
  canActivate: [OktaAuthGuard]

},{ path: 'userRegisteration', component:UserRegisterationComponent,
      canActivate: [OktaAuthGuard]

},{ path: 'productSearch', component:ProductSearchComponent,
          canActivate: [OktaAuthGuard]

},{ path: 'productAdd', component:ProductRegisterationComponent,
    canActivate: [OktaAuthGuard]

}, { path: 'orderForm', component:OrderFormComponent,
canActivate: [OktaAuthGuard]

},
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
