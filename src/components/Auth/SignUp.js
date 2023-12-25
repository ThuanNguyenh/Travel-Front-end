import React from "react";

const SignUp = () => {
  return (
    <div className="wrap text-center">
      <h2>Sign Up</h2>
      <div className="form">
        <input type="email" placeholder="Email address"/> <br/>
        <input type="password" placeholder="Password"/> <br/>
        <button className="btn bg-info">Sign up</button>
      </div>
    </div>
  );
};

export default SignUp;
