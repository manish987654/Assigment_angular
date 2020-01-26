import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  registerForm :FormGroup
  userList:any;
  loading = false;
  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthService,
    private userService: UserService) {

      if(this.authenticationService.currentUserValue) {
        this.router.navigateByUrl('/');
      }
     }

  ngOnInit() {
   this.userService.getUsers().snapshotChanges().subscribe(res => {
      this.userList = [];
      res.forEach(element => {
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.userList.push(x);
      });
      console.log(this.userList);
    });;

     this.registerForm = this.formBuilder.group({
       firstName: ['',Validators.required],
       lastName: ['',Validators.required],
       companyName: ['',Validators.required],
       email: ['',Validators.required],
       password: ['',Validators.required]
     })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
   this.loading = true;
   this.authenticationService.SignUp(this.registerForm.value);
  }
}