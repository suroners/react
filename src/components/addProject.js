import React from "react";
import connect from "react-redux/es/connect/connect";
import {combineActions} from "../store/action";
import {bindActionCreators} from "redux";
import { ProjectForm } from "../helper/projectForm";

class AddProject extends React.Component{
    handleSubmit = async (values, props) => {
        await this.props.addProject(values);

        props.setSubmitting(false);
        this.props.history.push("/projects");
    }


    render() {
        return (
            <div className="col-md-6 .col-md-offset-3">
                <h2>Add project</h2>
                <ProjectForm  {...this.props} handleSubmit={this.handleSubmit} />
            </div>
        );
    }

}

const putActionToProps = (dispatch) => {
    return {
        addProject: bindActionCreators(combineActions.projects.addProject, dispatch),
    }
};
const putStateToProps = (state) => {
    return {
        projects: state.projects.projects,
        project: state.projects.project,
    };
};


const connectedAddProject = connect(putStateToProps, putActionToProps)(AddProject);
export { connectedAddProject as AddProject };