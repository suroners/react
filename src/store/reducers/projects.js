export const projectConstants = {
    ADD_PROJECT: 'ADD_PROJECT',
    GET_PROJECT: 'GET_PROJECT',
    GET_PROJECTS: 'GET_PROJECTS',
    DELETE_PROJECT: 'DELETE_PROJECT',
    ERROR_PROJECT: 'ERROR_PROJECT',
};


const initialState = {
    projectId: '',
    projects: [],
    project: {
        name: '',
        description: '',
        percent: '',
        date: '',
    },
    errorMessage: ''
};

export const projects = (state = initialState, action) => {
    switch (action.type) {
        case projectConstants.ADD_PROJECT:
            return {...state, userToken: action.payload};

        case projectConstants.GET_PROJECTS:
            return {...state, projects: action.payload};

        case projectConstants.GET_PROJECT:
            return {...state, project: action.payload};

        case projectConstants.ERROR_PROJECT:
            return {...state, errorMessage: action.payload};

        case projectConstants.DELETE_PROJECT:
            const projects = state.projects.filter((obj) => {return obj.id !== action.payload});
            return {...state, projects: projects};

        default:
            return state;
    }
}