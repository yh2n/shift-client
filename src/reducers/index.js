import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './reducers/auth';
import protectedDataReducer from './reducers/protected_data';


const rootReducer =  
    combineReducers({
        form: formReducer,
        auth: authReducer,
        protectedData: protectedDataReducer
    })