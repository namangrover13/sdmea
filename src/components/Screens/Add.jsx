import React from 'react'
import { connect } from 'react-redux';
import { addStudent, clearAddStudent } from '../../store/actions/students/add-student';

const Add = () => {
    return (
        <div>
            This is Add Screen
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
      ...ownProps,
      addedStudentData: state.addStudentReducer,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      addStudent: (payload) => dispatch(addStudent(payload)),
      clearAddStudent: () => dispatch(clearAddStudent()),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Add);