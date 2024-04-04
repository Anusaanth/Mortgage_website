import React from "react";
import pic from "../img/about.jpg";
import "./contactInfo.css";

export const Contactinfo = (props) => {
  return (
    <div
      className="contact-info-card"
      style={{ marginTop: "120px", marginBottom: "50px" }}
    >
      <div className="contact-info-container">
        <img src={pic} alt="Siva Ratnasingam" className="contact-info-image" />
        <div className="contact-info-details">
          <h1>Siva Ratnasingam</h1>
          <p>Mortgage Agent</p>
          <br />
          <p>85 Dynamic Dr, Toronto, ON M1V 4C9</p>
          <p>Telephone: 416-520-1214</p>
          <p>Email: siva.mtg@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
