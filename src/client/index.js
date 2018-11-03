import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root.jsx';
import { BrowserRouter, } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import { Prodiver } from 'react-redux';

const store = createStore(null, {}, applyMiddleware(thunk, logger));

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </Provider>    
    , document.getElementById('root'))