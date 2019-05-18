import { API_BASE_URL } from '../config';

export const FETCH_SCHEDULE_SUCCESS = 'FETCH_SCHEDULE_SUCCESS';
export const fetchEmployeeSuccess = schedules => ({
    type: FETCH_SCHEDULE_SUCCESS,
    schedules
})

export const FETCH_SCHEDULE_ERROR = 'FETCH_SCHEDULE_ERROR';
export const fetchscheduleError = err => ({
    type: FETCH_SCHEDULE_ERROR,
    error: 'Could not load schedules'
})

export const fetchschedule = () => dispatch => {
    fetch(`${API_BASE_URL}/employee/schedule`)
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(schedules => {
            dispatch(fetchscheduleSuccess(schedules));
        })
        .catch(err => {
            dispatch(fetchscheduleError(err))
        });
}