import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    itemsRef: AngularFireList<any>;
    userList:any
  constructor(private http: HttpClient, private firebase: AngularFireDatabase) {
   
   }

getUsers() {
    this.itemsRef = this.firebase.list('users');
    return this.itemsRef;
}

  registerUser(formData) {
     this.itemsRef.push(formData);
  }
}
