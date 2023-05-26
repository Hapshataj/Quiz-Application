import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";
import Home from "./Home";
import { Banner } from "./Banner";
import { Projects } from "./Projects";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Contact } from "./Contact";
import axios, { Axios } from "axios";
export const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [registerStatus, setRegisterStatus] = useState("");
  const register=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3300/register",{
      username: username,
      password: password,
      email: email,
      phone:phone,
    })
    .then((response) => {
      setRegisterStatus(response);
      console.log(response);
      if(response.data.message){
        setRegisterStatus(response.data.message);
      }
       else{
         
            window.location.href = '/Home';
      }
    })}
  return (
    <section className="contact" id="reg">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate_animated animate_zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate_animated animate_fadeIn" : ""}>
                <h2>Welcome to Quizzy</h2>
                
                <form >
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='username'  placeholder="User Name" onChange={(e) => {setUsername(e.target.value)}} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="password" name="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="email" placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"   name='phone' placeholder="Phone No." onChange={(e) => {setPhone(e.target.value)}}/>
                    </Col>
                    <Col>
                    <h1 style={{fontSize: '15px', textAlign: 'center', marginTop: '20px'}}>{registerStatus}</h1>
                    <button type="submit" onClick={register} ><span>Register</span></button>
                    
                   </Col>
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