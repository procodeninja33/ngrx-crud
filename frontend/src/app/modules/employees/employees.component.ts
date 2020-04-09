import { Component, OnInit } from '@angular/core';
import * as EmployeeAction from './employess-state/employee.actions';
import * as EmployeeReducer from './employess-state/employee.reducer';
import { Store, select } from "@ngrx/store";
import { ApiResponse , Employees} from 'src/app/models/response.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Observable<Employees[]>;
  error: Observable<ApiResponse>

  constructor(private store: Store<EmployeeReducer.AppState>) { }

  async ngOnInit() {
    // create action & call API
    this.store.dispatch(new EmployeeAction.LoadEmployees());

    // get the employees values
    this.employees = await this.store.pipe(select(EmployeeReducer.getEmployees));

    // get error if found
    this.error = await this.store.pipe(select(EmployeeReducer.getError));
    
    console.log('error', this.error);

  }

}
