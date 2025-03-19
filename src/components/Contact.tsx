
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="display-5 fw-bold text-center mb-5">Get In Touch</h2>
        <Row className="g-4 justify-content-center" style={{ maxWidth: "1140px", margin: "0 auto" }}>
          <Col lg={6}>
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-white border-0 pt-4 pb-0">
                <Card.Title>Contact Information</Card.Title>
                <Card.Subtitle className="text-muted mb-0">Feel free to reach out through any of these channels</Card.Subtitle>
              </Card.Header>
              <Card.Body className="d-flex flex-column gap-4">
                <div className="d-flex gap-3">
                  <MapPin className="text-muted flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="fw-medium mb-1">Address</p>
                    <p className="text-muted small">Hyderabad, 500010</p>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Mail className="text-muted flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="fw-medium mb-1">Email</p>
                    <a href="mailto:Vishalreddy354@gmail.com" className="text-muted small text-decoration-none">
                      Vishalreddy354@gmail.com
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <Phone className="text-muted flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="fw-medium mb-1">Phone</p>
                    <a href="tel:+919553852963" className="text-muted small text-decoration-none">
                      +91 9553852963
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 shadow-sm">
              <Card.Header className="bg-white border-0 pt-4 pb-0">
                <Card.Title>Send Me a Message</Card.Title>
                <Card.Subtitle className="text-muted mb-0">I'll get back to you as soon as possible</Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row className="g-3 mb-3">
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" />
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Your email" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      placeholder="Your message" 
                      style={{ minHeight: "120px" }}
                    />
                  </Form.Group>
                  <Button type="submit" variant="primary" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
