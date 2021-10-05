import * as actionTypes from '../../actions';

const initialState = {
  isLoading: true,
  isError: false,
  isDone: false,
  data: null,
  error: null,
};

const clearGetAllStudents = () => {
  return initialState;
};

const getAllStudentsStart = (state) => {
  return { ...state, isLoading: true, error: null, isError: false };
};

const getAllStudentsSuccess = (state, action) => {
  return { ...state, data: action.data, isDone: true, isLoading: false };
};

const getAllStudentsFailure = (state, action) => {
  return { ...state, error: action.data, isLoading: false, isError: true };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_STUDENTS_START:
      return getAllStudentsStart(state);
    case actionTypes.GET_ALL_STUDENTS_SUCCESS:
      return getAllStudentsSuccess(state, action);
    case actionTypes.GET_ALL_STUDENTS_FAIL:
      return getAllStudentsFailure(state, action);
    case actionTypes.CLEAR_GET_ALL_STUDENTS:
      return clearGetAllStudents();
    default:
      return state;
  }
};

export default reducer;
