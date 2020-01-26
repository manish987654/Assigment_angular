import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateUserComponent, SignInComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
