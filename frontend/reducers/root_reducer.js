
import {combineReducers} from 'redux';


import SessionReducer from './session_reducer';
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';
import voteReducer from './votes_reducer';


const RootReducer = combineReducers({
  session: SessionReducer,
  questions: QuestionsReducer,
  answer: AnswersReducer,
  vote: voteReducer
});

export default RootReducer;
