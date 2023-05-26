import { Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Banner } from "./Banner";
import {Register} from '../components/Register'



export const ProjectCard = ({ title, description, imgUrl ,value,quiz,Quizname}) => {
  const navigate = useNavigate();
 

  

  
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
         
          <button type="submit" className="btn" onClick={()=> window.location.href = value}>Start</button>
       
         
      
          
          

          
        </div>
      </div>
    </Col>
  )
}
