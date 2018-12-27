import React from "react";
import connect from "react-redux/es/connect/connect";
import {combineActions} from "../store/action";
import {bindActionCreators} from "redux";
import { ProjectForm } from "../helper/projectForm";

class EditProject extends React.Component{
    constructor(props) {
        super(props);

        this.projectId = this.props.match.params.projectId;
    }

    componentDidMount() {
        this.props.getProject(this.projectId);
    }

    handleSubmit = async (values, props) => {
        await this.props.updateProject(values, this.projectId);

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


const connectedEditProject = connect(putStateToProps, putActionToProps)(EditProject);
export { connectedEditProject as EditProject };