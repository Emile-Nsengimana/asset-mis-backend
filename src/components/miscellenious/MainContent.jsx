import React from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { consume } from '../../API/consume';

class MainContent extends React.Component{

// will show add account model
handleShowCreateAccount() {
  document.getElementById('modal-account').style.display = 'block';
}

// delete account function
async handleDeleteAccount(account){
  const deleteAccount = await consume(`/api/v2/account/${account.accountnumber}`, 'delete', {}, localStorage.getItem('token'));
  document.getElementById('lb-msg').style.display = 'block';
  document.getElementById('lb-msg').innerHTML = deleteAccount.message;
    // location.reload('true');
}
  render(){
    return (
      <React.Fragment>
        <div className="dte">
          <button id="btn-create-account" className="btn-create btn-emphasis" onClick={this.handleShowCreateAccount}>Create new account</button>
        </div>

        <br />
        <div id="acctInfo">
          <h4 className="top-header">Accounts info</h4>
          <table>
            <thead>
              <tr>
                <td>Account No.</td>
                <td>Type</td>
                <td>Amount</td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              {this.props.accounts.accounts.map(accoun => (
                <tr key={accoun.accountid}>
                  <td>{accoun.accountnumber}</td>
                  <td>{accoun.type}</td>
                  <td>{accoun.balance}</td>
                  <td><button className="fas fa-trash-alt" onClick={ () => { this.handleDeleteAccount(accoun) }}></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

// will get user's accounts from state
const mapStateToProps = state => ({
  accounts: state.accounts
})

export default connect(mapStateToProps)(MainContent);
