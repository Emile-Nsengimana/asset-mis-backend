import React from 'react';

const CreateAccount = (props) => {
    const handleHideCreateAccount = () => {
        document.getElementById('modal-account').style.display = 'none';
    }
    return (
        <React.Fragment>
            <div id="modal-account">
                <div id="close" onClick={() => { handleHideCreateAccount()}}><span>&times;</span></div>
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
                        <input className="form-input" name="phone" type="text"  />
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

export default CreateAccount;