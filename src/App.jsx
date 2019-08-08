import React, { Component } from 'react';
import LandingPage from './components/index.jsx';
import UserPage from './components/dashboard/User.jsx';

class App extends Component {
    render(){
        return (
            // <LandingPage />
            <UserPage />
        );
    }
}

export default App;