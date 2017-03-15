import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
// import createLogger from 'redux-logger'
//
//
// let middlewareArgs = [thunk]
//
// if (process.env.NODE_ENV !== 'production') {
//   middlewareArgs.push(createLogger())
// }

const configureStore = (preloadedState = {}) => (
  createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
)

export default configureStore;
