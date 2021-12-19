import React from 'react'
import { connect } from 'react-redux';
import { addStudent, clearAddStudent } from '../../store/actions/students/add-student';
import AddForm from "../AddStudents";

const Add = () => {
    return (
        <div>
           <AddForm />
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
