import { connect } from 'react-redux';
import { create } from '../../actions/question_actions';
import AskQuestionDisplay from './ask_question_display';


const mapStateToProps = ({ session, question }) => {
  const current_user = session.currentUser
  return {
  loggedIn: Boolean(current_user),
  errors: question.errors || [],
  current_user: current_user};
};

const mapDispatchToProps = (dispatch) => ({
  create:  (currentQuestion) => dispatch(create(currentQuestion))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AskQuestionDisplay);
