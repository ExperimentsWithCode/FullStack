import { connect } from 'react-redux';
import { show } from '../../actions/question_actions';
import { create, destroy } from '../../actions/vote_actions';
import { sortAnswersActive,
  sortAnswersOldest,
  sortAnswersVotes } from '../../actions/answer_actions';

import CurrentQuestionDisplay from './current_question_display';
import { selectAllQuestions } from '../../reducers/selectors.js';

const mapStateToProps = ({ session, questions }) => {
  const current_user = session.currentUser
  return {
  loggedIn: Boolean(current_user),
  current_user: current_user,
  currentQuestion: questions.currentQuestion
  }
};

const mapDispatchToProps = (dispatch) => {
  const formType = location.hash.slice(2);

  return {
    show: (id) => dispatch(show(id)),
    create: (vote) => dispatch(create(vote)),
    destroy: (vote) => dispatch(destroy(vote)),
    sortAnswersActive: () => dispatch(sortAnswersActive()),
    sortAnswersOldest: () => dispatch(sortAnswersOldest()),
    sortAnswersVotes: () => dispatch(sortAnswersVotes()),

    formType
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentQuestionDisplay);
