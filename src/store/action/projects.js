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
                payload: []
            });
        })
}

const add_projects = (project) => dispatch => {
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
                payload: []
            });
        })
}

const delete_project = (id) => dispatch => {
    return axios.delete(`${conf.api_url}/projects/${id}`)
        .then(response => {
            dispatch({
                type: projectConstants.DELETE_PROJECT,
                payload: id
            });
        })
        .catch(function (error) {
            dispatch({
                type: projectConstants.DELETE_PROJECT,
                payload: id
            });
        })
}


export const projects ={
    get_projects,
    delete_project,
}
