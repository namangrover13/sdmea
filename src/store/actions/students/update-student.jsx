import * as actionTypes from '../index';
import API from '../../../api';

export const clearUpdateStudent = () => {
  return {
    type: actionTypes.CLEAR_UPDATE_STUDENT,
  };
};

export const updateStudent = (payload) => {
  return (dispatch) => {
    dispatch(updateStudentInitiate());
    API.updateStudent(payload)
      .then((response) => {
        dispatch(updateStudentSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateStudentFailure(error));
      });
  };
};

const updateStudentInitiate = () => {
  return {
    type: actionTypes.UPDATE_STUDENT_START,
  };
};

const updateStudentSuccess = (data) => {
  return {
    type: actionTypes.UPDATE_STUDENT_SUCCESS,
    data: data,
  };
};

const updateStudentFailure = (err) => {
  return {
    type: actionTypes.UPDATE_STUDENT_FAIL,
    data: err,
  };
};
