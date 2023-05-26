import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import colorSharp from '../../assets/img/color-sharp.png'






import { HashLink } from 'react-router-hash-link';

export default function CHasskills() {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" >
              <ul>
                <li>
                  <h5>
                    What is C#?
                  </h5>
                  C# (C-Sharp) is a programming language developed by Microsoft that runs on the .NET Framework.<br>
                  </br>
                  C# is used to develop web apps, desktop apps, mobile apps, games and much more.<br>
                  </br>Example<br>
                  </br>
                  <code>
                    <HashLink to={"https://www.w3schools.com/cs/trycs.php?filename=demo_helloworld"}>Sample Program</HashLink>
                  </code>
                </li>
                <li>
                  <h5>C# Syntax</h5>
                  <HashLink to={"https://www.w3schools.com/cs/trycs.php?filename=demo_helloworld"}>Program</HashLink>
                  <br>
                  </br>
                  <p>Explaination:<br></br>
                    <ol>
                      <li>
                        Line 1: using System means that we can use classes from the System namespace.
                      </li>
                      <li>
                        Line 2: A blank line. C# ignores white space. However, multiple lines makes the code more readable.
                      </li>
                      <li>
                        Line 3: namespace is used to organize your code, and it is a container for classes and other namespaces.
                      </li>
                      <li>
                        Line 4: The curly braces { } marks the beginning and the end of a block of code.
                      </li>
                      <li>
                        Line 5: class is a container for data and methods, which brings functionality to your program. Every line of code that runs in C# must be inside a class. In our example, we named the class Program.
                      </li>
                      <li>
                        Line 7: Another thing that always appear in a C# program, is the Main method. Any code inside its curly brackets { } will be executed. You don't have to understand the keywords before and after Main. You will get to know them bit by bit while reading this tutorial.
                      </li>
                      <li>
                        Line 9: Console is a class of the System namespace, which has a WriteLine() method that is used to output/print text. In our example it will output "Hello World!".
                      </li>

                    </ol>
                  </p>
                </li>
                <li>
                  <h5>
                    C# Data Types
                  </h5>
                  <code>
                    int myNum = 5;               // Integer (whole number)<br></br>
                    double myDoubleNum = 5.99D;  // Floating point number<br></br>
                    char myLetter = 'D';         // Character<br></br>
                    bool myBool = true;          // Boolean<br></br>
                    string myText = "Hello";     // String<br></br>
                  </code>
                </li><br></br>
                <li>
                  <h5>
                    C# Booleans
                  </h5>
                  Very often, in programming, you will need a data type that can only have one of two values, like:
                  <ol>
                    <li>
                      YES / NO
                    </li>
                    <li>
                      ON / OFF
                    </li>
                    <li>
                      TRUE / FALSE
                    </li>
                  </ol>
                  C# has a bool data type, which can take the values true or false.<br>
                  </br>
                  <h5>Boolean Values</h5>
                  A boolean type is declared with the bool keyword and can only take the values true or false:
                  <code>
                    bool isCSharpFun = true;<br></br>
                    bool isFishTasty = false;
                    Console.WriteLine(isCSharpFun);   // Outputs True
                    Console.WriteLine(isFishTasty);   // Outputs False
                  </code>
                </li>
              </ul>
              For More Details refer this website<HashLink to={'https://www.w3schools.com/cs/index.php'}>Click here</HashLink>
              <div />
            </div></div></div></div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>

  )
}
