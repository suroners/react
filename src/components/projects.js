import React from "react";
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom"
import {combineActions} from "../store/action";
import {bindActionCreators} from "redux";


class Projects extends React.Component{
    componentDidMount() {
        const { getProjects } = this.props;
        getProjects();
        // combineActions.projects.get_projects()
        //     .then(data => {
        //         if(typeof data.error == "undefined")
        //             this.setState({ projects: data })
        //     });
    }

    render() {
        // console.log(this.props);
        const { projects, deleteProject } = this.props;
        return (
            <div className="col-md-6 .col-md-offset-3">
                <Link to={`/project/add`}>
                    Add
                </Link>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Percent</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((object, i) => {
                            return (
                                <tr key={i}>
                                    <td>{object.name}</td>
                                    <td>{object.description}</td>
                                    <td>{object.date}</td>
                                    <td>{object.percent}</td>
                                    <td>
                                        <Link to={`/project/edit/${object.id}`}>
                                            Edit
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => {deleteProject(object.id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}

const putActionToProps = (dispatch) => {
    return {
        getProjects: bindActionCreators(combineActions.projects.getProjects, dispatch),
        deleteProject: bindActionCreators(combineActions.projects.deleteProject, dispatch)
    }
}
const putStateToProps = (state) => {
    return {
        projects: state.projects.projects,
    };
}


const connectedProjects = connect(putStateToProps, putActionToProps)(Projects);
export { connectedProjects as Projects };