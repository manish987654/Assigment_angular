import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeLIstComponent } from './employee-list/employee-list.component';
import { AngularCrudRoutingModule } from './angular-crud-routing.module';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, AngularCrudRoutingModule, ReactiveFormsModule
  ],
  declarations: [EmployeeLIstComponent, AddEmployeeComponent]
})
export class AngularCrudModule { }
