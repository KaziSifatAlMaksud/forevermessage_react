import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Policy = () => {
  const [activePolicy, setActivePolicy] = useState('What information do we collect?');
  const [policyContent, setPolicyContent] = useState('');

  const policySections = [
    {
      title: 'What information do we collect?',
      content: `
        <h3>What information do we collect?</h3>
        <p>The kind of Personal Information that we collect depends on how you use the Website and/or the App. It may include:</p>
        <ul>
          <li>Name</li>
          <li>Username</li>
          <li>Date of birth</li>
          <li>Password</li>
          <li>Profile picture</li>
          <li>Address</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Location data</li>
          <li>Device information</li>
          <li>IP address</li>
          <li>Cookies and usage data</li>
        </ul>
        <p>We may also collect Personal Information about you from third parties such as:</p>
        <ul>
          <li>Social media platforms</li>
          <li>Your friends or family</li>
          <li>Public databases</li>
          <li>Our service providers</li>
          <li>Other users of the Website and/or the App</li>
        </ul>
      `
    },
    {
      title: 'Types of information',
      content: `
        <h3>Types of information</h3>
        <p>The Privacy Act 1998 defines types of information, including:</p>
        <ul>
          <li><strong>Personal Information:</strong> Information or opinions about an individual, whether true or not, and recorded in any form.</li>
          <li><strong>Sensitive Information:</strong> Includes racial or ethnic origin, political opinions, religious beliefs, membership in organizations, criminal records, and health information.</li>
        </ul>
        <p>Sensitive Information will be used only for:</p>
        <ul>
          <li>The primary purpose for which it was obtained</li>
          <li>A directly related secondary purpose</li>
          <li>With your consent or when required by law</li>
        </ul>
      `
    },
    {
      title: 'How we collect your Personal Information',
      content: `
        <h3>How we collect your Personal Information</h3>
        <p>We may collect Personal Information from you when:</p>
        <ul>
          <li>You input such information into the Website or App</li>
          <li>You provide it to us in any other way</li>
        </ul>
        <p>Other methods include:</p>
        <ul>
          <li>Cookies collected from your device to enhance user experience</li>
          <li>Third-party sources, such as service providers or social platforms</li>
        </ul>
      `
    },
    {
      title: 'Security, Access and Correction',
      content: `
        <h3>Security, Access and Correction</h3>
        <p>(a) We store your Personal Information in a way that reasonably protects it from unauthorised access, misuse, modification or disclosure. When We no longer require your Personal Information for the purpose for which We obtained it, We will take reasonable steps to destroy and anonymise or de-identify it. Most of the Personal Information that is stored in Our client files and records will be kept for a maximum of 7 years to fulfill Our record-keeping obligations.</p>
        <p>(b) The Australian Privacy Principles:</p>
        <ul>
          <li>(i) Permit you to obtain access to the Personal Information We hold about you in certain circumstances (Australian Privacy Principle 12).</li>
          <li>(ii) Allow you to correct inaccurate Personal Information subject to certain exceptions (Australian Privacy Principle 13).</li>
        </ul>
        <p>(c) Where you would like to obtain such access, please contact Us in writing on the contact details set out at the bottom of this privacy policy.</p>
      `
    },
    {
      title: 'Complaint Procedure',
      content: `
        <h3>Complaint Procedure</h3>
        <p>If you have a complaint concerning the manner in which We maintain the privacy of your Personal Information, please contact Us at the contact details set out at the bottom of this policy. All complaints will be considered by Us, and We may seek further information from you to clarify your concerns.</p>
        <p>If We agree that your complaint is well-founded, We will, in consultation with you, take appropriate steps to rectify the problem. If you remain dissatisfied with the outcome, you may refer the matter to the Office of the Australian Information Commissioner.</p>
      `
    },
    {
      title: 'Overseas Transfer',
      content: `
        <h3>Overseas Transfer</h3>
        <p>Your Personal Information may be transferred overseas or stored overseas for a variety of reasons. It is not possible to identify each and every country to which your Personal Information may be sent.</p>
        <p>If your Personal Information is sent to a recipient in a country with data protection laws at least substantially similar to the Australian Privacy Principles, and where there are mechanisms available to you to enforce protection of your Personal Information under that overseas law, We will not be liable for a breach of the Australian Privacy Principles if your Personal Information is mishandled in that jurisdiction.</p>
        <p>If your Personal Information is transferred to a jurisdiction that does not have data protection laws as comprehensive as Australia's, We will take reasonable steps to secure a contractual commitment from the recipient to handle your information in accordance with the Australian Privacy Principles.</p>
      `
    },
    {
      title: 'GDPR',
      content: `
        <h3>GDPR</h3>
        <p>Your Personal Information may be transferred overseas or stored overseas for a variety of reasons. It is not possible to identify each and every country to which your Personal Information may be sent.</p>
        <p>In some circumstances, the European Union General Data Protection Regulation (GDPR) provides additional protection to individuals located in Europe. Where this is the case, there may be additional rights and remedies available to you under the GDPR if your Personal Information is handled in a manner inconsistent with that law.</p>
      `
    }
  ];

  useEffect(() => {
    // Set the initial policy content to the first section
    const initialPolicy = policySections.find(section => section.title === activePolicy);
    if (initialPolicy) {
      setPolicyContent(initialPolicy.content);
    }
  }, []);

  const handlePolicyClick = (content, title) => {
    setPolicyContent(content);
    setActivePolicy(title);
  };

  return (
    <div style={{ backgroundColor: '#bbe4f5' }}>
      {/* Showcase Area */}
      <div 
        style={{
          height: '40vh',
          backgroundImage: "url('./asset/img/Privacy_police.jpg')",
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
        }} />
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 2
        }}>
          Privacy Policy
        </h1>
      </div>

      {/* Privacy Policy Intro Section */}
      <Container className="py-5">
        <div className="section-spacing">
          <Row>
            <Col lg={12} className="p-5">
              <Card className="p-4" style={{
                borderRadius: '25px',
                background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)'
              }}>
                <Row className="align-items-center">
                  <Col lg={12} className="p-5">
                    <h2 className="text-white mb-4">Privacy Policy For This Application</h2>
                    <p className="lead text-white">
                      This Privacy Policy applies to all personal information collected by Flash Innovations Pty Ltd trading as Forever Messages ABN 50 619 618 870 ('We, Us or Our') via the website located at www.forevermessages.com.au (the 'Website') and/or the app known as Forever Messages (the 'App').
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Policy Sections */}
        <Row>
          <Col md={4}>
            <div className="list-group bg-light" style={{ borderRadius: '10px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              {policySections.map((section, index) => (
                <Button
                  key={index}
                  variant="link"
                  className={`text-start policy-card ${activePolicy === section.title ? 'active' : ''}`}
                  onClick={() => handlePolicyClick(section.content, section.title)}
                  style={{
                    cursor: 'pointer',
                    padding: '20px',
                    textDecoration: 'none',
                    color: activePolicy === section.title ? 'white' : 'inherit',
                    border: 'none',
                    borderRadius: '5px',
                    background: activePolicy === section.title 
                      ? 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)' 
                      : 'transparent'
                  }}
                >
                  {section.title}
                </Button>
              ))}
            </div>
          </Col>

          <Col md={8}>
            <div 
              className="policy-section" 
              style={{
                background: '#aedbf5',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                height: '100%'
              }}
              dangerouslySetInnerHTML={{ __html: policyContent }}
            />
          </Col>
        </Row>
      </Container>

      {/* Contact Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="fw-bold mb-3">Contact Us About Privacy</h2>
            <p className="lead">
              Have questions, need access to your personal information, or want to raise a concern about our privacy practices?  
              Feel free to reach out—we're here to help! 
              <br />
              Email Us : info@forevermessages.com.au
            </p>
            <Button 
              href="mailto:info@forevermessages.com.au" 
              className="w-50 text-white mt-3"
              style={{
                background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                padding: '10px 30px',
                borderRadius: '25px',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(90deg, rgba(1, 64, 146, 0.8) 0%, rgba(14, 107, 213, 0.8) 10.67%, rgba(14, 107, 213, 0.8) 48.17%, rgba(14, 107, 213, 0.8) 87.67%, rgba(1, 64, 146, 0.8) 100%)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)';
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} className="me-2" />
              Email Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Policy;