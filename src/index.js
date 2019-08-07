import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from '../redux/store/index';
import { addUser } from '../redux/actions/index';

window.store = store;
window.addUser = addUser;

ReactDOM.render(<App />, document.getElementById('root'));
