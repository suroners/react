import { conf } from "../../conf";
import axios from 'axios';

import { projectConstants } from '../reducers/projects';


const get_projects = () => dispatch => {
    return axios.get(`${conf.api_url}/projects/`)
        .then(response => {
            dispatch({
                type: projectConstants.GET_PROJECTS,
                payload: response.data
            });
        })
        .catch(function (error) {
            dispatch({
                type: projectConstants.GET_PROJECTS,
                payload: []
            });
        })
};

const get_project = (id) => dispatch => {
    return axios.get(`${conf.api_url}/projects/${id}`)
        .then(response => {
            delete response.data.id
            dispatch({
                type: projectConstants.GET_PROJECT,
                payload: response.data
            });
        })
        .catch(function (error) {
            dispatch({
                type: projectConstants.GET_PROJECT,
                payload: {
                    name: '',
                    description: '',
                    percent: '',
                    date: '',
                }
            });
        })
};

const add_project = (project) => dispatch => {
    return axios.post(`${conf.api_url}/projects/`, project)
        .then(response => {
            return response;
        })
        .catch(function (error) {
            return error;
        })
};

const update_project = (project, id) => dispatch => {
    return axios.put(`${conf.api_url}/projects/${id}`, project)
        .then(response => {
            return response;
        })
        .catch(function (error) {
            return error;
        })
};

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
};


export const projects ={
    get_project,
    get_projects,
    add_project,
    update_project,
    delete_project,
};
