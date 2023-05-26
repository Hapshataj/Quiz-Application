import React from 'react'
import "../quizpages/Java.css"
import { Col } from 'react-bootstrap';
import { Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/h1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from 'react';


export default function Python() {
  const [username, setUsername] = useState('')
	const questions = [
		{
			questionText: 'Number of primitive data types in Java are?',
			answerOptions: [
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '8', isCorrect: true },
				{ answerText: '9', isCorrect: false },
			],
		},
		{
			questionText: 'What is the size of float and double in java?',
			answerOptions: [
				{ answerText: '32 and 32', isCorrect: false },
				{ answerText: '32 and 64', isCorrect: true },
				{ answerText: '64 and 32', isCorrect: false },
				{ answerText: '64 and 64', isCorrect: false },
			],
		},
		{
			questionText: 'Automatic type conversion is possible in which of the possible cases?',
			answerOptions: [
				{ answerText: 'Byte to int', isCorrect: false },
				{ answerText: 'int to long', isCorrect: true },
				{ answerText: 'long to int', isCorrect: false },
				{ answerText: 'Short to int', isCorrect: false },
			],
		},
		{
			questionText: 'Who invented Java Programming?',
			answerOptions: [
				{ answerText: ' James Gosling', isCorrect: true },
				{ answerText: ' Dennis Ritchie', isCorrect: false },
				{ answerText: 'Bjarne Stroustrup', isCorrect: false },
				{ answerText: 'Guido van Rossum', isCorrect: false },
			],
		},
		{
			questionText: ' Which component is used to compile, debug and execute the java programs',
			answerOptions: [
				{ answerText: ' JRE', isCorrect: false },
				{ answerText: ' JIT', isCorrect: false },
				{ answerText: 'JDK', isCorrect: true },
				{ answerText: 'JVM', isCorrect: false },
			],
		},
		{
			questionText: 'Which one of the following is not a Java feature?',
			answerOptions: [
				{ answerText: ' Object-oriented', isCorrect: false },
				{ answerText: ' Use of pointers', isCorrect: true },
				{ answerText: 'Portable', isCorrect: false },
				{ answerText: 'Dynamic and Extensible', isCorrect: false },
			],
		},
		{
			questionText: 'What is the extension of java code files?',
			answerOptions: [
				{ answerText: ' .java', isCorrect: true },
				{ answerText: '  .txt', isCorrect: false },
				{ answerText: 'class', isCorrect: false },
				{ answerText: '.js', isCorrect: false },
			],
		},
		{
			questionText: ' Which environment variable is used to set the java path?',
			answerOptions: [
				{ answerText: '  MAVEN_Path', isCorrect: false },
				{ answerText: ' JavaPATH', isCorrect: false },
				{ answerText: ' JAVA', isCorrect:false },
				{ answerText: 'JAVA_HOME', isCorrect:true },
			],
		},
		{
			questionText: 'Which of the following is not an OOPS concept in Java?',
			answerOptions: [
				{ answerText: '  Polymorphism', isCorrect: false },
				{ answerText: ' Dennis Ritchie', isCorrect: false },
				{ answerText: 'Compilation', isCorrect: true },
				{ answerText: 'Encapsulation', isCorrect: false },
			],
		},
		{
			questionText: 'What is not the use of “this” keyword in Java?',
			answerOptions: [
				{ answerText: ' Referring to the instance variable when a local variable has the same name', isCorrect:false },
				{ answerText: 'Passing itself to the method of the same class', isCorrect:true },
				{ answerText: 'Passing itself to another method', isCorrect: false },
				{ answerText: 'Calling another constructor in constructor chaining', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is a type of polymorphism in Java Programming?',
			answerOptions: [
				{ answerText: ' Execution time polymorphism', isCorrect: false },
				{ answerText: ' Multilevel polymorphism', isCorrect: false },
				{ answerText: 'Multiple polymorphism', isCorrect: true },
				{ answerText: 'Guido van Rossum', isCorrect: false },
			],
		},
		{
			questionText: ' What is Truncation in Java?',
			answerOptions: [
				{ answerText: ' Floating-point value assigned to an integer type', isCorrect: true },
				{ answerText: ' Floating-point value assigned to a Floating type', isCorrect: false },
				{ answerText: ' Integer value assigned to floating type', isCorrect: false },
				{ answerText: 'Integer value assigned to floating type', isCorrect: false },
			],
		},
		{
			questionText: 'Which exception is thrown when java is out of memory?',
			answerOptions: [
				{ answerText: ' MemoryOutOfBoundsException', isCorrect:false},
				{ answerText: '  MemoryError', isCorrect: true },
				{ answerText: 'OutOfMemoryError', isCorrect: false },
				{ answerText: 'MemoryFullException', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these are selection statements in Java?',
			answerOptions: [
				{ answerText: ' continue', isCorrect: false },
				{ answerText: 'if()', isCorrect: false },
				{ answerText: ' break', isCorrect: false },
				{ answerText: 'for()', isCorrect: true },
			],
		},
		{
			questionText: ' Which of these keywords is used to define interfaces in Java?',
			answerOptions: [
				{ answerText: ' interface', isCorrect: true },
				{ answerText: ' intf', isCorrect: false },
				{ answerText: 'intfac', isCorrect: false },
				{ answerText: 'void', isCorrect: false },
			],
		},

	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			alert("The test is over....Click Submit")
		}
	};
	const handleSubmit = (e) => {

		setShowScore(true);
	}
  return (
    <>

    <div className='app'>

      {showScore ? (
        <div className='score-section'>


          You scored {score} out of {questions.length}
          <div style={{
            marginTop: '150px', alignItems: 'center', marginLeft: '-170px'

          }} >
            <button type="submit" className="rebtn" onClick={() => window.location.href = '/Java'}>Try again</button>
          </div>

        </div>



      ) : (

        <div class="container">
          <Col size={12} sm={6} className="px-1">
            <input type="text" name='username' className='txt' placeholder="Enter the name" onChange={(e) => { setUsername(e.target.value) }} />
          </Col>

          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}
              </span>/{questions.length}

            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button className='jbtn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>


            ))}
          </div>
          <button type="submit" className="subbtn" onClick={handleSubmit}>submit</button>
		  <TrackVisibility>
		{({ isVisible }) =>
		  <img style={{marginLeft:'750px', width:"auto",height:'400px',marginTop:'-900px',marginRight:'-100px'}}className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
		}
	  </TrackVisibility>
        </div>
      )}
    </div>
  </>
  )
}
