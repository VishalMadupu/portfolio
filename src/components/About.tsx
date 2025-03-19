
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FileText, Briefcase, Award, Lightbulb } from "lucide-react";

const About = () => {
  const qualities = [
    { 
      icon: <Briefcase className="text-primary" size={32} />, 
      title: "Professional",
      description: "Dedicated to delivering high-quality work that exceeds expectations" 
    },
    { 
      icon: <Lightbulb className="text-primary" size={32} />, 
      title: "Creative",
      description: "Innovative approach to problem-solving and design challenges" 
    },
    { 
      icon: <Award className="text-primary" size={32} />, 
      title: "Skilled",
      description: "Proficient in modern web development technologies and best practices" 
    },
  ];

  return (
    <section id="about" className="py-5 bg-gradient">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold position-relative d-inline-block pb-2 border-bottom border-primary">
            About Me
          </h2>
        </div>
        
        <div className="mx-auto" style={{ maxWidth: "1140px" }}>
          <Row className="g-4 mb-5">
            {qualities.map((quality, index) => (
              <Col key={index} md={4}>
                <Card className="h-100 shadow-sm border-0 transition-all hover-shadow bg-white bg-opacity-75">
                  <Card.Body className="p-4 text-center">
                    <div className="mb-3 p-3 rounded-circle bg-primary bg-opacity-10 d-inline-block fadeInUp" 
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      {quality.icon}
                    </div>
                    <h3 className="fs-4 fw-semibold mb-2">{quality.title}</h3>
                    <p className="text-muted small">{quality.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          <Card className="rounded-3 p-4 shadow border-0 bg-white position-relative overflow-hidden fadeInUp">
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-10"></div>
            <Card.Body>
              <h3 className="fs-4 fw-semibold mb-3">Objective</h3>
              <p className="text-muted mb-4">
                As a passionate Web Developer, I specialize in front-end and back-end technologies with a focus on 
                building scalable, user-friendly, and responsive web applications. My expertise lies in creating dynamic and 
                visually appealing interfaces, optimizing web performance, and contributing to innovative, forward-thinking 
                projects.
              </p>
              <div className="text-center">
                <Button variant="outline-primary" className="d-inline-flex align-items-center gap-2">
                  <FileText size={16} />
                  <span>Download Resume</span>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default About;
