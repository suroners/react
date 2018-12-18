

export const userConstants = {
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_ERROR: 'USERS_LOGIN_ERROR',
};

let user_token = JSON.parse(localStorage.getItem('user_token'));

const initialState = {
    user_token: user_token ? user_token : '',
};

export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {...state, user_token: action.payload};

        case userConstants.LOGIN_ERROR:
            return {...state, user_token: action.payload};

        default:
            return state;
    }
}