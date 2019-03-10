import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'farmer', loadChildren:'./farmer/farmer.module#FarmerModule'},
  {path:'diller', loadChildren:'./diller/diller.module#DillerModule'},
  {path:'user', loadChildren:'./user/user.module#UserModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
