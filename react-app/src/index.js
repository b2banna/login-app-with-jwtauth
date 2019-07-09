import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App/App';
import Login from './components/login/Login';

ReactDOM.render(
    <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
    </Router>
    , document.getElementById('root'));
serviceWorker.unregister();
