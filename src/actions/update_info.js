import { API_BASE_URL } from '../config';

export const UPDATE_INFO = 'UPDATE_INFO';
export const updateInfo = info => ({
    type: UPDATE_INFO,
    info
});

export const UPDATE_INFO_ERROR = 'UPDATE_INFO_ERROR';
export const updateInfoError = err => ({
    type: UPDATE_INFO_ERROR,
    error: 'Could not update profile'
})

export const updateUserInfo = info => dispatch => {
    const id = localStorage.getItem("id");
    return fetch(`${ API_BASE_URL }/employee/${id}/info`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(info),
        mode: 'cors'
    })
    .then(res => res.json(info))
    .catch(err => {
        dispatch(updateInfoError(err))
    });
};
