import { API_BASE_URL } from '../config';

export const FETCH_EMPLOYEE_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
export const fetchEmployeeSuccess = employees => ({
    type: FETCH_EMPLOYEE_SUCCESS,
    employees
})

export const FETCH_EMPLOYEE_ERROR = 'FETCH_EMPLOYEE_ERROR';
export const fetchEmployeeError = err => ({
    type: FETCH_EMPLOYEE_ERROR,
    error: 'Could not load employee list'
})

export const fetchEmployees = () => dispatch => {
    fetch(`${API_BASE_URL}/admin/employee_list`)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(employees => {
            dispatch(fetchEmployeeSuccess(employees));
        })
        .catch(err => {
            dispatch(fetchEmployeeError(err))
        });
}