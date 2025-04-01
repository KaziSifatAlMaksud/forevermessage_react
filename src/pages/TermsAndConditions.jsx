import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faList,
  faBell,
  faPhotoFilm,
  faLock,
  faFlagCheckered,
  faGavel,
  faScaleBalanced,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons';

const TermsAndConditions = () => {
  return (
    <div style={{ backgroundColor: '#bbe4f5' }}>
      {/* Showcase Area */}
      <div 
        style={{
          height: '40vh',
          backgroundImage: "url('./asset/img/terms and condition.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
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
        }}>Terms & Conditions</h1>
      </div>

      {/* About the App Section */}
      <Container className="my-5">
        <div className="section-spacing">
          <Row>
            <Col lg={12} className="p-5">
              <Card className="p-4" style={{
                borderRadius: '25px',
                background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)'
              }}>
                <Row className="align-items-center">
                  <Col lg={12} className="p-5">
                    <h2 className="text-white mb-4">About the App and Website</h2>
                    <p className="lead text-white">
                      Welcome to Forever Messages (Forever Messages). Forever
                      Messages provides customers with the ability to record
                      videos, upload photos, and send text messages to be accessed
                      by others at a later point in time (the 'Services'). Forever
                      Messages is operated by Flash Innovations Pty Ltd ABN 50 619
                      618 870 (Flash Innovations). Access to and use of Forever
                      Messages, or any of its associated products or Services
                      (including the app and website), is provided by Flash
                      Innovations. Please read these terms and conditions (the
                      'Terms') carefully. By using Forever Messages, this
                      signifies that you have read, understood and agree to be
                      bound by the Terms. If you do not agree with the Terms, you
                      must cease usage of Forever Messages, or any of Services,
                      immediately. (c) Flash Innovations reserves the right to
                      review and change any of the Terms by updating this page at
                      its sole discretion. When Flash Innovations updates the
                      Terms, it will use reasonable endeavours to provide you with
                      notice of updates to the Terms. Any changes to the Terms
                      take immediate effect from the date of their publication.
                      Before you continue, we recommend you keep a copy of the
                      Terms for your records.
                    </p>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Acceptance of Terms Section */}
        <h2 className="text-center mb-4">Acceptance of the Terms</h2>
        <Row className="text-center">
          <p>
            You accept the Terms by visiting or using Forever Messages. You may
            also accept the Terms by clicking to accept or agree to the Terms
            where this option is made available to you in the user interface.
          </p>
        </Row>

        {/* Terms & Conditions Accordion Section */}
        <div className="section-spacing mb-5">
          <Container>
            <h2 className="text-center mb-5">Terms & Conditions</h2>
            <Row>
              <Col md={12}>
                <Accordion defaultActiveKey="0">
                  {/* Registration to use the Services */}
                  <Accordion.Item eventKey="0" className='mb-2'>
                    <Accordion.Header style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                      Registration to use the Services
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                      In order to access the Services, you must first register
                      for an account through the app or website (the 'Account').
                      As part of the registration process, or as part of your
                      continued use of the Services, you may be required to
                      provide personal information about yourself (such as
                      identification or contact details), including: (i) Email
                      address; (ii) Preferred username; (iii) Telephone number;
                      (iv) Date of birth; (v) Password. You warrant that any
                      information you give to Flash Innovations in the course of
                      completing the registration process will always be
                      accurate, correct and up to date. Once you have completed
                      the registration process, you will be a registered member
                      of Forever Messages ('Member') and agree to be bound by
                      the Terms. You may not use the Services and may not accept
                      the Terms if: i. you are not of legal age to form a
                      binding contract with Infinity Lawyers Pty Ltd; ii. you
                      are a person barred from receiving the Services under the
                      laws of Australia or other countries including the country
                      in which you are resident or from which you use the
                      Services.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Your obligations as a Member */}
                  <Accordion.Item eventKey="1" className='mb-2'>
                    <Accordion.Header style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                      Your obligations as a Member
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                      (i) As a Member, you agree to comply with the following:
                      you will use the Services only for purposes that are
                      permitted by: (A) the Terms; and (B) any applicable law,
                      regulation or generally accepted practices or guidelines
                      in the relevant jurisdictions; (ii) you have the sole
                      responsibility for protecting the confidentiality of your
                      password and/or email address. Use of your password by any
                      other person may result in the immediate cancellation of
                      the Services; (iii) any use of your registration
                      information by any other person, or third parties, is
                      strictly prohibited. You agree to immediately notify Flash
                      Innovations of any unauthorised use of your password or
                      email address or any breach of security of which you have
                      become aware; (iv) access and use of Forever Messages is
                      limited, non-transferable and allows for the sole use of
                      Forever Messages by you for the purposes of Flash
                      Innovations providing the Services; (v) you will not use
                      Forever Messages or Forever Messages' Services in
                      connection with any commercial endeavours except those
                      that are specifically endorsed or approved by the
                      management of Flash Innovations; (vi) you will not use
                      Forever Messages or Forever Messages' Services for any
                      illegal and/or unauthorised use which includes collecting
                      email addresses of Members by electronic or other means
                      for the purpose of sending unsolicited email or
                      unauthorised framing of or linking to Forever Messages;
                      (vii) you agree that commercial advertisements, affiliate
                      links, and other forms of solicitation may be removed from
                      Forever Messages without notice and may result in
                      termination of the Services. Appropriate legal action will
                      be taken by Flash Innovations for any illegal or
                      unauthorised use of the Forever Messages; (viii) you
                      acknowledge and agree that you are over the age of 18
                      years; and (ix) you acknowledge and agree that any
                      automated use of Forever Messages or Forever Messages'
                      Services is prohibited.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Payment */}
                  <Accordion.Item eventKey="2" className='mb-2'>
                    <Accordion.Header style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                      Payment
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                      All payments made in the course of your use of the
                      Services are made using either credit card, Paypal,
                      Stripe, Google Pay or Apple Pay. In using Forever
                      Messages, the Services or when making any payment in
                      relation to your use of the Services, you warrant that you
                      have read, understood and agree to be bound by the terms
                      and conditions of the payment provider which are available
                      on their respective websites. You acknowledge and agree
                      that where a request for a payment is returned or denied,
                      for whatever reason, by your financial institution or is
                      unpaid by you for any other reason, then you are liable
                      for any costs, including banking fees and charges,
                      associated with the fee.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Refund Policy */}
                  <Accordion.Item eventKey="3" className='mb-2'>
                    <Accordion.Header style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                      Refund Policy
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                      Flash Innovations will only provide you with a refund in
                      the event they are unable to continue to provide the
                      Services or if Flash Innovations makes a decision, at its
                      absolute discretion, that it is reasonable to do so under
                      the circumstances. Where this occurs, the refund will be
                      in the proportional amount of any fees that remains unused
                      by the Member (the 'Refund'). Any benefits set out in
                      these Terms may apply in addition to consumer's rights
                      under the Australian Consumer Law.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Copyright and Intellectual Property */}
                  <Accordion.Item eventKey="4" className='mb-2'>
                    <Accordion.Header style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                      Copyright and Intellectual Property
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                      Forever Messages, the Services and all of the related
                      products of Flash Innovations are subject to copyright.
                      The material on Forever Messages is protected by copyright
                      under the laws of Australia and through international
                      treaties. Unless otherwise indicated, all rights
                      (including copyright) in the Services and compilation of
                      Forever Messages(including but not limited to text,
                      graphics, logos, button icons, video images, audio clips,
                      code, scripts, design elements and interactive features)
                      or the Services are owned or controlled for these
                      purposes, and are reserved by Flash Innovations or its
                      contributors. All trademarks, service marks and trade
                      names are owned, registered and/or licensed by Flash
                      Innovations, who grants to you a worldwide, non-exclusive,
                      royalty-free, revocable license whilst you are a Member
                      to: (i) use Forever Messages pursuant to the Terms; (ii)
                      copy and store material contained in Forever Messages in
                      your device's cache memory; (iii) print pages from Forever
                      Messages for your own personal and non-commercial use.
                      Flash Innovations does not grant you any other rights
                      whatsoever in relation to Forever Messages or the
                      Services. All other rights are expressly reserved by Flash
                      Innovations. Flash Innovations retains all rights, title
                      and interest in and to Forever Messages and all related
                      Services. Nothing you do on or in relation to Forever
                      Messages will transfer any: (i) to you.business name,
                      trading name, domain name, trade mark, industrial design,
                      patent, registered design or copyright (ii) a right to use
                      or exploit a business name, trading name, domain name,
                      trade mark or industrial design (iii) a thing, system or
                      process that is the subject of a patent, registered design
                      or copyright (or an adaptation or modification of such a
                      thing, system or process), You may not, without the prior
                      written permission of Flash Innovations and the permission
                      of any other relevant rights owners: broadcast, republish,
                      up-load to a third party, transmit, post, distribute, show
                      or play in public, adapt or change in any way the Services
                      or third party Services for any purpose, unless otherwise
                      provided by these Terms. This prohibition does not extend
                      to materials on Forever Messages, which are freely
                      available for re-use or are in the public domain.
                    </Accordion.Body>
                  </Accordion.Item>

                  {/* Privacy */}
                  <Accordion.Item eventKey="5" className='mb-2'>
                    <Accordion.Header  style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                      Privacy
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                      Flash Innovations takes your privacy seriously and any
                      information provided through your use of Forever Messages
                      and/or Services are subject to our Privacy Policy, which
                      is available on Privacy Policy.
                    </Accordion.Body>
                  </Accordion.Item>
                   {/* Privacy */}
                  <Accordion.Item eventKey="6" className='mb-2'>
                    <Accordion.Header  style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                      General Disclaimer
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                      Nothing in the Terms limits or excludes any guarantees, warranties, representations or conditions implied or imposed by law, including the Australian Consumer Law (or any liability under them) which by law may not be limited or excluded.
                      Subject to this clause, and to the extent permitted by law:
                      (i) all terms, guarantees, warranties, representations or conditions which are not expressly stated in the Terms are excluded;
                      (ii) Flash Innovations will not be liable for any special, indirect or consequential loss or damage (unless such loss or damage is reasonably foreseeable resulting from our failure to meet an applicable Consumer Guarantee), loss of profit or opportunity, or damage to goodwill arising out of or in connection with the Services or these Terms (including as a result of not being able to use the Services or the late supply of the Services), whether at common law, under contract, tort (including negligence), in equity, pursuant to statute or otherwise.

                      Use of Forever Messages and the Services and anything that you post or upload is done so at your own risk. Forever Messages will not take responsibility for any breach of security. You acknowledge that in using Forever Messages, you take full responsibility to ensure that any content uploaded or shared by you is done so in a secure manner. Forever Messages does not condone the posting, sharing or uploading of sensitive material and you acknowledge that should you choose to do so, you do so at your own risk. Everything on Forever Messages and the Services is provided to you "as is" and "as available" without warranty or condition of any kind. None of the affiliates, directors, officers, employees, agents, contributors and licensors of Flash Innovations make any express or implied representation or warranty about the Services or any products or Services (including the products or Services of Flash Innovations) referred to on Forever Messages. This includes (but is not restricted to) loss or damage you might suffer as a result of any of the following:
                      (i) failure of performance, error, omission, interruption, deletion, defect, failure to correct defects, delay in operation or transmission, computer virus or other harmful component, loss of data, communication line failure, unlawful third party conduct, or theft, destruction, alteration or unauthorised access to records;
                      (ii) the accuracy, suitability or currency of any information on Forever Messages, the Services, or any of its Services related products (including third party material and advertisements on Forever Messages)
                      (iii) costs incurred as a result of you using Forever Messages, the Services or any of the products of Flash Innovations;
                      (iv) the Services or operation in respect to links which are provided for your convenience.
                    </Accordion.Body>
                  </Accordion.Item>
                   {/* Privacy */}
                  <Accordion.Item eventKey="7" className='mb-2'>
                    <Accordion.Header  style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                     Limitation of liability
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                     (a) Flash Innovations’ total liability arising out of or in connection with the Services or these Terms, however arising, including under contract, tort (including negligence), in equity, under statute or otherwise, will not exceed the resupply of the Services to you.
                     (b) You expressly understand and agree that Flash Innovations, its affiliates, employees, agents, contributors and licensors shall not be liable to you for any direct, indirect, incidental, special consequential or exemplary damages which may be incurred by you, however caused and under any theory of liability. This shall include, but is not limited to, any loss of profit (whether incurred directly or indirectly), any loss of goodwill or business reputation and any other intangible loss.
                    </Accordion.Body>
                  </Accordion.Item>

                     {/* Privacy */}
                  <Accordion.Item eventKey="8" className='mb-2'>
                    <Accordion.Header  style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                    Competitors
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                    If you are in the business of providing similar Services for the purpose of providing them to users for a commercial gain, whether business users or domestic users, then you are a competitor of Flash Innovations. Competitors are not permitted to use or access any information or content on Forever Messages. If you breach this provision, Flash Innovations will hold you fully responsible for any loss that we may sustain and hold you accountable for all profits that you might make from such a breach. </Accordion.Body>
                  </Accordion.Item>

                      {/* Privacy */}
                  <Accordion.Item eventKey="9" className='mb-2'>
                    <Accordion.Header  style={{
                      background: 'linear-gradient(90deg, rgb(0, 63, 145) 6.62%, rgb(20, 130, 249) 52.26%, rgb(1, 64, 146) 96.48%)',
                      color: 'white'
                    }}>
                    Indemnity
                    </Accordion.Header>
                    <Accordion.Body style={{
                      backgroundColor: '#aedbf5',
                      border: '1px solid #aedbf5'
                    }}>
                      
                      You agree to indemnify Flash Innovations, its affiliates, employees, agents, contributors, third party content providers and licensors from and against:

                      (a) all actions, suits, claims, demands, liabilities, costs, expenses, loss and damage (including legal fees on a full indemnity basis) incurred, suffered or arising out of or in connection with your content;
                      (b) any direct or indirect consequences of you accessing, using or transacting on Forever Messages or attempts to do so; and/or
                      (c) any breach of the Terms.
                    </Accordion.Body>
                  </Accordion.Item>

                  
                </Accordion>

                
              </Col>
            </Row>
          </Container>
        </div>

        {/* Dispute Resolution Section */}
        <h2 className="text-center mb-5">Dispute Resolution</h2>
        <Row className="text-center">
          {/* Compulsory */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faList} className="fs-1 mb-3" />
                <h5 className="card-title">Compulsory</h5>
                <p>
                  If a dispute arises out of or relates to the Terms, either party
                  may not commence any Tribunal or Court proceedings in relation
                  to the dispute, unless the following clauses have been complied
                  with (except where urgent interlocutory relief is sought).
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Notice */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faBell} className="fs-1 mb-3" />
                <h5 className="card-title">Notice</h5>
                <p>
                  A party to the Terms claiming a dispute (the 'Dispute') has
                  arisen under the Terms, must give written notice to the other
                  party detailing the nature of the Dispute, the desired outcome
                  and the action required to settle the Dispute.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Resolution */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faPhotoFilm} className="fs-1 mb-3" />
                <h5 className="card-title">Resolution</h5>
                <p>
                  Upon receiving the Notice, the Parties must resolve the Dispute
                  within 28 days. If unresolved, they must appoint a mediator or
                  request one from the Australian Mediation Association. Both
                  Parties share mediation costs and cover their own expenses.
                  Mediation will be held in Sydney, Australia.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Confidential */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faLock} className="fs-1 mb-3" />
                <h5 className="card-title">Confidential</h5>
                <p>
                  All communications concerning negotiations made by the Parties
                  arising out of and in connection with this dispute resolution
                  clause are confidential and to the extent possible, must be
                  treated as "without prejudice" negotiations for the purpose of
                  applicable laws of evidence.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Termination of Mediation */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faFlagCheckered} className="fs-1 mb-3" />
                <h5 className="card-title">Termination of Mediation</h5>
                <p>
                  If 2 months have elapsed after the start of a mediation of the
                  Dispute and the Dispute has not been resolved, either Party may
                  ask the mediator to terminate the mediation and the mediator
                  must do so.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Venue and Jurisdiction */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faGavel} className="fs-1 mb-3" />
                <h5 className="card-title">Venue and Jurisdiction</h5>
                <p>
                  The Services offered by Flash Innovations are intended to be
                  provided to residents of Australia. In the event of any Dispute
                  arising out of or in relation to Forever Messages, you agree
                  that the exclusive venue for resolving any Dispute shall be in
                  the courts of New South Wales, Australia.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Governing Law */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faScaleBalanced} className="fs-1 mb-3" />
                <h5 className="card-title">Governing Law</h5>
                <p>
                  The Terms are governed by the laws of New South Wales,
                  Australia. Any dispute, controversy, proceeding or claim of
                  whatever nature arising out of or in any way relating to the
                  Terms and the rights created hereby shall be governed,
                  interpreted and construed by, under and pursuant to the laws of
                  New South Wales, Australia, without reference to conflict of law
                  principles, notwithstanding mandatory rules. The validity of
                  this governing law clause is not contested. The Terms shall be
                  binding to the benefit of the parties hereto and their
                  successors and assigns.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Severance */}
          <Col md={6} className="mb-4">
            <Card className="p-4 border-0" style={{ backgroundColor: '#aedbf5' }}>
              <Card.Body>
                <FontAwesomeIcon icon={faBriefcase} className="fs-1 mb-3" />
                <h5 className="card-title">Severance</h5>
                <p>
                  If any part of these Terms is found to be void or unenforceable
                  by a Court of competent jurisdiction, that part shall be severed
                  and the rest of the Terms shall remain in force.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TermsAndConditions;