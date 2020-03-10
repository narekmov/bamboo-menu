import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import AppReducer from '../reducers';
import { RootNavigator } from '../navigation/navigation';

const navReducer = (state, action) => {
  const newState = RootNavigator().router.getStateForAction(action, state);
  return newState || state;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = initialState => {
  const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
  return createStore(AppReducer(navReducer), initialState, enhancer);
};

export default configureStore({});
