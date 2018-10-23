import { UPDATE_INFO } from '../actions/update_info';

const initilaState = {
    info: []
}

export default function employeeInfoReducer(state = initialState, action) {
    if (action.type === UPDATE_INFO) {
        return Object.assign({}, state, {
             info: action.info
        });
    }
    return state;
}