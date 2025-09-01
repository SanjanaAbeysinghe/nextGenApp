import React from "react";
import "./ContactInfo.css";

function ContactUs() {
  return (
    <div id="contactuscard">
      <h4 id="Contact">Contact Us</h4>
      <br />
      <br />
      <div className="contact-container">
        <div className="contact-card">
          <div className="icon">⏰</div>
          <h3>Monday - Sunday</h3>
          <p>09:00 AM - 06:00 PM</p>
        </div>

        <div className="contact-card">
          <div className="icon">📍</div>
          <h3>1st Floor</h3>
          <p>Colombo</p>
          <p>Above Abans Showroom</p>
        </div>

        <div className="contact-card">
          <div className="icon">📞</div>
          <h3>Call or Whatsapp</h3>
          <p>+94 76 269 3959</p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
