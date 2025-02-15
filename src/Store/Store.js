import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../Store/reducers/first-reducer'; // Ensure the correct path

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; // Ensure the default export
