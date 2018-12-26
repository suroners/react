import React from "react";
import connect from "react-redux/es/connect/connect";
import {combineActions} from "../store/action";
import {bindActionCreators} from "redux";
import { ProjectForm } from "../helper/project_form";

class AddEditProject extends React.Component{
    componentDidMount() {
        const project_id = this.props.match.params.project_id;
        this.props.get_project(project_id);
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
        add_project: bindActionCreators(combineActions.projects.add_project, dispatch),
        get_project: bindActionCreators(combineActions.projects.get_project, dispatch),
        update_project: bindActionCreators(combineActions.projects.update_project, dispatch)
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