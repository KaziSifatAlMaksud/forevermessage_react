import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFolderTree,
  faUmbrella,
  faIndustry,
  faUsers,
  faStopwatch,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

const Security = () => {
  return (
    <div style={{ backgroundColor: '#bbe4f5' }}>
      {/* Showcase Area */}
      <div 
        style={{
          height: '40vh',
          backgroundImage: "url('./asset/img/19293-Lock.jpg')",
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
          fontSize: '48px',
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 2
        }}>Security</h1>
      </div>

      {/* Our Commitment Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Commitment</h2>
        <Row className="text-center">
          {/* Secure Infrastructure */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faFolderTree} className="fs-1 mb-3" />
                <h5 className="card-title">Secure Infrastructure</h5>
                <p>
                  We use a trusted hosting provider known for its robust security
                  features to protect our website from unauthorized access and
                  potential threats.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Data Protection */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faUmbrella} className="fs-1 mb-3" />
                <h5 className="card-title">Data Protection</h5>
                <p>
                  All your data is handled with the utmost care, employing
                  advanced encryption and security measures to ensure its
                  confidentiality and integrity.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Industry Standards */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faIndustry} className="fs-1 mb-3" />
                <h5 className="card-title">Industry Standards</h5>
                <p>
                  We adhere to industry standards and best practices for security.
                  Our security measures are regularly reviewed to ensure
                  compliance with the latest regulations and standards, providing
                  you with a secure environment.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Compliance */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faUsers} className="fs-1 mb-3" />
                <h5 className="card-title">Compliance</h5>
                <p>
                  Our platform complies with major data protection regulations,
                  ensuring that your personal information is handled with care and
                  in accordance with legal requirements.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Immediate Action */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faStopwatch} className="fs-1 mb-3" />
                <h5 className="card-title">Immediate Action</h5>
                <p>
                  In the unlikely event of a security breach, our incident
                  response team is prepared to take immediate action. We have a
                  comprehensive incident response plan in place to quickly
                  identify, contain, and mitigate any potential threats.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Our Security Culture Section */}
      <Container>
        <h2 className="text-center mt-5">Our Security Culture</h2>
        <Row>
          <Col lg={6} className="py-4">
            {/* Continuous Improvement */}
            <Card className="p-3" style={{ borderRadius: '15px', backgroundColor: '#aedbf5', border: 'none' }}>
              <h5><FontAwesomeIcon icon={faCheck} /> Continuous Improvement</h5>
              <p>
                We believe that security is an ongoing process. We are actively
                committed to staying up-to-date with the latest security threats
                and advancements. Your security is our priority, and we take every
                measure to maintain and improve it continuously.
              </p>
            </Card>

            {/* Proactive Measures */}
            <Card className="p-3 mt-2" style={{ borderRadius: '15px', backgroundColor: '#aedbf5', border: 'none' }}>
              <h5><FontAwesomeIcon icon={faCheck} /> Proactive Measures</h5>
              <p>
                We take a proactive approach to security, regularly conducting
                audits and assessments to identify and mitigate potential
                vulnerabilities. This helps us stay ahead of potential threats and
                maintain the highest levels of security for our users.
              </p>
            </Card>

            {/* User Responsibilities */}
            <Card className="p-3 mt-2" style={{ borderRadius: '15px', backgroundColor: '#aedbf5', border: 'none' }}>
              <h5><FontAwesomeIcon icon={faCheck} /> User Responsibilities</h5>
              <p>
                To further safeguard your security, we recommend the following
                best practices:
              </p>
            </Card>
          </Col>

          <Col lg={6} className="py-4">
            {/* Protect Your Passwords */}
            <Card className="p-3 mt-2" style={{ borderRadius: '15px', backgroundColor: '#aedbf5', border: 'none' }}>
              <h5><FontAwesomeIcon icon={faCheck} /> Protect Your Passwords</h5>
              <p>
                Never share your passwords with anyone. Ensure your passwords are
                strong and unique to prevent unauthorized access.
              </p>
            </Card>

            {/* Be Aware of Phishing */}
            <Card className="p-3 mt-2" style={{ borderRadius: '15px', backgroundColor: '#aedbf5', border: 'none' }}>
              <h5><FontAwesomeIcon icon={faCheck} /> Be Aware of Phishing</h5>
              <p>
                Be cautious of emails or messages that ask for your personal
                information or direct you to click on unfamiliar links. Always
                verify the source before responding or clicking.
              </p>
            </Card>

            {/* Use Secure Networks */}
            <Card className="p-3 mt-3" style={{ borderRadius: '15px', backgroundColor: '#aedbf5', border: 'none' }}>
              <h5><FontAwesomeIcon icon={faCheck} /> Use Secure Networks</h5>
              <p>
                Avoid using public Wi-Fi networks for accessing sensitive
                information. Use a secure, private connection whenever
                possible.Your cooperation and vigilance are crucial in maintaining
                a secure environment. If you have any questions or concerns about
                security, please contact us directly. Thank you for trusting us
                with your data.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Security;