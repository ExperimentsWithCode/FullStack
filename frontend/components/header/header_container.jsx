import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import HeaderDisplay from './header_display';


const mapStateToProps = ({ session }) => {
  const current_user = session.currentUser
  return {
    currentUser: current_user,
    loggedIn: Boolean(current_user),
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
