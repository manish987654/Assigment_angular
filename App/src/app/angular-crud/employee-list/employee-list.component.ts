import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import {observable} from 'rxjs'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeLIstComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }
  employee: Employee;
  employeeList: Employee[];
  noDataFound = "";
  searchInput = "";
  filteredEmployees: Employee[];

  ngOnInit() {
    this.loadEmployeeList();
  }

  loadEmployeeList() {
    this.employeeService.getEmployeeList.subscribe(empList => {
      this.employeeList = empList;
      this.assignCopy();
      if(empList.length == 0) {{
        this.noDataFound = "No data available";
      }}
   });
  }

  assignCopy() {
    this.filteredEmployees = JSON.parse(JSON.stringify(this.employeeList));
  }

  updateEmployee(employee) {
    this.employeeService.setEmployee(employee);
    this.router.navigateByUrl('/employeeList/edit/'+employee.id);
   // this.employeeService.updateEmployee(employee)
  }

  deleteEmployee(id) {
    this.employeeService.deleteEmployee(id);
  }

  searchEmployee(value) {
     if(!value){
      this.assignCopy();
      } // when nothing has typed
      this.filteredEmployees = JSON.parse(JSON.stringify(this.employeeList)).filter(
        item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      )};

}
