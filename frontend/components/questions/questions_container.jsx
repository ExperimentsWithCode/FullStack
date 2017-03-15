import { connect } from 'react-redux';
import { index, sortQuestionsActive, sortQuestionsNewest } from '../../actions/question_actions';
import QuestionsDisplay from './questions_display';
import { selectAllQuestions } from '../../reducers/selectors.js';

const mapStateToProps = ({ session, questions }) => {
  const current_user = session.currentUser
  questions = questions || {questions: {}}
  return {
  questions : questions,
  loggedIn: Boolean(current_user),
  current_user: current_user,
  questions}
};

const mapDispatchToProps = (dispatch) => {
  const formType = location.hash.slice(2);

  return {
    index: () => dispatch(index()),
    sortQuestionsActive: () => dispatch(sortQuestionsActive()),
    sortQuestionsNewest: () => dispatch(sortQuestionsNewest()),
    formType
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsDisplay);


// const wildcard = ownProps.params.wildcard
