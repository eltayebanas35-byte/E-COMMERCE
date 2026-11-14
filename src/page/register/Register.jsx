import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-container">

        <div className="register-header">
          <h1>Create Account</h1>
          <p>Join Anas Online Shop and start shopping today!</p>
        </div>

        <form className="register-form">

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account? <span>Login</span>
        </p>

      </div>
    </div>
  );
}

export default Register;