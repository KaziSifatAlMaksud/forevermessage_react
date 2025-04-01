import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faPhone, 
  faClock,
  faUser,
  faEnvelope,
  faComment
} from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div style={{ backgroundColor: '#bbe4f5' }}>
      {/* Showcase Area */}
      <div 
        style={{
          height: '40vh',
          backgroundImage: "url('./asset/img/hero-contact-4cf9fa21.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 2
        }}>Contact Us</h1>
      </div>

      {/* Contact Cards Section */}
      <section className="py-5">
        <Container>
          <Row className="gy-4 mb-5">
            {/* Address Card */}
            <Col lg={4}>
              <Card className="p-4 text-center border rounded-4 d-flex flex-column align-items-center justify-content-center" 
                style={{ 
                  minHeight: '280px',
                  backgroundColor: '#ebf3ff'
                }}
              >
                <div className="text-primary fs-1">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </div>
                <h5 className="mt-3 text-dark">Our Address</h5>
                <p className="text-muted text-center">
                  Suit 44 Kelso Crescent Moorbank NSW 2170 Sydney Australia.
                </p>
              </Card>
            </Col>

            {/* Contact Number Card */}
            <Col lg={4}>
              <Card className="p-4 text-center border-0 rounded-4 d-flex flex-column align-items-center justify-content-center" 
                style={{ 
                  minHeight: '280px',
                  backgroundColor: '#ebf3ff'
                }}
              >
                <div className="text-primary fs-1">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <h5 className="mt-3 text-dark">Contact Number</h5>
                <p className="text-muted text-center"><b>Main:</b> +1300 810 372</p>
                <p className="text-muted text-center">
                  <b>Email:</b> info@forevermessages.com.au
                </p>
              </Card>
            </Col>

            {/* Opening Hours Card */}
            <Col lg={4}>
              <Card className="p-4 text-center border-0 rounded-4 d-flex flex-column align-items-center justify-content-center" 
                style={{ 
                  minHeight: '280px',
                  backgroundColor: '#ebf3ff'
                }}
              >
                <div className="text-primary fs-1">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <h5 className="mt-3 text-dark">Opening Hours</h5>
                <p className="text-muted text-center">
                  Monday - Friday: 8:00 AM - 3:00 PM
                </p>
                <p className="text-muted text-center">By Appointment.</p>
              </Card>
            </Col>
          </Row>

          {/* Contact Form */}
          <Row className="justify-content-center">
            <Col lg={12}>
              <Card className="p-5 border-0 rounded-4">
                <h1 className="text-center text-bold css-1m7bw23">Contact Us</h1>
                <p className="text-center text-muted">
                  Feel free to contact us at any time, and we will get back to you
                  as soon as possible.
                </p>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Your Name*</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                      <Form.Control 
                        type="text" 
                        name="name" 
                        required 
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email Address*</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <Form.Control 
                        type="email" 
                        name="email" 
                        required 
                      />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message*</Form.Label>
                    <div className="input-group">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faComment} />
                      </span>
                      <Form.Control 
                        as="textarea" 
                        name="message" 
                        rows={4} 
                        required 
                      />
                    </div>
                  </Form.Group>

                  <div className="text-center">
                    <Button 
                      type="submit" 
                      className="w-100 css-yexi9t"
                    >
                      Submit Message
                    </Button>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>

          {/* Google Map */}
          <div className="mt-5 overflow-hidden">
            <iframe
              className="w-100 border-0"
              style={{ height: '400px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.073366073073!2d150.94006!3d-33.93027359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129591b4042371%3A0x670eee1cfee3754b!2s3%20Kelso%20Cres%2C%20Moorebank%20NSW%202170%2C%20Australia!5e0!3m2!1sen!2sin!4v1633666822253!5m2!1sen!2sin"
              allowFullScreen
              title="Google Map"
            ></iframe>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactUs;