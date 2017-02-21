import { connect } from 'react-redux';
import { index } from '../../actions/question_actions';
import QuestionsDisplay from './questions_display';
import { selectAllQuestions } from '../../reducers/selectors.js';

const mapStateToProps = ({ session, questions }) => {
  const current_user = session.currentUser
  return {
  loggedIn: Boolean(currentUser),
  current_user: current_user,
  questions}
};

const mapDispatchToProps = (dispatch) => {
  const formType = location.hash.slice(2);

  return {
    index: () => dispatch(index()),
    formType
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsDisplay);


// const wildcard = ownProps.params.wildcard
