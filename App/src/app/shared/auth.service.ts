import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserValue = false;

  constructor(  public afAuth: AngularFireAuth, public router:Router, public ngZone: NgZone) { }

    // Send email verfificaiton when new user sign up
    SendVerificationMail() {
      return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['/user/signIn']);
      })
    }

    SignUp(userData) {
      return this.afAuth.auth.createUserWithEmailAndPassword(userData.email, userData.password)
        .then((result) => {
          this.SendVerificationMail(); // Sending email verification notification, when new user registers
        }).catch((error) => {
          window.alert(error.message)
        })
    }

      // Sign in with email/password
  SignIn(userData) {
    return this.afAuth.auth.signInWithEmailAndPassword(userData.email, userData.password)
      .then((result) => {
        if (result.user.emailVerified !== true) {
          this.SendVerificationMail();
          window.alert('Please validate your email address. Kindly check your inbox.');
        } else {
          this.ngZone.run(() => {
            this.router.navigate(['']);
          });
        }
        //this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }
}
