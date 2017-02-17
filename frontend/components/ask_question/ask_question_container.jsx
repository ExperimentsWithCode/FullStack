import { connect } from 'react-redux';
import { create } from '../../actions/question_actions';
import AskQuestionDisplay from './ask_question_display';


const mapStateToProps = ({ session }) => {
  const current_user = session.currentUser
  debugger
  return {
  loggedIn: Boolean(currentUser),
  errors: session.errors || [],
  current_user: current_user};
};

const mapDispatchToProps = (dispatch) => ({
  create:  (currentQuestion) => dispatch(create(currentQuestion))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AskQuestionDisplay);
