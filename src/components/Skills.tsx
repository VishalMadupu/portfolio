
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Front-End",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React-Bootstrap", "SASS"],
      iconClass: "bg-blue-500/10"
    },
    {
      category: "Back-End",
      skills: ["Python"],
      iconClass: "bg-green-500/10"
    },
    {
      category: "Tools & Frameworks",
      skills: ["Storybook", "Chromatic", "Next.js", "React.js", "Figma", "Photoshop"],
      iconClass: "bg-purple-500/10"
    },
    {
      category: "Additional Skills",
      skills: ["Windows OS", "Git Version Control", "Responsive Design"],
      iconClass: "bg-orange-500/10"
    },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-12 text-center">
            <h2 className="fw-bold mb-4 position-relative d-inline-block section-title">Technical Skills</h2>
          </div>
        </div>
        
        <div className="row justify-content-center">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border-primary-subtle card-hover animate__animated animate__fadeInUp" 
                   style={{ animationDelay: `${index * 0.1}s`, borderRadius: "0.5rem" }}>
                <div className="card-header border-bottom-0 pb-0">
                  <div className="d-flex align-items-center gap-3">
                    <div className={`rounded-circle d-flex align-items-center justify-content-center ${category.iconClass}`} 
                         style={{ width: "40px", height: "40px" }}>
                      <span className="fs-5 fw-bold">{category.category.charAt(0)}</span>
                    </div>
                    <h5 className="card-title mb-0">{category.category}</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="outline"
                        className="badge bg-light text-dark border border-primary-subtle px-3 py-2 fs-6"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
