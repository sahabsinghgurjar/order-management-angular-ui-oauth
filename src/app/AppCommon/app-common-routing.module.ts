import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  { path: 'home',  component:HomeComponent,
  children: [
    {
       path: 'feature',  loadChildren: () => import('../features/features.module').then(m => m.FeaturesModule) ,
    }]
  },
  {path:'logout',component:HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes),RouterModule],
  exports: [RouterModule]
})
export class AppCommonRoutingModule { }
