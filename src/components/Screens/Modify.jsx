import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Modify = ({
    students
}) => {
    console.log(students);
    return (
        <div>
            This is Modify Screen
        </div>
    )
}

const mapStateToProps = state => {
    return{
        students: state.students
    }
}

export default withRouter(connect(mapStateToProps)(Modify));
