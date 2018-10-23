import { API_BASE_URL } from '../config';

export const FETCH_EMPLOYEE_INFO_SUCCESS = 'FETCH_EMPLOYEE_SUCCESS';
export const fetchEmployeeInfoSuccess = employeeInfo => ({
    type: FETCH_EMPLOYEE_INFO_SUCCESS,
    employeeInfo
})

export const FETCH_EMPLOYEE_INFO_ERROR = 'FETCH_EMPLOYEE_ERROR';
export const fetchEmployeeInfoError = err => ({
    type: FETCH_EMPLOYEE_INFO_ERROR,
    error: 'Could not load employee info'
})

export const fetchEmployeeInfo = () => dispatch => {
    const id = localStorage.getItem("id");
    fetch(`${API_BASE_URL}/admin/employee/${id}`)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(employeeInfo => {
            console.log(employeeInfo.firstName);
            dispatch(fetchEmployeeInfoSuccess(employeeInfo));
        })
        .catch(err => {
            dispatch(fetchEmployeeInfoError(err))
        });
}