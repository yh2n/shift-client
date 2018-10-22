import { 
    FETCH_EMPLOYEE_SUCCESS
    //FETCH_EMPLOYEE_ERROR 
} from '../actions/fetch_employees';

const initialState = {
    employees: [],
    error: null,
    loading: false
}

export default function employeeReducer(state = initialState, action) {
    if (action.type === FETCH_EMPLOYEE_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            employees: action.employees
        });
    }
    return state;
}