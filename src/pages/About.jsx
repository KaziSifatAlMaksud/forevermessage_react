import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faCogs, faFileShield } from '@fortawesome/free-solid-svg-icons'; 

import './../app.css';

const About = () => {
  return (
    <div style={{ backgroundColor: '#bbe4f5' }}>
      {/* Showcase Area */}
      <div 
        style={{
          height: '40vh',
          backgroundImage: "url('./asset/img/forever-2607171_1280.jpg')",
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
        }}>About Us</h1>
      </div>

      {/* About Us Section */}
      <Container style={{ padding: '60px 0', backgroundColor: '#bbe4f5' }}>
        <Row>
          <Col lg={12} className="p-5">
            <Card className="p-4" style={{
              borderRadius: '25px',
              background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)'
            }}>
              <Row className="align-items-center">
                <Col lg={6} className="p-5">
                  <h2 className="text-white mb-4">About Us</h2>
                  <p className="lead text-white">
                    Welcome to Forever Messages, a heartfelt platform designed to
                    help you express your deepest feelings for loved ones. We
                    believe in preserving your thoughts and emotions, ensuring
                    they remain even when you're no longer here. Our secure
                    service lets you craft personalized messages, allowing your
                    love and support to reach your family and friends whenever
                    they need it most. Create lasting connections and let your
                    words provide comfort and inspiration for years to come.
                  </p>
                </Col>
                <Col lg={6} className="d-flex justify-content-between align-items-center p-5">
                  <img
                    src="/asset/img/familiy photo.png"
                    alt="Login Logo"
                    className="img-fluid shadow"
                    style={{ borderRadius: '15px', backgroundColor: '#fff' }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Why Choose Us Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <Row className="text-center">
          {/* Section 1 */}
          <Col md={3} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5', minHeight: '200px' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faStar} size="3x" className="mb-3" />
                <h5 className="card-title">Quality Service</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Section 2 */}
          <Col md={3} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5', minHeight: '200px' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faHeart} size="3x" className="mb-3" />
                <h5 className="card-title">Customer Focused</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Section 3 */}
          <Col md={3} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5', minHeight: '200px' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faCogs} size="3x" className="mb-3" />
                <h5 className="card-title">Reasonable Solutions</h5>
              </Card.Body>
            </Card>
          </Col>

          {/* Section 4 */}
          <Col md={3} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5', minHeight: '200px' }}>
              <Card.Body>
               <FontAwesomeIcon icon={faFileShield} size="3x" className="mb-3" />
                <h5 className="card-title">100% Data Security</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Vision Section */}
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="rounded-4">
            <img
              src="/assets/img/logoabout.png"
              alt="Image"
              className="img-fluid"
              style={{ borderRadius: '5%' }}
            />
          </Col>

          <Col lg={6} className="p-5">
            <h2>Our Vision</h2>
            <p>
              Our vision is to offer a service that allows individuals to express
              their emotions, share memories, and provide guidance to their loved
              ones, no matter the circumstances. We believe in the power of words
              and the comfort they can bring, especially during significant
              moments in life.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Mission Section */}
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col lg={6} className="p-5">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide a platform that empowers individuals to
              create lasting messages for their loved ones. We aim to offer a
              seamless, secure, and meaningful way for people to share their
              stories, wisdom, and love, ensuring their legacy endures. By
              combining technology with emotion, we seek to bridge the gap between
              hearts, no matter the distance or time.
            </p>
          </Col>
          <Col lg={6}>
            <img
              src="/asset/img/our valuo.jpg"
              alt="Image"
              className="img-fluid"
              style={{ borderRadius: '5%' }}
            />
          </Col>
        </Row>
      </Container>

      {/* Values Section */}
      <Container className="mt-5">
        <Row className="align-items-center">
          <Col lg={6}>
            <img
              src="/asset/img/old ludy.png"
              alt="Image"
              className="img-fluid"
              style={{ borderRadius: '5%' }}
            />
          </Col>
          <Col lg={6} className="p-5">
            <h2>Our Values</h2>
            <ul>
              <li>
                <strong>Empathy:</strong> We understand the importance of human
                connection and strive to create a space where people can share
                their most heartfelt emotions.
              </li>
              <li>
                <strong>Security:</strong> We prioritize the privacy and
                confidentiality of our users, ensuring that every message is
                protected and accessible only to the intended recipients.
              </li>
              <li>
                <strong>Innovation:</strong> We embrace technology to create
                innovative solutions that make it easier for people to preserve
                their most important memories.
              </li>
              <li>
                <strong>Legacy:</strong> We believe in the power of leaving behind
                a legacy that resonates with loved ones, bringing comfort and
                connection for years to come.
              </li>
              <li>
                <strong>Trust:</strong> We build trust with our users through
                transparency, reliability, and a commitment to honoring their
                wishes and messages.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Key Advantages Section */}
      <Container>
        <h2 className="text-center mt-5">Key Advantages & Benefits</h2>
        <Row>
          <Col lg={6} className="py-4">
            <Card className="p-3" style={{ borderRadius: '15px', backgroundColor: '#aedbf5', border: 'none' }}>
              <h5><i className="fas fa-check"></i> Peace of Mind</h5>
              <p>
                Provide peace of mind knowing that your thoughts, instructions,
                and feelings will be shared with your loved ones, even when you
                can no longer be there in person.
              </p>
            </Card>
            <Card className="p-3 mt-2" style={{ borderRadius: '15px', backgroundColor: '#aedbf5', border: 'none' }}>
              <h5><i className="fas fa-check"></i> Lasting Connection</h5>
              <p>
                Maintain an emotional connection with your loved ones even after
                you are gone. Forever Message ensures that your presence is felt
                through your words and memories.
              </p>
            </Card>
          </Col>
          <Col lg={6} className="py-4">
            <Card className="p-3" style={{ borderRadius: '15px', backgroundColor: '#aedbf5', border: 'none' }}>
              <h5><i className="fas fa-check"></i> Friendly Interface</h5>
              <p>
                Our platform is designed to be user-friendly, with a step-by-step
                guide that makes it easy to create and schedule your messages.
                Whether you're tech-savvy or not, you'll find Forever Message easy
                to navigate and use. We invite you to become part of our
                community. Help us in our mission to create lasting connections
                and provide comfort through words. Join us in funding greatness
                and ensuring that your messages of love and legacy live on
                forever. Thank you for choosing Forever Message. We are honored to
                help you create something truly special for your loved ones.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FAQ Section */}
      <div className="about_fqt_section py-5">
        <Container>
          <h2 className="text-center mb-5">Essential Features of Product</h2>
          <Row>
            {/* Left Column: 3 FAQ Items */}
            <Col md={6}>
              <Accordion defaultActiveKey="0" id="faqAccordionLeft">
                {/* FAQ Item 1 */}
                <Accordion.Item eventKey="0">
                  <Accordion.Header  style={{
                    background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                    color: 'white',
                  }}>
                    Scheduled Messages
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#aedbf5', border: '1px solid #aedbf5' }}>
                    With Forever Message, you can record and schedule text,
                    audio, or video messages to be accessed at precisely the
                    right time. Our unique searching bar feature allows users to
                    type in important events or keywords. If a loved one has
                    left a specific message for that event, it will pop up,
                    creating a magical connection between the message and the
                    moment.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ Item 2 */}
                <Accordion.Item eventKey="1">
                  <Accordion.Header className="mt-2" style={{
                    background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                    color: 'white'
                  }}>
                    Personalization
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#aedbf5', border: '1px solid #aedbf5' }}>
                    Make each message unique and special by adding photos,
                    videos, and personal notes. Our platform allows for
                    extensive personalization, ensuring that your messages
                    reflect your true feelings and intentions.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ Item 3 */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header className="mt-2" style={{
                    background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                    color: 'white'
                  }}>
                    Encrypted Messages
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#aedbf5', border: '1px solid #aedbf5' }}>
                    We prioritize your privacy and confidentiality. All messages
                    are encrypted to ensure that your last words remain secure
                    and private, accessible only to the intended recipients.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>

            {/* Right Column: 2 FAQ Items */}
            <Col md={6}>
              <Accordion id="faqAccordionRight">
                {/* FAQ Item 4 */}
                <Accordion.Item eventKey="3">
                  <Accordion.Header style={{
                    background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                    color: 'white'
                  }}>
                    Notifications to Contacts
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#aedbf5', border: '1px solid #aedbf5' }}>
                    Notify your trusted contacts or solicitor about the
                    existence of your messages. Ensure that you leave their
                    family name and a password to guarantee their delivery when
                    the time comes.
                  </Accordion.Body>
                </Accordion.Item>

                {/* FAQ Item 5 */}
                <Accordion.Item eventKey="4">
                  <Accordion.Header className="mt-2" style={{
                    background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                    color: 'white'
                  }}>
                    Digital Legacy
                  </Accordion.Header>
                  <Accordion.Body style={{ backgroundColor: '#aedbf5', border: '1px solid #aedbf5' }}>
                    Create a digital legacy that your loved ones can keep and
                    remember. Forever Message helps you to leave behind more
                    than just words; it allows you to leave a lasting emotional
                    connection.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;