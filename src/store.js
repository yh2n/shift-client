import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import { loadAuthToken } from './local_storage';
import authReducer from '../src/reducers/auth';
import protectedDataReducer from '../src/reducers/protected_data';
import employeeReducer from '../src/reducers/fetch_employees';
import scheduleReducer from '../src/reducers/set_schedule';
import { setAuthToken,refreshAuthToken } from '../src/actions/auth';



const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer,
        employees: employeeReducer,
        schedule: scheduleReducer,
    }), 
    applyMiddleware(thunk), 
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    //store.dispatch(refreshAuthToken(token));
}
console.log(store.getState());

export default store;