'use client';
import { useState } from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { validateEmail } from '@/typescript/utils';

const ContactPage = () => {
  const initialFormData = {
    senderEmail: '',
    emailSubject: '',
    emailContent: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsSendingEmail(true);

    if (validateEmail(formData.senderEmail)) {
      await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });

      setIsSendingEmail(false);
      setFormData(initialFormData);
    }
  };

  return (
    <div className="contact-page about">
      <div className="about__title">CONTACT ME</div>
      <form method="post" className="about__content" onSubmit={handleSubmit}>
        <input
          id="sender-email"
          placeholder="Email"
          value={formData.senderEmail}
          onChange={(e) => {
            setFormData({ ...formData, senderEmail: e.target.value });
          }}
          required={true}
        />
        <input
          id="email-subject"
          placeholder="Subject"
          value={formData.emailSubject}
          onChange={(e) => {
            setFormData({ ...formData, emailSubject: e.target.value });
          }}
          required={true}
        />

        <textarea
          id="email-content"
          placeholder="Enter your message here"
          value={formData.emailContent}
          onChange={(e) => {
            setFormData({ ...formData, emailContent: e.target.value });
          }}
          required={true}
        />

        <button disabled={isSendingEmail}>
          {isSendingEmail ? (
            <div>
              Sending Email
              <AiOutlineLoading3Quarters className="loading-icon" />
            </div>
          ) : (
            'Send message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
