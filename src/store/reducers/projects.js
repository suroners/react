export const projectConstants = {
    ADD_PROJECT: 'ADD_PROJECT',
    GET_PROJECT: 'GET_PROJECT',
    GET_PROJECTS: 'GET_PROJECTS',
    DELETE_PROJECT: 'DELETE_PROJECT',
};


const initialState = {
    project_id: '',
    projects: [],
    project: {
        name: '',
        description: '',
        percent: '',
        date: '',
    }
};

export const projects = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case projectConstants.ADD_PROJECT:
            return {...state, user_token: action.payload};

        case projectConstants.GET_PROJECTS:
            return {...state, projects: action.payload};

        case projectConstants.GET_PROJECT:
            return {...state, project: action.payload};

        case projectConstants.DELETE_PROJECT:
            const projects = state.projects.filter((obj) => {return obj.id !== action.payload});
            return {...state, projects: projects};

        default:
            return state;
    }
}