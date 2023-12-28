import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import noEntry from "../assets/img/project/filtered_NoEntry0.jpg";
import KF from "../assets/img/project/kitchen.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const uniProjects = [
    {
      title: "Ridesharing Simulation",
      description: " Developed a simulation model of a spontaneous ridesharing system to implement different strategies and used Python to perform statistical analysis for evaluation",
      imgUrl: noEntry,
    },
    {
      title: "Olympoid",
      description: "3D Olympoid modelled and animated pair figure skating in Maya",
      imgUrl: noEntry,
    },
    {
      title: "Kitchen Feud",
      description: "online multiplayer kitchen game using Unity, involving competitive gameplay against other kitchen teams while allowing for strategic sabotage",
      imgUrl: KF,
    },
    {
      title: "BSE",
      description: "Worked with the Bristol Stock Exchange to determine the parameters that produce the highest revenue. Then extended the code by adding a new adaptive trader that proved to perform better",
      imgUrl: noEntry,
    },
    {
      title: "No Entry Sign Detector",
      description: "Built and trained a detector to detect instances of No Entry signs in images using opencv library",
      imgUrl: noEntry,
    },
    {
      title: "C++ Graphics Renderer",
      description: "A C++ program that renders a Cornell Box scene using various techniques, including wireframing, rasterisations and ray tracing.s",
      imgUrl: noEntry,
    },
    {
      title: "History Trails",
      description: "interface/web app for museum visitors about display objects by fetching JSON-encoded data from open datasets and using Agile development and Spring Boot framework",
      imgUrl: noEntry,
    },
    {
      title: "Game of Life",
      description: "parallel and distributed implementations of Conway’s Game of Life in Go, using remote-procedure-calls to link multiple AWS nodes",
      imgUrl: noEntry,
    },
   
    {
      title: "Scotland Yard",
      description: "Wrote a Java program to allow users to play Scotland Yard board game using OOP paradigms and design patterns",
      imgUrl: noEntry,
    },
  ];

  const WorkExp = [
    {
      title: "Amazon",
      description: "Automated the selection of Getty images to purchase for the purposes of display on Alex devices, by targeting high-volume failing entity requests and employing serverless architecture",
      imgUrl: noEntry,
    },
    {
      title: "Inductosense",
      description: "Displayed raw data in various formats using React and Typescript to provide clear and informative visualisations which highlighted trends and problematic data points",
      imgUrl: noEntry,
    },
  ];




  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="uni">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="uni">Uni Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="workExp">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="other">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="uni">
                      <Row>
                        {
                          uniProjects.map((project, index) => {
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
                    <Tab.Pane eventKey="workExp">
                      <Row>
                        {
                          WorkExp.map((project, index) => {
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
                    <Tab.Pane eventKey="other">
                      <p>Coming Soon</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
