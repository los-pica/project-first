import React from "react";
import Links from "./Links";
import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We’re always here to listen to feedback or any questions users have. To
        help direct your message to the right person, please choose the most
        relevant option below.
      </p>
      <Links />
    </div>
  );
}
