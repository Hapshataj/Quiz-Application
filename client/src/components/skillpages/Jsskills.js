import React from 'react'
import colorSharp from "../../assets/img/color-sharp.png"
import 'react-multi-carousel/lib/styles.css';

import { HashLink } from 'react-router-hash-link';

export default function Jsskills() {
  return (
    <section className="skill" id="skills" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h5>JavaScript</h5>
              <ul>

                <li>
                  JavaScript is the world's most popular programming language.
                </li>
                <li>
                  JavaScript is the programming language of the Web.
                </li>
                <li>
                  JavaScript is easy to learn.
                </li>
                <li>
                  This tutorial will teach you JavaScript from basic to advanced.
                </li>
                <p>
                  Eample:<br>
                  </br>
                  <HashLink to={'https://www.w3schools.com/js/tryit.asp?filename=tryjs_myfirst'}>check here</HashLink>

                </p>
                <h5>JavaScript Can Change HTML Content</h5>

                <p>
                  <li>
                    One of many JavaScript HTML methods is getElementById().<br></br>
                  </li>
                  <li>
                    The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":
                  </li> </p>
                  <p>
                    Example:
                  </p>
                  <code>
                  document.getElementById("demo").innerHTML = "Hello JavaScript";
                  </code><br></br>
                  <li>
                  <p>
                  In this example JavaScript changes the value of the src (source) attribute of an {'<img>'} tag:
                  </p></li>
                  <HashLink to={'https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_lightbulb'}>The Light Bulb program</HashLink>

                  




              </ul>
              <p>For more details about the JavaScript you can refer this website</p>
              <HashLink classname='vvd' to={'https://www.w3schools.com/js/js_intro.asp'}>Chech here</HashLink>

            </div>
          </div>
        </div>
      </div></section>

  )
}
