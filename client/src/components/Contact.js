import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
export const Contact = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3300/login", {
      username: username,
      password: password,
    }).then((response) => {
      if(response.data.message){
        setLoginStatus(response.data.message);
      }else{
        window.location.href = '/Home';
      }
    })
  }
  return (
    <section className="contact" id="login">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Welcome Back </h2>
                <form >
                  <Row>
                  <Col size={12} sm={6} className="px-1">
                      <input type="text" name='username'  placeholder="User Name" onChange={(e) => {setUsername(e.target.value)}} />
                    </Col>
                  <Col size={12} sm={6} className="px-1">
                      <input type="password" name="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </Col>
                    <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{loginStatus}</h1>

                    <p>Don't have a account <a href="/Register">Register</a></p>
                   <button  type="submit" onClick={login}><span>Login</span></button>
                     </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
