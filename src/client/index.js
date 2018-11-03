import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root.jsx';
import { BrowserRouter, } from 'react-router-dom';

ReactDOM.hydrate(
    <BrowserRouter>
        <Root />
    </BrowserRouter>    
    , document.getElementById('root'))