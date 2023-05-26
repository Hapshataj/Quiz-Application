
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"
import Javaskills from"../components/skillpages/Javaskill";

import { HashLink } from 'react-router-hash-link';
import { NavBar } from './NavBar';
import { Nav } from 'react-bootstrap';


export const Skills = () => {
 

  return (
    
    <section className="skill" id="skills">
      <Nav/>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn" style={{textAlign:'center'}}>
                        <h2 >Select your Fav programming language to develop your knowledge</h2><br></br>
                        
                     <HashLink >
                   <button type='submit'className="sbtn" onClick={() => window.location.href='/Javaskill'}>Java</button></HashLink>
                   
                   <HashLink>
                   <button className="sbtn" type='submit' onClick={() => window.location.href='/Htmlskills'}>HTML</button>
                    
                   </HashLink>
                    
                   <HashLink>
                   <button className="sbtn" type='submit' onClick={() => window.location.href='/Jsskills'}>JavaScript</button>
                    
                   </HashLink>
                   <HashLink>
                   <button className="sbtn" type='submit' onClick={() => window.location.href='/Pythonskill'}>Python</button>
                    
                   </HashLink>
                   <HashLink>
                   <button className="sbtn"  type='submit' onClick={() => window.location.href='/CHasskills'}>C#</button>
                    
                   </HashLink>
                   <HashLink>
                   <button className="sbtn"type='submit' onClick={() => window.location.href='/Cssskills'}>Css</button>
                    
                   </HashLink>
                        
                       
                        
                        
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
