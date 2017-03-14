import React from 'react';
import { Link } from 'react-router';
import SearchDisplay from './search_display';


export const headerLoggedOut = () => (
  <div className="header-group-right">
    <Link to="/login" className="link-login">
      <p>Login</p>
    </Link>
      <Link to="/signup" className="button-session link">Sign Up</Link>
  </div>
);

const headerLoggedIn = (currentUser, logout) => (
  <div className="header-group-right">
    <h3 className="header-user">Hi, {currentUser.username}!</h3>

    <button className="button-session" onClick={logout}>Log Out</button>
  </div>

);
//
// const extendedHeader = () => (
//   <div className="extended-header">
//     <div className="extended-header content">
//       <h2>Join the Heap Spill community!</h2>
//       <div className="separator"></div>
//       <div className="sign-up-blurb">
//         <p>Heap Spill is a project heavily based on Stack Overflow, designed to demonstrate my coding skill.
//           Feel free to sign up and take a look around, or browse under our guest account located on the log in page.
//         </p>
//       </div>
//       <div className='button-session button'>
//         <Link to="/signup" className="button-session link">Sign Up</Link>
//       </div>
//     </div>
//   </div>
// );
//
// const returnExtendedHeader = (currentUser, path) => {
//   if (path !== "/login" || path !=="/signup" || !currentUser){
//
//     return extendedHeader()
//   }
// };
// {extendedHeader(currentUser, path)}


const headerMain = (currentUser, logout, path) => (
  <div className="extended header-container">
    <div className="header-wrapper">
      <div className="header-wrapper fixed">
        <hgroup className="header-group">
          <div className="header-group-left">
            <Link to="/" className="link-header">
              <img className="logo" src={window.images.logo}/>
              <h1>HeapSpill</h1>
            </Link>
            < SearchDisplay />
          </div>
          {currentUser ? headerLoggedIn(currentUser, logout) : headerLoggedOut()}
        </hgroup>
      </div>
    </div>
  </div>
);

const header = ({currentUser, logout, errors, path}) => {
  return headerMain(currentUser, logout, path);
};

export default header;
