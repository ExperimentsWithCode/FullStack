
import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import QuestionsContainer from './questions/questions_container';
// import HomePage from './homepage/homepage_container';

const App = ({ children }) => (
  <div>
    <header>
      < HeaderContainer  />
    </header>
    {children}
  </div>
);

export default App
