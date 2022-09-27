import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assests/img/color-sharp2.png";
import projImg1 from "../assests/img/Surbhi's garage.png";
import projImg2 from "../assests/img/MEMORIES IMAGE.png";
// import projImg3 from "../assests/img/project-img3.png";
import abc from "../assests/img/abc.jpg";
import abcd from "../assests/img/abcd.webp";
import TrackVisibility from 'react-on-screen';
// import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {

        const Projects = [
                {
                  title: "Surbhi's Garage",
                  description: "In this aap you can rent car for one day within your budget",
                  imgUrl: projImg1,
                },
                {
                  title: "Memories Project",
                  description: " We can add our memories here in the picture format and add date, hashtag, and some other thoughts about that day memory.",
                  imgUrl: projImg2,
                },
                {
                  title: "Project Name",
                  description: "About Project",
                  imgUrl: abcd,
                },
                {
                  title: "Project Name",
                  description: "About Projectt",
                  imgUrl: abcd,
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
                          {/* <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                          </Nav.Item> */}
                          {/* <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                          </Nav.Item> */}
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