import { connect } from 'react-redux';
import { show } from '../../actions/question_actions';
import { create, receiveCurrentAnswer } from '../../actions/answer_actions';
import AnswerFormDisplay from './answer_form_display';


const mapStateToProps = (state) => {
  debugger
  const current_user = state.session.currentUser
  return {
  loggedIn: Boolean(current_user),
  errors: state.answer.errors || [],
  current_user: current_user};
};

const mapDispatchToProps = (dispatch) => ({
  create:  (currentAnswer) => dispatch(create(currentAnswer)),
  show: (id) => dispatch(show(id)),
  receiveCurrentAnswer: (receiveCurrentAnswer) => dispatch(CurrentAnswer(CurrentAnswer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerFormDisplay);
