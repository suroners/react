let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const userConstants = {
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
};


export function authentication(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}