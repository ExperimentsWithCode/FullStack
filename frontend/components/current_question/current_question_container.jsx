import { connect } from 'react-redux';
import { show } from '../../actions/question_actions';
import CurrentQuestionDisplay from './current_question_display';
import { selectAllQuestions } from '../../reducers/selectors.js';

const mapStateToProps = ({ session, question }) => {
  const current_user = session.currentUser
  return {
  loggedIn: Boolean(currentUser),
  current_user: current_user,
  question
  }
};

const mapDispatchToProps = (dispatch) => {
  const formType = location.hash.slice(2);

  return {
    show: (id) => dispatch(show(id)),
    formType
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentQuestionDisplay);
