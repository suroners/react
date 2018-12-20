export const projectConstants = {
    ADD_PROJECT: 'ADD_PROJECT',
    GET_PROJECT: 'GET_PROJECT',
};


const initialState = {
    project_id: '',
    projects: []
};

export const projects = (state = initialState, action) => {
    // console.log(action);
    switch (action.type) {
        case projectConstants.ADD_PROJECT:
            return {...state, user_token: action.payload};

        case projectConstants.GET_PROJECT:
            return {...state, projects: action.payload};

        default:
            return state;
    }
}