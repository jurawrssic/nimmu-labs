const ContactPage = () => {
  return (
    <div className="contact-page about">
      <div className="about__title">CONTACT ME</div>
      <div className="about__content">
        <input id="sender-email" placeholder="Email" />
        <input id="email-subject" placeholder="Subject" />

        <textarea id="email-content" placeholder="Enter your message here" />

        <button>Send Message</button>
      </div>
    </div>
  );
};

export default ContactPage;
