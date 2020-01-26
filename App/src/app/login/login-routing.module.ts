import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component'
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
   { path: '', component: CreateUserComponent },
   { path: 'signIn', component: SignInComponent },
  // { path: 'login', loadChildren: "src/app/page/login/login.page.module#LoginPageModule" },
  // { path: 'register', loadChildren: "src/app/page/register/register.page.module#RegisterPageModule" },
  // { path: 'tabpage', loadChildren: "src/app/page/page-with-tab/with-tab.page.module#WithTabPageModule" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
