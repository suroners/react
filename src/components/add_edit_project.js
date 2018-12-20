import React from "react";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom"
import {combineActions} from "../store/action";
import {bindActionCreators} from "redux";


class AddEditProject extends React.Component{
    componentDidMount() {
        const { get_projects } = this.props;
        get_projects();
        // combineActions.projects.get_projects()
        //     .then(data => {
        //         if(typeof data.error == "undefined")
        //             this.setState({ projects: data })
        //     });
    }

    render() {
        // console.log(this.props);
        // const { projects, delete_project } = this.props;
        return (
            <div className="col-md-6 .col-md-offset-3">

            </div>
        );
    }

}

const putActionToProps = (dispatch) => {
    return {
        get_projects: bindActionCreators(combineActions.projects.get_projects, dispatch),
        delete_project: bindActionCreators(combineActions.projects.delete_project, dispatch)
    }
}
const putStateToProps = (state) => {
    return {
        projects: state.projects.projects,
    };
}


const connectedAddEditProject = connect(putStateToProps, putActionToProps)(AddEditProject);
export { connectedAddEditProject as Project };