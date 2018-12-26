import axios from "axios";
import {conf} from "../conf";

function setHeaders() {
    axios.defaults.headers.common['Auth'] = localStorage.getItem('userToken');
}

export function getById(url, id) {
    setHeaders();
    const req = axios.get(`${conf.api_url}/${url}/${id}`);
    return req;
}

export function addData(url, data) {
    setHeaders();
    const req = axios.post(`${conf.api_url}/${url}/`, data);
    return req;
}

export function udpatById(url, id, data) {
    setHeaders();
    return axios.put(`${conf.api_url}/${url}/${id}`, data);
}

export function deleteById(url, id) {
    setHeaders();
    return axios.delete(`${conf.api_url}/${url}/${id}`);
}


