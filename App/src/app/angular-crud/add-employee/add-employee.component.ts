import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  employeeForm: FormGroup;

  get fc() { return this.employeeForm.controls;}
   
  // get name() { return this.employeeForm.get('name'); }
  // get phone() { return this.employeeForm.get('phone'); }
  // get city() { return this.employeeForm.get('address').get('city'); }
  // get postal_code() { return this.employeeForm.get('address').get('postal_code'); }


  createForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', Validators.required],
      address: this.fb.group({
        city: ['', Validators.required],
        postal_code: ['', Validators.required]
      })  
    })

  }

  onSubmit() {
   console.log("form data",this.employeeForm.value);
  }

}
