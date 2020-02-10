import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm :FormGroup
  userList:any;
  loading = false;
  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private userService: UserService
    ) {

      if(this.authenticationService.currentUserValue) {
        this.router.navigateByUrl('/');
      }
     }

  ngOnInit() {
    if(!firebase.auth().currentUser) {
      alert("email verification link has been sent to your email address. please verify before login.")
    }
    
     this.signInForm = this.formBuilder.group({
       email: ['',Validators.required],
       password: ['',Validators.required]
     })
  }

  get f() { return this.signInForm.controls; }

  onSubmit() {
   this.loading = true;
   this.authenticationService.SignIn(this.signInForm.value);
  }
}
