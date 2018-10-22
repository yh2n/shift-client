import { SET_EMPLOYEE_SCHEDULE_SUCCESS } from '../actions/set_schedule';


const intialState = {
    schedule: {}
}

export default function scheduleReducer(state = intialState, action) {
    if (action.type === SET_EMPLOYEE_SCHEDULE_SUCCESS) {
        return Object.assign({}, state, {
            error: null,
            loading: false,
            schedule: action.schedule
        });
    }
    return state
}