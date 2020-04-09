import * as employeeAction from './employee.actions';
import * as fromRoot from './employee.state';
import * as employeeActionType from './employee.actions';
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Employees } from 'src/app/models/response.model';

export interface EmployeeState extends EntityState<Employees> {
    selectedEmployeeId: any | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export interface AppState extends fromRoot.AppState {
    employees: EmployeeState;
}

export const employeeAdapter: EntityAdapter<Employees> = createEntityAdapter<Employees>();


export const defaultEmployee: EmployeeState = {
    ids: [],
    entities: {},
    selectedEmployeeId: null,
    loading: false,
    loaded: false,
    error: "",
};

export const initialState = employeeAdapter.getInitialState(defaultEmployee);


export function employeeReducer(state = initialState, action: employeeAction.action): EmployeeState {
    switch (action.type) {

        // case customerActions.CustomerActionTypes.LOAD_CUSTOMERS_SUCCESS: {
        //     return customerAdapter.addAll(action.payload, {
        //         ...state,
        //         loading: false,
        //         loaded: true
        //     });
        // }

        case employeeActionType.employeeActionType.LOAD_EMPLOYEE_SUCCESS:
            {
                return employeeAdapter.addAll(
                    action['payload'], {
                    ...state,
                    loading: false,
                    loaded: true
                });
            }
        case employeeActionType.employeeActionType.LOAD_EMOLOYEE_ERROR:
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




const getEmployeeFeatureState = createFeatureSelector<EmployeeState>(
    "employees"
);

export const getEmployees = createSelector(
    getEmployeeFeatureState,
    employeeAdapter.getSelectors().selectAll
);