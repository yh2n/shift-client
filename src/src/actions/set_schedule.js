
export const SET_EMPLOYEE_SCHEDULE_SUCCESS= 'SET_EMPLOYEE_SCHEDULE_SUCCESS';
export const setEmployeeScheduleSuccess = (schedule, employee) => ({
    type: SET_EMPLOYEE_SCHEDULE_SUCCESS,
    schedule
})

export const SET_EMPLOYEE_SCHEDULE_ERROR = 'SET_EMPLOYEE_SCHEDULE_ERROR';
export const setEmployeeScheduleError = err => ({
    type: SET_EMPLOYEE_SCHEDULE_ERROR ,
    error: 'Could not load employee list'
})

export const setEmployeeSchedule = () => dispatch => 
        (schedule, employee) => {
            dispatch(setEmployeeScheduleSuccess(schedule, employee));
        }