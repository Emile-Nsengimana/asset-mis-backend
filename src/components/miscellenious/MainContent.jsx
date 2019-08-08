import React from 'react';

const MainContent = () => {
    const handleShowCreateAccount = () => {
        document.getElementById('modal-account').style.display = 'block';
    }
    return (
        <React.Fragment>
            <div className="dte">
                <label>Date:</label>
                <input type="text" disabled />
            </div><br />
            <div id="acctInfo">
                <h3>Account 1</h3>
                <div className="form-group">
                    <label >Account type:</label>
                    <input className="inp2" type="text" />
                </div>
                <div className="form-group">
                    <label >Account No.:</label>
                    <input className="inp2" type="text" />
                </div>
                <div className="form-group">
                    <label >Balance:</label>
                    <input className="inp2" type="text" />
                </div>
                <h3>Account 2</h3>
                <div className="form-group">
                    <label >Account type:</label>
                    <input className="inp2" type="text" />
                </div>
                <div className="form-group">
                    <label >Account No.:</label>
                    <input className="inp2" type="text" />
                </div>
                <div className="form-group">
                    <label >Account balance:</label>
                    <input className="inp2" type="text" />
                </div>
            </div>
            <div>
                <button id="btn-create-account" className="btn-create btn-emphasis" onClick={ () => {handleShowCreateAccount()}}>Create new account</button>
            </div>
        </React.Fragment>
    );
}

export default MainContent;