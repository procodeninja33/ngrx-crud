import * as employeeAction from './employee.actions';
import * as fromRoot from './employee.state';
import { employeeActionType } from './employee.actions';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Employees } from 'src/app/models/response.model';

export interface EmployeeState extends EntityState<Employees> {
    selectedCustomerId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState{
    employees: EmployeeState;
}

export const employeeAdapter: EntityAdapter<Employees> = createEntityAdapter<Employees>({});

export const getEmployees = createSelector(
    createFeatureSelector('employees'),
    employeeAdapter.getSelectors().selectAll
);

export const getError = createSelector(
    createFeatureSelector('employees'),
    (state) => {return state['loaded']}
)

export const defaultEmployee: EmployeeState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: "",
};

export const initialState = employeeAdapter.getInitialState(defaultEmployee);


export function employeeReducer(state = initialState, action: employeeAction.action): EmployeeState {
    switch (action.type) {
        case employeeActionType.LOAD_EMPLOYEE_SUCCESS:
            return  employeeAdapter.addAll(
                action['payload'], {
                ...state,
                loading: false,
                loaded: true
              });
            // let data = {
            //     ...state,
            //     entities: action['payload']['data']['employees']
            // }
            // console.log('data', data);
            // return data;
        case employeeActionType.LOAD_EMOLOYEE_ERROR:
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action['payload']
            }
        default:
            return { ...state }
    }
}


