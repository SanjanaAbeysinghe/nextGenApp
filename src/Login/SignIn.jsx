import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <div className="signin-left">
          <div id="logo" className="logo">
            Where knowledge meets reliability
          </div>
          <h2>Sign In</h2>
          <form>
            <label>Email address</label>
            <input type="email" placeholder="Enter email address" />

            <label>Password</label>
            <input type="password" placeholder="Enter password" />

            <div className="signin-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="btn primary">
              Sign In
            </button>

            <div className="divider">or</div>

            <button className="btn facebook">Sign in with Facebook</button>
            <button className="btn google">Sign in with Google</button>
          </form>
        </div>

        <div className="signin-right">
          <div className="logo">NextGen Academy</div>
          <div className="progress-bar">
            <div className="filled"></div>
          </div>
          <p className="description">
            Join NextGen Academy and take the first step toward your future in
            IT. Create your free account to access expert-led courses, hands-on
            projects, and resources designed to help you grow your skills in
            programming, networking, cybersecurity, and more. Sign up today and
            become part of a community that’s shaping the next generation of
            tech innovators.
          </p>
          <p className="author">
            <strong>JARVIN LARSON</strong>
            <br />
            Client Engagement Specialist
          </p>
          <div className="brands">
            <span>Starbucks</span>
            <span>HardRock</span>
            <span>Adidas</span>
            <span>Nike</span>
            <span>Marriott</span>
            <span>Shopify</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
