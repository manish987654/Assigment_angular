import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeLIstComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  employeeList: Employee[];

  ngOnInit() {
    this.loadEmployeeList();
  }

  loadEmployeeList() {
   this.employeeList = this.employeeService.getEmployeeList();
  }

}
