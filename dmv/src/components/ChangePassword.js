import React from 'react';
import '../styles/ChangePassword.css';

const ChangePassword = () => {
  return (
    <section className="content-container">
      <section className="change-password">
        <div className="header">
          <h2 className="title">Change Password</h2>
        </div>
        <div className="block-container">
          <div className="input-container">
            <div className="label">New Password</div>
            <div className="input-wrapper password-field">
              <input
                type="password"
                placeholder="New Password"
                className="input input-without-icon"
                value=""
              />
              <div className="message">
                <div style={{ opacity: 1 }}></div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <div className="label">Confirm Password</div>
            <div className="input-wrapper password-field">
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-without-icon"
                value=""
              />
              <div className="message">
                <div style={{ opacity: 1 }}></div>
              </div>
            </div>
          </div>
          <div className="buttons-container">
            <button className="save-button primary-type medium-size">
              <span className="label">Save Changes</span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ChangePassword;
