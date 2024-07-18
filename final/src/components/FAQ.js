import React, { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Implement actual submission logic, like sending data to backend
  };

  const faqs = [
    {
      question: 'How do I create a tournament?',
      answer: 'To create a tournament, navigate to the "Create Tournament" section and fill out the form with the necessary details.'
    },
    {
      question: 'How do I join a team?',
      answer: 'To join a team, go to the "Create/Join Team" section, find a team that matches your skills, and send a request to join.'
    },
    {
      question: 'What games are supported?',
      answer: 'Currently, we support games such as CS2, Valorant, Overwatch 2, and League of Legends. More games will be added in the future.'
    },
    {
      question: 'How can I contact support?',
      answer: 'If you need further assistance, you can reach out to our support team through the "Contact Us" section on the website.'
    }
  ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <h2>Contact Us</h2>
      <div className="contact-us">
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
        </div>
      <div className='button'>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default FAQ;
