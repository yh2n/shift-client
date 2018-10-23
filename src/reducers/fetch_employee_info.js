import { 
    FETCH_EMPLOYEE_INFO_SUCCESS
    //FETCH_EMPLOYEE_ERROR 
} from '../actions/fetch_employee_info';

const initialState = {
    userInfo: {},
    error: null,
    loading: false
}

export default function userInfoReducer(state = initialState, action) {
    if (action.type === FETCH_EMPLOYEE_INFO_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            userInfo: action.user
        });
    }
    return state;
}