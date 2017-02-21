
import {combineReducers} from 'redux';


import SessionReducer from './session_reducer';
import QuestionReducer from './question_reducer';
import QuestionsReducer from './questions_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionsReducer,
  question: QuestionReducer
});

export default RootReducer;
