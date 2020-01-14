import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeeService } from '../employee.service';
import {Router, Route, ActivatedRoute} from '@angular/router';
import { Employee } from '../employee';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) { }
  employee: Employee = {
    id:0,
    name:"",
    phone: "",
    address:{
      city: "",
      postal_code: ""
    }
  };
  headerText: string;
  ngOnInit() {
    
    this.createForm();
    if(this.route.snapshot.params.id) {
      this.headerText = "Update Employee";
      this.employee = this.employeeService.employee;
    } else {
      this.headerText = "Create Employee";
    }
  }

  employeeForm: FormGroup;

  get fc() { return this.employeeForm.controls;}
   
  // get name() { return this.employeeForm.get('name'); }
  // get phone() { return this.employeeForm.get('phone'); }
  // get city() { return this.employeeForm.get('address').get('city'); }
  // get postal_code() { return this.employeeForm.get('address').get('postal_code'); }

  createForm() {
    this.employeeForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        postal_code: ['', Validators.required]
      })
    })

  }

  discardChanges() {
    this.employee = {
      id:0,
      name:"",
      phone: "",
      address:{
        city: "",
        postal_code: ""
      }
    }
  }

  onSubmit() {
    if(this.route.snapshot.params.id) {
      this.employeeForm.value.id = this.route.snapshot.params.id;
      this.employeeService.updateEmployee(this.employeeForm.value, this.route.snapshot.params.id)
    } else {  
      this.employeeForm.value.id = this.employeeForm.value.id+1;
      this.employeeService.addEmployee(this.employeeForm.value);
    }
  }
}
