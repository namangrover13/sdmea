import * as actionTypes from '../../actions';

const initialState = {
  isLoading: true,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearUpdateStudent = () => {
  return initialState;
};

const updateStudentStart = (state) => {
  return { ...state, isLoading: true, error: null, isError: false };
};

const updateStudentSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const updateStudentFailure = (state, action) => {
  return { ...state, error: action.data, isLoading: false, isError: true };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_STUDENT_START:
      return updateStudentStart(state);
    case actionTypes.UPDATE_STUDENT_SUCCESS:
      return updateStudentSuccess(state, action);
    case actionTypes.UPDATE_STUDENT_FAIL:
      return updateStudentFailure(state, action);
    case actionTypes.CLEAR_UPDATE_STUDENT:
      return clearUpdateStudent();
    default:
      return state;
  }
};

export default reducer;
