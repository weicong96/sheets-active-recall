import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore,applyMiddleware  } from 'redux'
import {rootReducer} from './reducers/reducers';
import { logger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import App from './pages/app/App';
import Reader from './pages/reader/reader';

const store = createStore(rootReducer, applyMiddleware(
    promiseMiddleware,
    logger
))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App}/>
                <Route exact path="/reader/:fileName" component={Reader}/>
            </div>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
