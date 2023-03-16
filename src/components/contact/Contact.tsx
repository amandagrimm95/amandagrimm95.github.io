import React, { useState } from "react";
import './contact.css';
import './contact-mobile.css';
import { serverURL } from 'config';

export const ContactForm = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch(`${serverURL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
      <div id='contactSection'>
        <h2 className='section-title'>Contact</h2>
        <div className='contactContainer'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" rows={5} required />
                </div>
                <button type="submit">{status}</button>
            </form>
            <div className='contactInfo'>
                <img src='./images/headshot.jpg' alt='headshot' id='headshot'/>
                <p>Amanda Dunbar</p>
                <p>amanda@grimbar.dev</p>
            </div>
        </div>
      </div>
    
  );
};