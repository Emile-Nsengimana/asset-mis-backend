import React, { Component } from 'react';
import Login from './authentication/Login.jsx';
import Signup from '../components/authentication/Signup.jsx';
import mainLogo from '../assets/img/logo.png';


class LandingPage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="nav">
            <img src={mainLogo} alt="logo" />
        </div>
            <div id="all" className="overall">
                
                <div className="info">
                    <div>
                        <h1>BANK WITH US</h1>
                        <li>Access to your account information at any time</li>
                        <li>View your current and previous transaction</li>
                        <li>Transfer funds between accounts</li>
                    </div>
                </div>
                <div className="content">
                    <Login />
                    <Signup />
                </div>
            </div>
            </React.Fragment>
        );
    }
}

export default LandingPage;
