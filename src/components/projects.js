import React from "react";
import connect from "react-redux/es/connect/connect";


class Projects extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <div>asd</div>
        );
    }

}

const putActionToProps = (dispatch) => {
    return {};
}

const putStateToProps = (state) => {
    return state;
}


const connectedProjects = connect(putStateToProps, putActionToProps)(Projects);
export { connectedProjects as Projects };