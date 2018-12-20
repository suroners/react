import React from "react";
import connect from "react-redux/es/connect/connect";

import {combineActions} from "../store/action";
import {bindActionCreators} from "redux";


class Projects extends React.Component{
    constructor(props) {
        super(props);

        // this.state = {
        //     projects: [],
        // }
    }

    componentDidMount() {
        const { get_projects } = this.props;
        get_projects();
        // combineActions.projects.get_projects()
        //     .then(data => {
        //         if(typeof data.error == "undefined")
        //             this.setState({ projects: data })
        //     });
    }

    deleteproject = (id) => {

    }


    render() {
        // console.log(this.state);
        // console.log(this.props);
        const { projects } = this.props;
        return (
            <div className="col-md-6 .col-md-offset-3">
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
                                        <button >Edit</button>
                                    </td>
                                    <td>
                                        <button>Delete</button>
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
        get_projects: bindActionCreators(combineActions.projects.get_projects, dispatch)
    }
}
const putStateToProps = (state) => {
    return {
        projects: state.projects.projects,
    };
}


const connectedProjects = connect(putStateToProps, putActionToProps)(Projects);
export { connectedProjects as Projects };