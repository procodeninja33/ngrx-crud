import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from "@ngrx/effects";
import { EmployeeService } from './employee.service';
import { Observable, of } from 'rxjs';
import * as EmployeeActions from './employee.actions';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ApiResponse } from 'src/app/models/response.model';


@Injectable()
export class EmployeeEffect {

    constructor(
        private actions: Actions,
        private employeeService: EmployeeService
    ) { }

    @Effect()
    loadEmployees: Observable<Action> = this.actions.pipe(
        ofType<EmployeeActions.LoadEmployees>(
            EmployeeActions.employeeActionType.LOAD_EMPLOYEES
        ),
        switchMap((actions: EmployeeActions.LoadEmployees) => {
            return this.employeeService.getAllEmployees()
                .pipe(
                    map((response: ApiResponse) => response.status === 200 ? 
                    new EmployeeActions.LoadEmployeesSuccess(response['data']['employees']) : 
                    new EmployeeActions.LoadEmployeesError(response))
                    // catchError((err) => of(new EmployeeActions.LoadEmployeesError(err)))
                );
        })
    )
}