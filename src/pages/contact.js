import React, { useState } from 'react';
import '../Cart.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setSubmitStatus('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div style={{marginTop: '110px'}}></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Contact Us</h2>
                
                {/* Contact Info Section */}
                <div className="row mb-5">
                  <div className="col-md-4 text-center">
                    <div className="contact-info-item">
                      <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
                      <h5>Our Location</h5>
                      <p>Near Sukkur IBA University 100ft road,Sukkur</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="contact-info-item">
                      <i className="fas fa-phone fa-2x text-primary mb-3"></i>
                      <h5>Phone Number</h5>
                      <p>+92 301-1234567</p>
                      <p>+92 304-1234555</p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="contact-info-item">
                      <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
                      <h5>Email Address</h5>
                      <p>info@shopease.com</p>
                    
                    </div>
                  </div>
                </div>

               
                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Send Message
                    </button>
                  </div>
                </form>

                {submitStatus && (
                  <div className="alert alert-success mt-3" role="alert">
                    {submitStatus}
                  </div>
                )}

                <br />
                 {/* Map Section */}
                <div className="row mb-5">
                  <div className="col-12">
                    <div className="map-container" style={{ width: '100%', height: '400px', borderRadius: '10px', overflow: 'hidden' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.758761955274!2d67.11384937538342!3d24.906925444989056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e8b5c927c9%3A0x4e97c97036012bc5!2sFAST%20National%20University%20of%20Computer%20and%20Emerging%20Sciences%2C%20Karachi%20Campus!5e0!3m2!1sen!2s!4v1698431183514!5m2!1sen!2s"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sukkur Iba University Map"
                      ></iframe>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
