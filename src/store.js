import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local_storage';
import authReducer from '../src/reducers/auth';
import protectedDataReducer from '../src/reducers/protected_data';
import employeeReducer from '../src/reducers/fetch_employees';
//import UserInfoReducer from './reducers/fetch_employee_info';
import scheduleReducer from '../src/reducers/set_schedule';
import { setAuthToken,refreshAuthToken } from '../src/actions/auth';

// const enhancers = compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : f => f
// );


const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        employees: employeeReducer,
        schedule: scheduleReducer,
    }), 
    applyMiddleware(thunk), 
    // enhancers
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    //store.dispatch(refreshAuthToken(token));
}
console.log(store.getState());

export default store;