import jwtDecode from "jwt-decode";
import { SubmissionError } from "redux-form";

import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";
import { saveAuthToken, clearAuthToken } from "../local_storage";

export const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";
export const setAuthToken = authToken => ({
    type: SET_AUTH_TOKEN,
    authToken
});

export const CLEAR_AUTH = "CLEAR_AUTH";
export const clearAuth = () => ({
    type: CLEAR_AUTH
});

export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const setCurrentUser = currentUser => ({
    type: SET_CURRENT_USER,
    currentUser
});

//  Stores the auth token in state and localStorage
//decodes and stores user data contained in token
const storeAuthInfo = (authToken, dispatch, currentUser) => {
    const decodedToken = jwtDecode(authToken);
    dispatch(setAuthToken(authToken));
    dispatch(setCurrentUser(decodedToken.user));
    dispatch(setCurrentUser(currentUser));
    saveAuthToken(authToken);
};

export const login = (username, password) => dispatch => {
    // Base64 encodes the string username:password, used in basic auth field
    return (
        fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            // Reject any requests which don't return a 200 status, creating
            // errors which follow a consistent format
            .then(res => normalizeResponseErrors(res))
            .then(res => res.json())
            .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
            .catch(err => {
                const { code } = err;
                if (code === 401) {
                    // Could not authenticate, so return a SubmissionError for ReduxForm
                    return Promise.reject(
                        new SubmissionError({
                            _error: "Incorrect username or password"
                        })
                    );
                }
            })
    );
};

export const refreshAuthToken = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/auth/refresh`, {
        method: "POST",
        headers: {
            // Provide our existing token as credentials to get a new one
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
        .catch(err => {
            const { code } = err;
            if (code === 401) {
                // We couldn't get a refresh token because our current credentials
                // are invalid or expired, so clear them and sign us out
                dispatch(setCurrentUser(null));
                dispatch(setAuthToken(null));
                clearAuthToken(authToken);
            }
        });
};
