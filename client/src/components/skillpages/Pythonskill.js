import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Pythonskill() {
  return (
    <section className="skill" id="skills" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <ul>
                <span>


                  <li>
                    <h5>
                      What is Python and why it is used?</h5>
                    <p>

                      Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis. Python is a general-purpose language, meaning it can be used to create a variety of different programs and isn't specialized for any specific problems
                    </p>
                  </li>
                  <li>
                    <h5>Python Basic Syntax</h5>
                    <p>
                      There is no use of curly braces or semicolon in Python programming language. It is English-like language. But Python uses the indentation to define a block of code. Indentation is nothing but adding whitespace before the statement when it is needed. For example -
                      <code>
                        <br></br> def func():  <br></br>
                        statement 1  <br></br>
                        statement 2  <br></br>
                        …………………  <br></br>
                        …………………  <br></br>
                        statement N
                      </code>
                    </p>
                  </li>
                  <h5>Python Comments</h5>
                  <li>
                    Comments can be used to explain Python code.
                  </li>
                  <li>
                    Comments can be used to make the code more readable.
                  </li>
                  <li>
                    Comments can be used to prevent execution when testing code.
                  </li>
                  <h5>Creating a Comment</h5>
                  <li>
                    Comments starts with a #, and Python will ignore them:
                  </li>
                  <p>Example</p>
                  <code>
                    #This is a comment<br></br>
                    print("Hello, World!")

                  </code><br></br><br></br>
                  <h5>Python Variables</h5>
                  <li>
                    Python has no command for declaring a variable.<br></br>

                    A variable is created the moment you first assign a value to it.<br></br>

                  </li>
                  <p>Example</p>
                  <code>
                    x = 5<br></br>
                    y = "John"<br></br>
                    print(x)<br></br>
                    print(y)<br></br>
                  </code><br></br>
                  <h5>Coding</h5>
                  <li>
                  If you want to specify the data type of a variable, this can be done with casting.
                  </li><br></br>
                  <code>
                  x = str(3)    # x will be '3'<br></br>
y = int(3)    # y will be 3<br></br>
z = float(3)  # z will be 3.0<br></br>

                  </code><br>
                  </br>
                  <h5>Python Data Types</h5>
                  <li>
                    <h5>Built-in Data Types</h5>
                    <li>In programming, data type is an important concept.</li>
<li>Variables can store data of different types, and different types can do different things.</li>
  <li>Python has the following data types built-in by default, in these categories:
    </li>      
            </li>
            <ol>
              <li>
              Text Type:	str
              </li>
              <li>
              Numeric Types:	int, float, complex

              </li>
              <li>
              Sequence Types:	list, tuple, range
              </li>
              <li>
              Mapping Type:	dict
              </li>
              <li>
              Set Types:	set, frozenset
              </li>
              <li>
              Boolean Type:	bool
              </li>
              <li>
              Binary Types:	bytes, bytearray, memoryview
              </li>
              <li>
              None Type:	NoneType
              </li>
            </ol>
                </span>
              </ul>
              <p>For more details about python</p><HashLink to='https://www.w3schools.com/python/default.asp'>click here</HashLink>

            </div></div></div></div></section>

  )
}
