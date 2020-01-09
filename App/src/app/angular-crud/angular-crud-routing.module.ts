import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeLIstComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
   { path: '', component: EmployeeLIstComponent },
   { path: 'add', component: AddEmployeeComponent }
  // { path: 'register', loadChildren: "src/app/page/register/register.page.module#RegisterPageModule" },
  // { path: 'tabpage', loadChildren: "src/app/page/page-with-tab/with-tab.page.module#WithTabPageModule" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularCrudRoutingModule { }
