import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { AddEmployeeComponent, EditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer } from './employess-state/employee.reducer';
import { EmployeeEffect } from './employess-state/employee.effect';
import { EmployeeService } from './employess-state/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: 'add-employee',
    component: AddEmployeeComponent,
  },
  {
    path: 'edit-employee/:is',
    component: EditEmployeeComponent,
  }
]

@NgModule({
  declarations: [EmployeesComponent, AddEmployeeComponent, EditEmployeeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature("employees", employeeReducer),
    EffectsModule.forFeature([EmployeeEffect])
  ],
  providers: [EmployeeService]
})
export class EmployeesModule { }
