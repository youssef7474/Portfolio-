import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { Projects, ProjectsCode, ProjectsTypeScript } from "../../Data/Projects";
import ProjectCard from "./Compounents/ProjectCard";
import colorSharp2 from "../../assets/imges/color-sharp2.png"
const ProjectCompo = () => {
    const isVisible=true
  return (
    <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          
           
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projects</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        Projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                  <Row>
                  {
                    ProjectsTypeScript.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>

                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                  <Row>
                  {
                    ProjectsCode.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                          />
                      )
                    })
                  }
                </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="p"></img>
  </section>
  );
};

export default ProjectCompo;
