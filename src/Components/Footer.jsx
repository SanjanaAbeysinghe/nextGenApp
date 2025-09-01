import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer-container">
        <div className="footer-bottom">
          <div className="footer-section">
            <div>
              <h4>CALIFORNIA OFFICE</h4>
              <p>
                4243 Woodland Terrace
                <br />
                Sacramento, CA 95814
                <br />
                Tel. 916 753 2645
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>NEW YORK OFFICE</h4>
            <p>
              885 Oakwood Avenue
              <br />
              New York, NY 10013
              <br />
              Tel. 212 660 0744
            </p>
          </div>

          <div className="footer-section">
            <h4>CAREERS</h4>
            <a href="mailto:nextGen@gmail.com">nextGen@example.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
