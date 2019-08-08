import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import './assets/css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import store from './redux/store/index';



render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);