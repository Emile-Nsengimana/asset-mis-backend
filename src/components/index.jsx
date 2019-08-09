import React, { Component } from 'react';
import { connect } from 'react-redux';
import Signup from '../components/authentication/Signup.jsx';
import mainLogo from '../assets/img/logo.png';
import { createUserAccount } from '../redux/actions/index';
import { Redirect } from 'react-router-dom';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  //show signup modal
  handleSignup() {
    document.getElementById('signin').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
  }


  async onSubmit(e) {
    e.preventDefault();
    // this.setState({[e.target.name]:e.target.value})
    const body = {
      email: this.state.email,
      password: this.state.password
    }
    const login = await this.props.createUserAccount(body);
    console.log('>>>', login.status);
    console.log('>>>', this.state);

    if (login.status !== 200) {
      return <Redirect to='/' />
    }
    // <Redirect to='/home' />
    this.props.history.push('/home');
  }
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
            <form onSubmit={this.onSubmit.bind(this)}>
              <div id="signin">
                <h1>SIGN IN</h1>
                <div className="form-group">
                  <i className="fas fa-user-tie"></i>
                  <input id="txt-user" className="inp" name="email" type="email" required placeholder="enter username" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                </div>
                <div className="form-group">
                  <i className="fas fa-lock"></i>
                  <input id="txt-password" className="inp" name="password" type="password" name="password" placeholder="enter your password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                </div>
                {/* <div className="link-default">
                <h5>Forgot password?</h5><button id="btn-reset-password" className="btn-link">click here</button>
            </div> */}
                <div className="form-group">
                  <button id="btn-signup" className="btn-all btn-signup" onClick={this.handleSignup}>Sign Up</button>
                  <button type="submit" id="btn-signin" className="btn-all btn-signin" >Sign In</button>
                </div>
              </div>
            </form>
            <Signup />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { createUserAccount })(LandingPage);
