/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import './ContactPage.css'; // Import the CSS file
// import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'; // Icons for social media

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear custom validation message
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (!form.checkValidity()) {
      // If the form is invalid, trigger the browser's HTML5 validation UI
      form.reportValidity();
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2 className="section-title">Send me a Message!</h2>
        <p>
        Whether you want to collaborate on a project or just talk about 
        similar interests, I’m always open to connect. Feel free to reach out!
        </p>
        <a href="/path/to/your/resume.pdf" download>Download Resume</a>
        {/* <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={40} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={40} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub size={40} />
          </a>
        </div> */}
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
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
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
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;


