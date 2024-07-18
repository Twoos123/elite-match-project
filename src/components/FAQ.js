import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/FAQ.css';

function FAQ() {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert(`Message sent!\n${t('Your Name')}: ${name}\n${t('Your Email')}: ${email}\n${t('Your message')}: ${message}`);
  };

  const faqs = [
    {
      question: t('How do I create a tournament?'),
      answer: t("To create a tournament, navigate to the 'Create Tournament' section and fill out the form with the necessary details.")
    },
    {
      question: t('How do I join a team?'),
      answer: t("To join a team, go to the 'Create/Join Team' section, find a team that matches your skills, and send a request to join.")
    },
    {
      question: t('What games are supported?'),
      answer: t('Currently, we support games such as CS2, Valorant, Overwatch 2, and League of Legends. More games will be added in the future.')
    },
    {
      question: t('How can I contact support?'),
      answer: t("If you need further assistance, you can reach out to our support team through the 'Contact Us' section on the website.")
    }
  ];

  return (
    <div className="faq">
      <h2>{t('Frequently Asked Questions')}</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      <h2>{t('Contact Us')}</h2>
      <div className="contact-us">
        <input
          type="text"
          placeholder={t('Your Name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder={t('Your Email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder={t('Your message')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="button">
        <button onClick={handleSubmit}>{t('Send')}</button>
      </div>
    </div>
  );
}

export default FAQ;
