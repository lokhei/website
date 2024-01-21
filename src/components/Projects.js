import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { projectsList } from "./ProjectInfo";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [activeKey, setActiveKey] = useState(() => {
    // Retrieve last selected eventKey from localStorage or set a default
    return localStorage.getItem('lastSelectedEventKey') || 'workExp';
  });

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  // Save the last selected eventKey to localStorage
  useEffect(() => {
    localStorage.setItem('lastSelectedEventKey', activeKey);
  }, [activeKey]);

  const uniProjects = projectsList.filter((project) => project.type === 'uni');
  const workExpProjects = projectsList.filter((project) => project.type === 'work_exp');

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <Tab.Container id="projects-tabs" activeKey={activeKey} onSelect={handleSelect}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="workExp">Work Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="uni">Uni Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="other">Other</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="uni">
                        <Row>
                          {uniProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="workExp">
                        <Row>
                          {workExpProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="other">
                        <p>Coming Soon</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
