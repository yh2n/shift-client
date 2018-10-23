import {
    SET_AUTH_TOKEN, 
    CLEAR_AUTH, 
    SET_CURRENT_USER
} from '../actions/auth';

const initialState = {
    authToken: null, // authToken !== null does not mean it has been validated
    currentUser: null
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        const authToken = action.authToken;
        localStorage.setItem('authToken', authToken);
        console.log(action.authToken);
        return Object.assign({}, state, {
            authToken: action.authToken
        });
    } else if (action.type === SET_CURRENT_USER) {
        console.log(action.currentUser.id);
        console.log(action.currentUser);
        let id = action.currentUser.id;
		localStorage.setItem("id", id);
        let currentUser = action.currentUser.firstName;
		localStorage.setItem("currentUser", currentUser);
        return Object.assign({}, state, {
            currentUser: action.currentUser
        });
    } else if (action.type === CLEAR_AUTH) {
        localStorage.removeItem('id');
        localStorage.removeItem('username');
        return Object.assign({}, state, {
            authToken: null,
            currentUser: null
        });
    } 
    return state;
}