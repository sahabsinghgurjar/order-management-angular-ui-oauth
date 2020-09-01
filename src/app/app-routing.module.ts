import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';



const routes: Routes = [
  { path: 'orderManagement',  loadChildren: () => import('./AppCommon/app-common.module').then(m => m.AppCommonModule) },
  { path: '',  loadChildren: () => import('./AppCommon/app-common.module').then(m => m.AppCommonModule) },
  {
    path: 'callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
