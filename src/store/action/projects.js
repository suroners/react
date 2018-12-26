import {conf} from "../../conf";
import axios from 'axios';

import {projectConstants} from '../reducers/projects';
import {addData, deleteById, getById, udpatById} from "../../helper/api"


// let api = axios.create({
//     baseURL: 'http://localhost:3001/projects',
//     headers: {
//
//     }
// });
// console.log(api.get(),'api')

const getProjects = () => dispatch => {
    return axios.get(`${conf.api_url}/projects/`)
        .then(response => {
            dispatch({
                type: projectConstants.GET_PROJECTS,
                payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: projectConstants.GET_PROJECTS,
                payload: []
            });
        })
};

const getProject = (id) => dispatch => {
    return getById('projects', id)
        .then(response => {
            delete response.data.id
            dispatch({
                type: projectConstants.GET_PROJECT,
                payload: response.data
            });
        })
        .catch(function (error) {
            dispatch({
                type: projectConstants.ERROR_PROJECT,
                payload: error
            });
        })
};

const addProject = (project) => dispatch => {
    return addData('projects', project)
        .then(response => {
            return response;
        })
        .catch(function (error) {
            return error;
        })
};

const updateProject = (project, id) => dispatch => {
    return udpatById('projects', id, project)
        .then(response => {
            return response;
        })
        .catch(function (error) {
            return error;
        })
};

const deleteProject = (id) => dispatch => {
    return deleteById('projects', id)
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


export const projects = {
    getProject,
    getProjects,
    addProject,
    updateProject,
    deleteProject,
};
