import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { legacy_createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import { spamFilter} from './redux/middleware'
import './index.css';
import App from './App';

const store = legacy_createStore(rootReducer, compose(
   applyMiddleware(
      thunk,
      spamFilter
   ),
   
));

ReactDOM.render(
 <Provider store={store}>
    <App />
 </Provider>,
  document.getElementById('root')
);
