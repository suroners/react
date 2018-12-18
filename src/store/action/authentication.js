import { conf } from "../../conf";
import axios from 'axios';

import { userConstants } from '../reducers/authentication';


const logout = (dispatch) => {
    return dispatch({
        'type': userConstants.LOGIN_ERROR,
        'payload': ''
    })
}

const login = (username, password) => dispatch =>{

    axios.get(`${conf.api_url}/users/`, {params:{ username: username, password: password }})
        .then(response => {
            if (response.data) {
                let user = response.data[0];

                localStorage.setItem('user_token', JSON.stringify(user.token));
                return dispatch({
                        'type': userConstants.LOGIN_SUCCESS,
                        'payload': user.token
                    })
            } else {
                return dispatch({
                    'type': userConstants.LOGIN_ERROR,
                    'payload': ''
                })
            }
        })
        .catch(function (error) {
            return dispatch({
                'type': userConstants.LOGIN_ERROR,
                'payload': ''
            })
        })
}


export const authentication ={
    login,
    logout
}
