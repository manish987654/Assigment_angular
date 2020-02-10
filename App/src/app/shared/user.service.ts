import { Injectable, inject } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    itemsRef: AngularFireList<any>;
    userList:any
  constructor( private firebase: AngularFireDatabase) {
   
   }

getUsers() {
    this.itemsRef = this.firebase.list('users');
    return this.itemsRef;
}

  registerUser(formData) {
     this.itemsRef.push(formData);
  }
}
