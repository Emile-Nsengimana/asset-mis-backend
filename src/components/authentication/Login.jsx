import React from 'react';

const Login = () => {
    return (
        <div id="signin">
            <h1>SIGN IN</h1>
            <div className="form-group">
                <i className="fas fa-user-tie"></i>
                <input id="txt-user" className="inp" name="email" type="email" required placeholder="enter username" />
            </div>
            <div className="form-group">
                <i className="fas fa-lock"></i>
                <input id="txt-password" className="inp" name="password" type="password" name="password" placeholder="enter your password" />
            </div>
            <div className="link-default">
                <h5>Forgot password?</h5><button id="btn-reset-password" className="btn-link">click here</button>
            </div>
            <div className="form-group">
                <button id="btn-signup" className="btn-all btn-signup">Sign Up</button>
                <button id="btn-signin" className="btn-all btn-signin">Sign In</button>
            </div>
        </div>
    );
}

export default Login;