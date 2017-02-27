import { connect } from 'react-redux';
import { create, receiveCurrentAnswer } from '../../actions/answer_actions';
import AnswerFormDisplay from './answer_form_display';


const mapStateToProps = ({ session, currentAnswer }) => {
  const current_user = session.currentUser
  return {
  loggedIn: Boolean(current_user),
  errors: currentAnswer ? currentAnswer.errors : [],
  current_user: current_user};
};

const mapDispatchToProps = (dispatch) => ({
  create:  (currentAnswer) => dispatch(create(currentAnswer)),
  receiveCurrentAnswer: (receiveCurrentAnswer) => dispatch(CurrentAnswer(CurrentAnswer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerFormDisplay);
