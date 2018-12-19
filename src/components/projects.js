import React, { Component } from "react";
import connect from "react-redux/es/connect/connect";


class Projects extends Component{
    constructor(props){
        console.log(props)
        super(props);



    }

    render() {
        return (
            <div>asd</div>
        );
    }

}

const mapActionToProps = (dispatch) => {
    return {};
}

const mapStateToProps = (state) => {
    return state;
}


const connectedProjects = connect(mapStateToProps, mapActionToProps)(Projects);
export { connectedProjects as Projects };