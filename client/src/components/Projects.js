import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import java from "../assets/img/java.jpg"
import python from "../assets/img/python.jpg"
import html from "../assets/img/html.jpg"
import css from "../assets/img/css.jpg"
import js from "../assets/img/js.jpg"
import C from "../assets/img/c.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";
import Html from "./quizpages/Html";


export const Projects = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const isAuthenticated = true;

    if (isAuthenticated) {

      window.location.href = '/Home';
    }
  }

  const projects = [
    {
      title: "Java",
      description: "",
      imgUrl: java,
      value: 'Java',

    },
    {
      title: "PYTHON",
      description: "",
      imgUrl: python,
      value: '/Python',
    },
    {
      title: "Javascript",
      description: "",
      imgUrl: js,
      value: 'Javascript',
    },
    {
      title: "CSS",
      description: "",
      imgUrl: css,
      value: '/Css',
    },
    {
      title: "HTML",
      description: "",
      imgUrl: html,
      value: '/Html',
    },
    {
      title: "C",
      description: "",
      imgUrl: C,
      value: '/CHas',
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Categories</h2>
<p>The interactive online quizzes not only help teachers with teaching techniques during e-learning but also have a beneficial impact on students. Increasing students' involvement, motivation, better score and stress reduction are several benefits that students get through fun online quizzes</p>
                 
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
                            projects.map((project, index) => {
                              return (


                                <ProjectCard
                                  key={index}
                                  {...project} />






                              )
                            })
                          }

                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects.map((project, index) => {
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
                            projects.map((project, index) => {
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
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
