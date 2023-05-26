import React from 'react'
import colorSharp from "../../assets/img/color-sharp.png"
import 'react-multi-carousel/lib/styles.css';

import { HashLink } from 'react-router-hash-link';


export default function Htmlskills() {
  return (
    <section className="skill" id="skills" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <ul>
              
                    <h5>What is HTML</h5>

                    <li>
                  <span>
                    <p>
                    
                      <li>HTML stands for Hyper Text Markup Language</li>
                      <li>HTML is the standard markup language for creating Web pages</li>
                      <li>HTML describes the structure of a Web page</li>
                      <li>HTML consists of a series of elements</li>
                      <li>HTML elements tell the browser how to display the content</li>
                      <li>HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.e</li>
          
                      


                      
                    </p>
                  </span>
                </li>
            
                  <h5>A Simple HTML Document</h5>
               
                    <p>Example</p>
                    <HashLink to={'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_intro'}>Try it yourself</HashLink>
                   <li>
                    For more details refere this page...<HashLink to={'https://www.w3schools.com/html/html_editors.asp'}>Check here</HashLink>
                   </li>

         
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
