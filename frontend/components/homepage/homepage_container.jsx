import { connect } from 'react-redux';
import { index, create, update, show, destroy } from '../../actions/session_actions';
import HomepageDisplay78uik from './session_form';


const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
