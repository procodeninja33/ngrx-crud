import { Action } from '@ngrx/store';
import { ApiResponse, Employees } from 'src/app/models/response.model';


export enum employeeActionType {
    LOAD_EMPLOYEES = '[Employee] Load Employees',
    LOAD_EMPLOYEE_SUCCESS = '[Employee] Load Employee Success',
    LOAD_EMOLOYEE_ERROR = '[Employee] Load Employee Error'
}

export class LoadEmployees implements Action {
    public type = employeeActionType.LOAD_EMPLOYEES;
}

export class LoadEmployeesSuccess implements Action {
    public type = employeeActionType.LOAD_EMPLOYEE_SUCCESS;
    constructor(public payload: Employees[]) {}
}

export class LoadEmployeesError implements Action {
    public type = employeeActionType.LOAD_EMOLOYEE_ERROR;
    constructor(public payload: ApiResponse) {}
}

export type action = 
LoadEmployees |
LoadEmployeesSuccess |
LoadEmployeesError;