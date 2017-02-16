import React from 'react';
import { Link } from 'react-router';

const headerLoggedOut = () => (
  <hgroup className="header-group">
    <Link to="/" className="link header">
      <h1>HeapSpill</h1>
    </Link>
    <Link to="/login" className="link-login">
      <p>Login</p>
    </Link>
    <Link to="/signup" className="link-signup">
      <p>Sign Up</p>
    </Link>
  </hgroup>
);

const headerLoggedIn = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const header = ({currentUser, logout}) => {
  return currentUser ? headerLoggedIn(currentUser, logout) : headerLoggedOut()
};

export default header;
