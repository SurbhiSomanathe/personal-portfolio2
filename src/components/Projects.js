import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assests/img/color-sharp2.png";
import projImg1 from "../assests/img/Surbhi's garage.png";
import projImg2 from "../assests/img/MEMORIES IMAGE.png";
import projImg3 from "../assests/img/Blog App.png";
import projImg4 from "../assests/img/project 4 image medical pager.png";
import TrackVisibility from 'react-on-screen';
import React from "react";


export const Projects = () => {

  const Projects = [
          {
            title: "Surbhi's Garage",
            description: <h6> In this aap you can rent car for one day within your budget. </h6>,
            imgUrl: "https://surbhisgarage.herokuapp.com/login",
            url: {
              live: "https://surbhisgarage.herokuapp.com/login",
              Github: "https://github.com/SurbhiSomanathe/Surbhi-s-Garage",
          },
        },
          {
            title: "Memories Project",
            description: <h6> We can add our memories here in the picture format and add date, hashtag, and some other thoughts about that day memory.</h6>,
            imgUrl: projImg2,
          },
          {
            title: "Blog App",
            description: <h6>In these app you write blogs which you like too. With Adding
            pictures too. </h6>,
            imgUrl: projImg3,            
          },

          {
            title: "Medical Pager(Chat App)",
            description: <h6>It Is a Medical pager theme chap application. Its' an aap where doctors and medical personnel is used to update whats happening in there divisons of the hospital </h6>,
            imgUrl: projImg4,
          },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using Github, Hiroku and Netlify.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
              <Tab.Pane eventKey="section">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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