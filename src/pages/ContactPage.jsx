import { useState } from 'react';
import './ContactPage.css'; 
import resume from '../assets/files/Resume.pdf';
import Footer from '../components/Footer'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [fadeOut, setFadeOut] = useState(false); // New state for fading out

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    e.target.setCustomValidity('');
  };

  const handleInvalid = (e) => {
    if (e.target.validity.valueMissing) {
      e.target.setCustomValidity('This field is required');
    } else if (e.target.type === 'email' && e.target.validity.patternMismatch) {
      e.target.setCustomValidity('Please enter a valid email address');
    } else {
      e.target.setCustomValidity('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('http://localhost:3001/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });

    if (response.ok) {
      setResponseMessage('Your message was sent successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setResponseMessage('Failed to send your message. Please try again.');
    }

    // Set fadeOut to false when showing the message, and then start fading out
    setFadeOut(false);
    setTimeout(() => {
      setFadeOut(true); // Start fade-out after 3 seconds
      setTimeout(() => {
        setResponseMessage(''); // Remove message after fade-out
      }, 1000); // Match the fade-out duration in CSS
    }, 3000); // Display message for 3 seconds

    setIsSubmitting(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-section">
        <div className="contact-left">
          <h2 className="section-title">Send me a Message!</h2>
          <p>
            Whether you want to collaborate on a project or just talk about 
            similar interests, I’m always open to connect. Feel free to reach out!
          </p>
          <a href={resume} download='Chelsea_Ramdat_Resume'>Download Resume</a>
        </div>
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
                onInvalid={handleInvalid}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                onInvalid={handleInvalid}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                placeholder="message"
                value={formData.message}
                onChange={handleChange}
                onInvalid={handleInvalid}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn" disabled={isSubmitting}>
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