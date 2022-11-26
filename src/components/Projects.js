import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assests/img/color-sharp2.png";
import bookingApp from "../assests/img/car app.png";
import MemoriesProject from "../assests/img/MEMORIES IMAGE.png";
import blogApp from "../assests/img/Blog App.png";
import ChatApp from "../assests/img/chat app .png";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { SiNetlify } from "react-icons/si";
import TrackVisibility from 'react-on-screen';
import React from "react";
import "../App.css";

export const Projects = () => {

  const projects = [
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
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link eventKey="third">Projects</Nav.Link>
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
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="section">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                  </Tab.Pane> */}
                  {/* <Tab.Pane eventKey="third"> */}




                  
<div className="row" >
  <div className="col-sm-6">
    <div className="sur">
      <div className="card-body" >
        <h3 className="card-title">BookingApp</h3>
       
        {/* <a href="https://surbhisgarage.herokuapp.com/login" target = {"_blank"} className="CardBox" rel="noreferrer"> */}
        <a href="https://surbhisgarage.herokuapp.com/login" target = {"_blank"} className="CardBox" rel="noreferrer"> 
            <img src={bookingApp} alt="" />
            </a>            
        <p className="card-text">To book cars in online and checkout for the slots and availablity of cars.Admin can post new cars. Integrated with Stripe For Payment</p>
        <p className="card-text1"> html, css, bootstrap, react, redux, router, nodejs, express, mongodb</p>
        <a href="https://github.com/SurbhiSomanathe/Surbhi-s-Garage" className="ranu" target = {"_blank"} rel="noreferrer"> <Github color="black" size="2rem" /></a>
        <a href="https://surbhisgarage.herokuapp.com/login" className="ranu" target = {"_blank"} rel="noreferrer"> <SiNetlify color="skyblue" size="2rem" />
        </a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="sur">
      <div className="card-body">
      <h3 className="card-title">MemoriesProject</h3>
      <a href="https://sunny-blini-7b3719.netlify.app/" target = {"_blank"} rel="noreferrer">
            <img src={MemoriesProject} alt="" />
          </a>      
        <p className="card-text">We can add our memories here in the picture format and add date, hashtag, and some other thoughts about that day memory.</p>
        <p className="card-text1"> html, css, axios, react, redux, redux-thunk, nodejs, express, mongodb</p>
        <a href="https://github.com/SurbhiSomanathe/Memories-project" className="ranu" target = {"_blank"} rel="noreferrer"><Github color="black" size="30px"  /></a>
        <a href="https://sunny-blini-7b3719.netlify.app/" className="ranu" target = {"_blank"} rel="noreferrer"> <SiNetlify color="skyblue" size="30px" /></a>
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-sm-6">
    <div className="sur">
      <div className="card-body">
        <h3 className="card-title">BlogApp</h3>
        <a href="https://transcendent-florentine-7b5bd9.netlify.app/" target = {"_blank"} rel="noreferrer">
            <img src={blogApp} alt="" />
          </a>
        <p className="card-text">In these app you write blogs which you like too. With Adding pictures too. 
        And once you move on all blogs, blogs are available inside the database of the multiple users 
        same as Instagram or the Facebook as well.</p>
        <p className="card-text1"> html, css, bootstrap, react, redux, router, nodejs, express, mongodb</p>
        <a href="https://github.com/SurbhiSomanathe/New-Blog-App-Both/tree/main" className="ranu" target = {"_blank"} rel="noreferrer"><Github color="black" size="30px" /></a>
        <a href="https://transcendent-florentine-7b5bd9.netlify.app/" className="ranu" target = {"_blank"} rel="noreferrer"> <SiNetlify color="skyblue" size="30px" /></a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="sur">
      <div className="card-body">
      <h3 className="card-title">MedicalPager</h3>
      <a href="https://bucolic-dodol-2ca62b.netlify.app/" target = {"_blank"} rel="noreferrer">
            <img src={ChatApp} alt="" />
          </a>       
        <p className="card-text">It Is a Medical pager theme chap application. Its' an aap where doctors and medical personnel is used to update whats happening in there divisons of the hospital</p>
        <p className="card-text1"> html, css, react, nodejs, express, mongodb, router</p>
        <a href="https://github.com/SurbhiSomanathe/Medical-pager" className="ranu" target = {"_blank"} rel="noreferrer"><Github color="black" size="30px" /></a>
        <a href="https://bucolic-dodol-2ca62b.netlify.app/" className="ranu" target = {"_blank"} rel="noreferrer"> <SiNetlify color="skyblue" size="30px" /></a> 
      </div>
    </div>
  </div>
</div>
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
};