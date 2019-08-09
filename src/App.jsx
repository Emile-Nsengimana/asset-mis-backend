import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/index.jsx';
import UserPage from './components/dashboard/User.jsx';

class App extends Component {
    render(){
        return (
            <Router>
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/home' component={UserPage} />
              </Switch>
            </Router>
        );
    }
}

export default App;
