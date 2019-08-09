import React from 'react';

const Signup = () => {
  return (
    <div id="signup">
      <form>
        <h1>SIGN UP</h1>
        <div className="form-group">
          <label className="lb">First name</label>
          <input id="txt-firstname" className="inp" name="firstname" type="text" />
        </div>
        <div className="form-group">
          <label className="lb" >Last name</label>
          <input id="txt-lastname" name="lastname" type="text" />
        </div>
        <div className="form-group">
          <label className="lb" >Gender</label>
          <select name="gender" id="txt-gender" className="inp" >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="form-group">
          <label className="lb" >Email</label>
          <input id="txt-email" className="inp" name="email" type="email" required />
        </div>
        <div className="form-group">
          <label className="lb" >Phone No.</label>
          <input id="txt-phone" className="inp" name="phone" type="text" />
        </div>
        <div className="form-group">
          <label className="lb" >Password</label>
          <input id="txt-password-2" className="inp" name="password" type="password" />
        </div>
        <div className="form-group">
          <label className="lb" >Re-type</label>
          <input id="txt-confirm-password" className="inp" name="retype" type="password" />
        </div>
        <div className="form-group">
          <button id="btn-register" className="btn btn-emphasis">Register</button>
        </div>
        <div className="link-mid">
          {/* <h4>Back to </h4> <a href="./">sign in</a> */}
        </div>
      </form>
    </div>
  );
}

export default Signup;
