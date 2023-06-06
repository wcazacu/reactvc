import React from "react";

export default function Contact() {
  return (
    <div className="contact-pg">
      <h1>Contact Us</h1>
      <form>
        <label>Name</label>
        <input name="fullName" />
        <label>Phone No</label>
        <input type="tel" />
        <label>Email</label>
        <input type="email" />
        <label>Reason for contact</label>
        <textarea />
      </form>
    </div>
  );
}
