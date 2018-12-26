

export const userConstants = {
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_ERROR: 'USERS_LOGIN_ERROR',
};

// let user_token = JSON.parse(localStorage.getItem('user_token'));
let userToken = localStorage.getItem('userToken');

const initialState = {
    userToken: userToken ? userToken : '',
};

export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {...state, userToken: action.payload};

        case userConstants.LOGIN_ERROR:
            return {...state, userToken: action.payload};

        default:
            return state;
    }
}