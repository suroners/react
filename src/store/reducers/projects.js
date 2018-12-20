export const projectConstants = {
    ADD_PROJECT: 'ADD_PROJECT',
};


const initialState = {
    project_id: '',
};

export const projects = (state = initialState, action) => {
    switch (action.type) {
        case projectConstants.ADD_PROJECT:
            return {...state, user_token: action.payload};

        default:
            return state;
    }
}