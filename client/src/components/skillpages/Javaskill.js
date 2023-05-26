import React from 'react'
import colorSharp from "../../assets/img/color-sharp.png"
import 'react-multi-carousel/lib/styles.css';

import { HashLink } from 'react-router-hash-link';

export default function Javaskill() {
  return (
    <section className="skill" id="skills" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <ul>
                <li>
                  <h5>What is Java?</h5>
                  <br></br>
                  <p>
                    Java is a programming language and a platform. Java is a high level, robust, object-oriented and secure programming language.

                    Java was developed by Sun Microsystems (which is now the subsidiary of Oracle) in the year 1995. James Gosling is known as the father of Java. Before Java, its name was Oak. Since Oak was already a registered company, so James Gosling and his team changed the name from Oak to Java.

                    <br></br><br></br><h5>Platform:</h5> Any hardware or software environment in which a program runs, is known as a platform. Since Java has a runtime environment (JRE) and API, it is called a platform.
                  </p>

                </li>
                <li>
                  <h5>Java Example</h5>
                  <p>
                    we created a Java file called Main.java, and we used the following code to print "Hello World" to the screen:
                    <br></br>
                    <code>
                      Main.java file:
                      <br></br>

                      public class Main {'{'}
                      <br></br>public static void main(String[] args) {'{'}
                      <br></br> System.out.println("Hello World");
                      <br></br>

                      {'}'}
                      {'}'}</code><br></br>
                    <HashLink to={'https://www.w3schools.com/java/tryjava.asp?filename=demo_helloworld'}>try your self</HashLink>
                  </p>
                 </li>
                <li>
                  <span> <h5>Print Text</h5>
                    you can use the println() method to output values or print text in Java:
                    When you are working with text, it must be wrapped inside double quotations marks "".
                    <p>
                      If you forget the double quotes, an error occurs:
                    </p>
                    Example:<br></br>
                    System.out.println("This sentence will work!");
                    System.out.println(This sentence will produce an error);<br></br>
                    <HashLink to={'https://www.w3schools.com/java/tryjava.asp?filename=demo_output_quotes_err'}>Try your self</HashLink>

                  </span>

                </li>
                <li>

                  <h5>Java Variables</h5>
                  <span>
                    <p>

                      Variables are containers for storing data values.

                      In Java, there are different types of variables, for example:
                      <ol>
                        <li>String - stores text, such as "Hello". String values are surrounded by double quotes</li>
                        <li>int - stores integers (whole numbers), without decimals, such as 123 or -123</li>
                        <li>float - stores floating point numbers, with decimals, such as 19.99 or -19.99</li>
                        <li>char - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li>
                        <li>boolean - stores values with two states: true or false</li>
                      </ol><HashLink to={'https://www.w3schools.com/java/tryjava.asp?filename=demo_variables'}>Try your self</HashLink>                </p>

                  </span>
                </li>
                <li>
                  <span>
                    <h5>Java Data Types</h5>
                    <p>
                      A variable in Java must be a specified data type:
                    </p>
                    Example:
                    <p>
                      <code>
                        int myNum = 5;               // Integer (whole number)
                        float myFloatNum = 5.99f;    // Floating point number
                        char myLetter = 'D';         // Character
                        boolean myBool = true;       // Boolean
                        String myText = "Hello";     // String
                      </code>
                    </p>

                  </span>
                </li>
                <li>
                  <span>
                    <h5>Java Operators</h5>
                    <p>
                      we use the + operator to add together two values
                      <br></br>

                      Example: <br></br>
                      <code> int x = 100 + 50;</code>
                      <span>
                        <h5>Java Assignment Operators</h5>
                        <p>
                          Assignment operators are used to assign values to variables.<br></br>

                          In the example below, we use the assignment operator (=) to assign the value 10 to a variable called x:
                          <br></br> <code>
                            int x = 10;
                          </code>  </p>
                      </span>
                      <span>
                        <h5>Java Comparison Operators</h5>
                        <p>
                          Comparison operators are used to compare two values (or variables). This is important in programming, because it helps us to find answers and make decisions.<br></br>

                          The return value of a comparison is either true or false. These values are known as Boolean values, and you will learn more about them in the Booleans and If..Else chapter.

                          In the following example, we use the greater than operator {'(>)'} to find out if 5 is greater than 3:
                          <br></br> <code>
                            int x = 5;<br></br>
                            int y = 3;<br></br>
                            System.out.println{'(x > y)'}; // returns true, because 5 is higher than 3
                          </code>  </p>
                      </span>


                    </p>
                  </span>
                </li>
                <p>
                  For more knowledge refer this website<HashLink to={'https://www.w3schools.com/java/default.asp'}>w3schools</HashLink>
                </p>

              </ul>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
