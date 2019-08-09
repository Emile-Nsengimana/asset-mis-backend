import React from 'react';
import { connect } from 'react-redux';

class CreateAccount extends React.Component {
  handleHideCreateAccount() {
    document.getElementById('modal-account').style.display = 'none';
    // console.log(this.props.accounts.user);
    console.log('>>>>>>', this.props);
  }
  render() {
    return (
      <React.Fragment>
        <div id="modal-account">
          <div id="close" onClick={() => { this.handleHideCreateAccount() }}><span>&times;</span></div>
          <h1>ACCOUNT CREATION</h1>
          <div >
            <div >
              <label >First name</label>
              <input className="form-input" name="firstname" type="text" />
            </div>
            <div >
              <label>Last name</label>
              <input className="form-input" name="lastname" type="text" />
            </div>
            <div >
              <label >Phone No.</label>
              <input className="form-input" name="phone" type="text" />
            </div>
          </div>
          <hr />
          <div className="mid">
            <div >
              <label  >Account type</label>
              <select name="acct" id="slct-acct-type" className="choose form-input">
                <option value="">Choose</option>
                <option value="Savings">Savings</option>
                <option value="Current">Current</option>
              </select>
            </div>
          </div>
          <div >
            <button id="btn-add-acct" className="btn-emphasis" >Create account</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state.accounts,
  user: state.user
})

export default connect(mapStateToProps)(CreateAccount);
