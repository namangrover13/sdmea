import * as actionTypes from '../index';
import API from '../../../api';
// import { getStudent } from './get-all-students';

export const clearGetAllStudents = () => {
  return {
    type: actionTypes.CLEAR_GET_ALL_STUDENTS,
  };
};

export const getAllStudents = (payload) => {
  return (dispatch) => {
    dispatch(getAllStudentsInitiate());
    API.getAllStudents(payload)
      .then((response) => {
        dispatch(getAllStudentsSuccess(response.data));
        // dispatch(
        //   getStudent({
        //     store_id: 'S1',
        //   }),
        // );
      })
      .catch((error) => {
        dispatch(getAllStudentsFailure(error));
      });
  };
};

const getAllStudentsInitiate = () => {
  return {
    type: actionTypes.GET_ALL_STUDENTS_START,
  };
};

const getAllStudentsSuccess = (data) => {
  return {
    type: actionTypes.GET_ALL_STUDENTS_SUCCESS,
    data: data,
  };
};

const getAllStudentsFailure = (err) => {
  return {
    type: actionTypes.GET_ALL_STUDENT_FAIL,
    data: err,
  };
};
