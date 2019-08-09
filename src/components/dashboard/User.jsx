import React, { Component } from 'react';
import SideBar from '../menu/SideBar.jsx';
import Brand from '../../assets/img/logo.png';
import AccountsInfo from '../miscellenious/MainContent.jsx';
import CreateAccount from '../miscellenious/CreateAccount.jsx';
import { connect } from 'react-redux';
import { getUserAccounts, createUserAccount } from '../../redux/actions';

class UserPage extends Component {
  async componentDidMount() {
    const token = localStorage.getItem('token');
    this.props.getUserAccounts(token);
  }

  render() {
    return (
      <React.Fragment>
        <div className="nav">
          <img src={Brand} alt="logo" />
        </div>
        <div id="all" className="client">
          {/* Side menu */}
          <div id="menu" className="aside">
            <SideBar />
          </div>

          {/* Main content */}
          <div className="main">
            <div id="lb-msg"></div>
            <AccountsInfo />
          </div>
        </div>
        {/* Create account */}
        <CreateAccount />
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  accounts: state.accounts,
  user: state.user
})
export default connect(mapStateToProps, { getUserAccounts, createUserAccount })(UserPage);
