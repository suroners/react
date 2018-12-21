import React from "react";
import connect from "react-redux/es/connect/connect";
import {combineActions} from "../store/action";
import {bindActionCreators} from "redux";
import { ProjectForm } from "../helper/project_form";

const initialValues = {
    name: 'asd',
    description: 'asd',
    percent: '10',
    date: '2018-12-21',
}
class AddEditProject extends React.Component{
    componentDidMount() {
        window.asd = this.props
        console.log(window.asd)
        const project_id = this.props.match.params.project_id;

        if(project_id){

        } else {

        }
        // const { get_projects } = this.props;
        // get_projects();
        // combineActions.projects.get_projects()
        //     .then(data => {
        //         if(typeof data.error == "undefined")
        //             this.setState({ projects: data })
        //     });
    }

    handleSubmit = (values, {
        props = this.props,
        setSubmitting
    }) => {
console.log(111)
        //process form submission here
        //done submitting, set submitting to false
        setSubmitting(false);
        return;
    }

    render() {
        // console.log(this.props);
        // const { projects, delete_project } = this.props;
        return (
            <div className="col-md-6 .col-md-offset-3">
                <h2>Add project</h2>
                <ProjectForm  {...this.props} />
                {/*<form name="form" onSubmit={this.handleSubmit}>*/}
                    {/*<div className='form-group'>*/}
                        {/*<label htmlFor="username">Name</label>*/}
                        {/*<input type="text" className="form-control" name="name" />*/}
                    {/*</div>*/}
                    {/*<div className='form-group'>*/}
                        {/*<label htmlFor="username">Description</label>*/}
                        {/*<input type="text" className="form-control" name="description" />*/}
                    {/*</div>*/}
                    {/*<div className='form-group'>*/}
                        {/*<label htmlFor="username">Percent</label>*/}
                        {/*<input type="text" className="form-control" name="percent" />*/}
                    {/*</div>*/}
                    {/*<div className='form-group'>*/}
                        {/*<label htmlFor="password">Date</label>*/}
                        {/*<input type="text" className="form-control" name="date" />*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                        {/*<button className="btn btn-primary">Add</button>*/}
                    {/*</div>*/}
                {/*</form>*/}
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