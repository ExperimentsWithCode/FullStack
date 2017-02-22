import { connect } from 'react-redux';
import { create } from '../../actions/answer_actions';
import AnswerFormDisplay from './answer_form_display';


const mapStateToProps = ({ session, answer }) => {
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
)(AnswerFormDisplay);
