import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/pages/Home.jsx';
import UsersList from './components/UsersList/UsersList.jsx';

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UsersList} />
        </div>
    );
}