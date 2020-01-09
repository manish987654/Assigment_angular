import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
   { path: 'employeeList', loadChildren: "src/app/angular-crud/angular-crud.module#AngularCrudModule" },
  // { path: 'login', loadChildren: "src/app/page/login/login.page.module#LoginPageModule" },
  // { path: 'register', loadChildren: "src/app/page/register/register.page.module#RegisterPageModule" },
  // { path: 'tabpage', loadChildren: "src/app/page/page-with-tab/with-tab.page.module#WithTabPageModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
