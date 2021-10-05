import * as actionTypes from '../index';
import API from '../../../api';
// import { getStudent } from './get-all-students';

export const clearAddStudent = () => {
  return {
    type: actionTypes.CLEAR_ADD_STUDENT,
  };
};

export const addStudent = (payload) => {
  return (dispatch) => {
    dispatch(addStudentInitiate());
    API.addStoreStudent(payload)
      .then((response) => {
        dispatch(addStudentSuccess(response.data));
        // dispatch(
        //   getStudent({
        //     store_id: 'S1',
        //   }),
        // );
      })
      .catch((error) => {
        dispatch(addStudentFailure(error));
      });
  };
};

const addStudentInitiate = () => {
  return {
    type: actionTypes.ADD_STUDENT_START,
  };
};

const addStudentSuccess = (data) => {
  return {
    type: actionTypes.ADD_STUDENT_SUCCESS,
    data: data,
  };
};

const addStudentFailure = (err) => {
  return {
    type: actionTypes.ADD_STUDENT_FAIL,
    data: err,
  };
};
