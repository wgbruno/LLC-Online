import React from 'react';
import logo from "../assets/Copy of Loyola_LLC_RGB.png"
import ContactStyle from "../style/ContactStyle.css"

const ContactSheet = () => {
  return (
    <div className="contact-sheet" style={ContactStyle}>
      <div className="logo-container">
        <img src={logo} alt="Loyola Maryland Logo" className="logo" style = {{ width: 300, height: 300 }} />
      </div>
      <div className="info-container">
        <div className="info-box">
          <h2 className="info-title">Hours of Operation</h2>
          <p className="info-text">Monday - Thursday: 9am - 8pm</p>
          <p className="info-text">Friday: 9am - 5pm</p>
          <p className="info-text">Saturday: Closed</p>
          <p className="info-text">Sunday: 2pm - 6pm</p>
        </div>
        <div className="info-box">
          <h2 className="info-title">Contact Us</h2>
          <p className="info-text">Maryland Hall 443</p>
          <p className="info-text">Phone: 410-617-2674</p>
          <p className="info-text">Email: loyolallc@loyola.edu</p>
          <p className="info-text">Kelly Keenan, Director, Language Learning Center</p>
          <p className="info-text">Email: kekeenan@loyola.edu</p>
        </div>
        <div className="info-box">
          <h2 className="info-title">Student Supervisors (2022-2023)</h2>
          <p className="info-text">Bill Bruno ('23)</p>
          <p className="info-text">Grace Potter ('23)</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSheet;
