import { useState } from 'react';
import './ContactPage.css'; 
import resume from '../assets/files/Resume.pdf';
import Footer from '../components/Footer';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [fadeOut, setFadeOut] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    e.target.setCustomValidity(''); // Reset the custom validity
  };

  const handleInvalid = (e) => {
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity('This field is required');
    } else if (e.target.type === 'email' && e.target.validity.typeMismatch) {
      e.target.setCustomValidity('Please enter a valid email address');
    } else {
      e.target.setCustomValidity('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any fields are empty
    if (!formData.name || !formData.email || !formData.message) {
      setResponseMessage('Please fill in all fields before sending.');
      setFadeOut(false); 
      triggerFadeOut();
      return;
    }

    setIsSubmitting(true);
  
    try {
      const response = await fetch('https://chelsearamdat-portfolio-2bb4cb1364f1.herokuapp.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Your message was sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const { message } = await response.json();
        setResponseMessage(`Error: ${message || 'Failed to send your message. Please try again.'}`);
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
      triggerFadeOut();
    }
  };

  const triggerFadeOut = () => {
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setResponseMessage(''), 1000); 
    }, 3000); 
  };

  return (
    <div className="contact-section-container">
      <div className="contact-container">
        <div className="contact-left">
          <h2 className="section-title">Send me a Message!</h2>
          <p>
            Like what you see? Want to collaborate on a project or just talk about 
            similar interests? I’m always open to connect. Feel free to reach out!
          </p>
          <a href={resume} download='Chelsea_Ramdat_Resume'>Download Resume</a>
        </div>
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              onInvalid={handleInvalid}
              required
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onInvalid={handleInvalid}
              required
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              onInvalid={handleInvalid}
              required
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {responseMessage && (
              <p className={`response-message ${fadeOut ? 'fade-out' : ''}`}>
                {responseMessage}
              </p>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
