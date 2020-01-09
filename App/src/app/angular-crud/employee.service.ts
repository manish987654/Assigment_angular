import { Injectable } from '@angular/core';
import {Employee } from './employee'
import {Http, Response} from "@angular/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  empList: Employee[] =  [{
    "id": 1,
    "name": "Jhon",
    "phone": "9999999999",
    "address": {
      "city": "Pune",
      "postal_code":"12455"
      }
    }, {
    "id": 2,
    "name": "Jacob",
    "phone": "AZ99A99PQ9",
    "address": {
      "city": "Pune",
      "postal_code":"13455"
      }
    }, {
    "id": 3,
    "name": "Ari",
    "phone": "145458522",
    "address": {
      "city": "Mumbai",
      "postal_code":"12455"
      }
    }]

  getEmployeeList() {
    return this.empList;
 // get all employee from server/json file
  }
}
