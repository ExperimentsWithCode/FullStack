import React from 'react';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// react components
import App from './App';
import SessionFormContainer from './session_form/session_form_container';
import AskQuestionContainer from './ask_question/ask_question_container';
import QuestionsContainer from './questions/questions_container';
import CurrentQuestionContainter from './current_question/current_question_container';



const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  return (
    <Provider store={store}>
      <Router history={hashHistory} >
        <Route path="/" component={App} >
          <IndexRoute component={QuestionsContainer}  />
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
          <Route path="/ask" component={AskQuestionContainer} onEnter={_ensureLoggedIn} />
          <Route path="/ask/:id" component={AskQuestionContainer} onEnter={_ensureLoggedIn} />
          <Route path="/question/:id" component={CurrentQuestionContainter} />
          <Route path="/:wildcard" component={QuestionsContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
