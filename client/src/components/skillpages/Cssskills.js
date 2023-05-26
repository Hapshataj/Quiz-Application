import React from 'react'
import colorSharp from "../../assets/img/color-sharp.png"


import { HashLink } from 'react-router-hash-link';

export default function Cssskills() {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" >
              <ul>
                <span>
                  <li>
                    <h5>What is Css?</h5>

                    CSS stands for Cascading Style Sheets.<br />
                    CSS describes how HTML elements are to be displayed on screen, paper, or in other media.<br />
                    CSS saves a lot of work. It can control the layout of multiple web pages all at once<br />
                    External stylesheets are stored in CSS files.<br />
                  </li><br />
                  <li>
                    <h5>Why USe css</h5>
                    CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.
                    <HashLink to="https://www.w3schools.com/css/tryit.asp?filename=trycss_intro">Example</HashLink>
                  </li><br />
                  <li>
                    <h5>
                      CSS Backgrounds
                    </h5>
                    The CSS background properties are used to add background effects for elements.
                    CSS background properties:
                    <code>
                      <ol>
                        <li>
                          background-color
                        </li>
                        <li>
                          background-image
                        </li>
                        <li>
                          background-repeat
                        </li>
                        <li>
                          background-attachment
                        </li>
                        <li>
                          background-position
                        </li>
                        <li>
                          background (shorthand property)
                        </li>
                      </ol>
                    </code>
                  </li><br />
                  <li>
                    <h5>
                      CSS Margins
                    </h5>
                    The CSS margin properties are used to create space around elements, outside of any defined borders.<br /><br />

                    With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left)
<br/><HashLink to={'https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_sides'}>Example</HashLink>
                  </li><br/>
                  <li>
                    <h5>
                    CSS Padding
                    </h5>
                    Padding is used to create space around an element's content, inside of any defined borders.<br/>
                    <HashLink to={'https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_intro'}>Example</HashLink><br/>
                  <br/>
                  The CSS padding properties are used to generate space around an element's content, inside of any defined borders.<br/>

With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left
                  
                  
                  </li><br></br>
                  <li>
                    <h5>
                    CSS Box Model
                    </h5>
                    In CSS, the term "box model" is used when talking about design and layout.<br/>

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:<br/>
               <HashLink to={'https://www.w3schools.com/css/tryit.asp?filename=trycss_boxmodel'}>Example</HashLink>
                 
                 
                  </li>
                  <br/>
                  <li>
                    <h5>
                    CSS Layout - The z-index Property
                    </h5>
                    The <i>z-index</i> property specifies the stack order of an element.
                    <br/>
                    When elements are positioned, they can overlap other elements.
<br/>
The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).
<br/>
An element can have a positive or negative stack order:<br/>
                <HashLink to={'https://www.w3schools.com/css/tryit.asp?filename=trycss_zindex'}>Example</HashLink>  </li>
              <br/>  For More Details refer this website<HashLink to={'https://www.w3schools.com/css/default.asp'}>Click here</HashLink>
                  




                </span>
              </ul>
            </div></div></div></div>
      <img className="background-image-left" src={colorSharp} alt="Image" /></section>
  )
}
