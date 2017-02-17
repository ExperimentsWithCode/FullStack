import { connect } from 'react-redux';
import { index } from '../../actions/question_actions';
import QuestionsDisplay from './questions_display';


const mapStateToProps = ({ session, question }) => {
  const current_user = session.currentUser
  return {
  loggedIn: Boolean(currentUser),
  errors: question.errors || [],
  current_user: current_user};
};

const mapDispatchToProps = (dispatch) => ({
  index: (questions) => dispatch(index())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsDisplay);