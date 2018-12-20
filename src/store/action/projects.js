import { conf } from "../../conf";
import axios from 'axios';

import { projectConstants } from '../reducers/projects';


const get_projects = () => dispatch => {
    return axios.get(`${conf.api_url}/projects/`)
        .then(response => {
            dispatch({
                type: projectConstants.GET_PROJECT,
                payload: response.data
            });
        })
        .catch(function (error) {
            dispatch({
                type: projectConstants.GET_PROJECT,
                payload: ""
            });
        })
}


export const projects ={
    get_projects,
}
