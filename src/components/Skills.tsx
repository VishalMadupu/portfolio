
import React from "react";
import { Badge, Card, Container, Row, Col } from "react-bootstrap";

const Skills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React-Bootstrap", "SASS"],
      iconClass: "bg-primary bg-opacity-10"
    },
    {
      category: "Back-End",
      skills: ["Python"],
      iconClass: "bg-success bg-opacity-10"
    },
    {
      category: "Tools & Frameworks",
      skills: ["Storybook", "Chromatic", "Next.js", "React.js", "Figma", "Photoshop"],
      iconClass: "bg-purple bg-opacity-10"
    },
    {
      category: "Additional Skills",
      skills: ["Windows OS", "Git Version Control", "Responsive Design"],
      iconClass: "bg-warning bg-opacity-10"
    },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold position-relative d-inline-block pb-2 border-bottom border-primary">
            Technical Skills
          </h2>
        </div>
        
        <Row className="g-4 justify-content-center">
          {skillCategories.map((category, index) => (
            <Col key={index} xs={12} md={6} className="fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-100 shadow-sm border-0 transition-all hover-shadow">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <div className={`rounded-circle p-2 me-3 ${category.iconClass}`}>
                      <span className="fs-5 fw-bold">{category.category.charAt(0)}</span>
                    </div>
                    <Card.Title className="mb-0">{category.category}</Card.Title>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        bg="light"
                        text="dark"
                        className="px-3 py-2 border"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
