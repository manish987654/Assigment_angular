import { Injectable } from '@angular/core';
import {Employee } from './employee'
import {Http, Response} from "@angular/http";
import { Router } from '@angular/router';
import {BehaviorSubject, Observable, observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private router: Router) { }

  employee: Employee;
   
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

    setEmployee(employeeData) {
      this.employee = employeeData;
    }

  getEmployee = new BehaviorSubject(this.empList)
  getEmployeeList = this.getEmployee.asObservable();


  addEmployee(employeeData) {
    if(this.empList.find(emp=> emp.name == employeeData.name)) {
      alert("Employee already exist");
    } else {
      employeeData.id = this.empList.length+1;
      this.empList.push(employeeData)
      this.router.navigateByUrl('/employeeList');
    }
    this.getEmployee.next(this.empList);
  }

  updateEmployee(employeeData) {
    this.empList = this.empList.map(emp => {
                if(emp.id == employeeData.id) {
                  emp = employeeData;
                }
                return emp;
              })
              this.getEmployee.next(this.empList);
    this.router.navigateByUrl('/employeeList');
  }

  deleteEmployee(empId) {
   this.empList = this.empList.filter(emp =>
    {
       if(emp.id != empId) {
         return emp;
       }
    });
    this.getEmployee.next(this.empList);

  }

}
