import { connect } from 'react-redux';
import { create, update } from '../../actions/question_actions';
import AskQuestionDisplay from './ask_question_display';
import { selectAllQuestions } from '../../reducers/selectors.js';


const mapStateToProps = ({ session, questions }) => {
  const current_user = session.currentUser
  return {
  currentQuestion : questions.currentQuestion,
  questions : selectAllQuestions(questions),

  loggedIn: Boolean(current_user),
  errors: questions.errors || [],
  current_user: current_user};
};

const mapDispatchToProps = (dispatch) => ({
  create:  (currentQuestion) => dispatch(create(currentQuestion)),
  update:  (currentQuestion) => dispatch(update(currentQuestion))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AskQuestionDisplay);
