import React from "react";
import connect from "react-redux/es/connect/connect";
import {combineActions} from "../store/action";
import {bindActionCreators} from "redux";
import { ProjectForm } from "../helper/projectForm";

class AddEditProject extends React.Component{
    componentDidMount() {
        const projectId = this.props.match.params.projectId;
        this.props.getProject(projectId);
    }

    render() {
        return (
            <div className="col-md-6 .col-md-offset-3">
                <h2>Add project</h2>
                <ProjectForm  {...this.props} />
            </div>
        );
    }

}

const putActionToProps = (dispatch) => {
    return {
        addProject: bindActionCreators(combineActions.projects.addProject, dispatch),
        getProject: bindActionCreators(combineActions.projects.getProject, dispatch),
        updateProject: bindActionCreators(combineActions.projects.updateProject, dispatch)
    }
};
const putStateToProps = (state) => {
    return {
        projects: state.projects.projects,
        project: state.projects.project,
    };
};


const connectedAddEditProject = connect(putStateToProps, putActionToProps)(AddEditProject);
export { connectedAddEditProject as Project };