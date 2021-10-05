import * as actionTypes from '../../actions';

const initialState = {
  isLoading: true,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearAddStudent = () => {
  return initialState;
};

const addStudentStart = (state) => {
  return { ...state, isLoading: true, error: null, isError: false };
};

const addStudentSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const addStudentFailure = (state, action) => {
  return { ...state, error: action.data, isLoading: false, isError: true };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_STUDENT_START:
      return addStudentStart(state);
    case actionTypes.ADD_STUDENT_SUCCESS:
      return addStudentSuccess(state, action);
    case actionTypes.ADD_STUDENT_FAIL:
      return addStudentFailure(state, action);
    case actionTypes.CLEAR_ADD_STUDENT:
      return clearAddStudent();
    default:
      return state;
  }
};

export default reducer;
