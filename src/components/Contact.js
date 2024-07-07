import React, { useState } from 'react';
import '../styles/Contact.css'; // Import CSS for Contact component

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Here you can implement actual submission logic, like sending data to backend
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default Contact;
