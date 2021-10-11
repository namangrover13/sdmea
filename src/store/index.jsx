import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import addStudentReducer from './reducers/students/add-student';
import getAllStudentsReducer from './reducers/students/get-all-students';
import updateStudentReducer from './reducers/students/update-student';

const rootReducer = combineReducers({
    addStudentReducer,
    updateStudentReducer,
    getAllStudentsReducer
})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;