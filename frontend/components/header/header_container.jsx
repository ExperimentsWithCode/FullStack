import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HeaderDisplay from './header_display';


const mapStateToProps = ({ session }) => {
  return {
    currentUser: session.currentUser,
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    path: location.hash.slice(1)
  }
};

const mapDispatchToProps = (dispatch, { location })  => {
  return {
    logout: () => dispatch(logout()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderDisplay);
