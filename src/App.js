import React, { useState, useEffect } from 'react';
import './App.css';
import img4 from "./Images/img4.jpg";
import Footer from './footer';

function App() {
  const [page, setPage] = useState(1);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(300);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    if (timerOn && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (timer === 0) {
      setPage(3);
    }
  }, [timer, timerOn]);

  const handleStartQuiz = () => {
    setPage(2);
    setTimerOn(true);
  };

  const handleAnswerSelect = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    setPage(3);
    setTimerOn(false);
  };

  const renderPage1 = () => (
    <>
      <div className="image-container">
        
        <img src={img4} alt='' />
      </div>
      <div className="container1">
        <h1>Welcome to the Quiz App</h1>
        <button onClick={handleStartQuiz} className="submit-button">Start Quiz</button>
      </div>
      <div className='footer'>
       <Footer />
    </div>
    </>

  );

  const renderPage2 = () => (
    <>
    <div className="container2">
      <center> <h2>Quiz Page</h2></center>

      <p className="timer">Time Left: {Math.floor(timer / 60)}:{timer % 60 < 10 ? `0${timer % 60}` : timer % 60}</p>
      <div className="question">
        <strong>
          <p>Question 1: What is 2+2?</p>
        </strong>

        <ul className="options">
          <li className="option">
            <input type="radio" id="q1a" name="q1" value="a" onChange={() => handleAnswerSelect(0, 'a')} />
            <label htmlFor="q1a">a) 1</label>
          </li>
          <li className="option">
            <input type="radio" id="q1b" name="q1" value="b" onChange={() => handleAnswerSelect(0, 'b')} />
            <label htmlFor="q1b">b) 2</label>
          </li>
          <li className="option">
            <input type="radio" id="q1c" name="q1" value="c" onChange={() => handleAnswerSelect(0, 'c')} />
            <label htmlFor="q1c">c) 4</label>
          </li>
          <li className="option">
            <input type="radio" id="q1d" name="q1" value="d" onChange={() => handleAnswerSelect(0, 'd')} />
            <label htmlFor="q1d">d) 5</label>
          </li>
        </ul>
      </div>
      <div className="question">
        <strong><p>Question 2: Who is the current Prime Minister of India?</p></strong>

        <ul className="options">
          <li className="option">
            <input type="radio" id="q2a" name="q2" value="a" onChange={() => handleAnswerSelect(1, 'a')} />
            <label htmlFor="q2a">a) Mr. Narendra Modi</label>
          </li>
          <li className="option">
            <input type="radio" id="q2b" name="q2" value="b" onChange={() => handleAnswerSelect(1, 'b')} />
            <label htmlFor="q2b">b) Yogi Adityanath</label>
          </li>
          <li className="option">
            <input type="radio" id="q2c" name="q2" value="c" onChange={() => handleAnswerSelect(1, 'c')} />
            <label htmlFor="q2c">c) Rahul Gandhi</label>
          </li>
          <li className="option">
            <input type="radio" id="q2d" name="q2" value="d" onChange={() => handleAnswerSelect(1, 'd')} />
            <label htmlFor="q2d">d) Dr. Manmohan Singh</label>
          </li>
        </ul>
      </div>
      <div className="question">
        <strong><p>Question 3: What is 5*5?</p></strong>

        <ul className="options">
          <li className="option">
            <input type="radio" id="q3a" name="q3" value="a" onChange={() => handleAnswerSelect(2, 'a')} />
            <label htmlFor="q2a">a) 10</label>
          </li>
          <li className="option">
            <input type="radio" id="q3b" name="q3" value="b" onChange={() => handleAnswerSelect(2, 'b')} />
            <label htmlFor="q2b">b) 20</label>
          </li>
          <li className="option">
            <input type="radio" id="q3c" name="q3" value="c" onChange={() => handleAnswerSelect(2, 'c')} />
            <label htmlFor="q2c">c) 34</label>
          </li>
          <li className="option">
            <input type="radio" id="q3d" name="q3" value="d" onChange={() => handleAnswerSelect(2, 'd')} />
            <label htmlFor="q2d">d) 25</label>
          </li>
        </ul>
      </div>
      <div className="question">
        <strong>
          <p>Question 4: What is URL?</p>
        </strong>

        <ul className="options">
          <li className="option">
            <input type="radio" id="q4a" name="q4" value="a" onChange={() => handleAnswerSelect(3, 'a')} />
            <label htmlFor="q2a">a) Uniform Resource Locator</label>
          </li>
          <li className="option">
            <input type="radio" id="q4b" name="q4" value="b" onChange={() => handleAnswerSelect(3, 'b')} />
            <label htmlFor="q2b">b) Unified Resource Location</label>
          </li>
          <li className="option">
            <input type="radio" id="q4c" name="q4" value="c" onChange={() => handleAnswerSelect(3, 'c')} />
            <label htmlFor="q2c">c) Unity Resource Location</label>
          </li>
          <li className="option">
            <input type="radio" id="q4d" name="q4" value="d" onChange={() => handleAnswerSelect(3, 'd')} />
            <label htmlFor="q2d">d) Unified Resource Locator</label>
          </li>
        </ul>
      </div>
      <div className="question">
        <strong><p>Question 5: What is the capital of India?</p></strong>

        <ul className="options">
          <li className="option">
            <input type="radio" id="q5a" name="q5" value="a" onChange={() => handleAnswerSelect(4, 'a')} />
            <label htmlFor="q2a">a) New Delhi</label>
          </li>
          <li className="option">
            <input type="radio" id="q5b" name="q5" value="b" onChange={() => handleAnswerSelect(4, 'b')} />
            <label htmlFor="q2b">b) Uttar Pradesh</label>
          </li>
          <li className="option">
            <input type="radio" id="q5c" name="q5" value="c" onChange={() => handleAnswerSelect(4, 'c')} />
            <label htmlFor="q2c">c) Lucknow</label>
          </li>
          <li className="option">
            <input type="radio" id="q5d" name="q5" value="d" onChange={() => handleAnswerSelect(4, 'd')} />
            <label htmlFor="q2d">d) Goa</label>
          </li>
        </ul>
      </div>

      <button onClick={handleSubmitQuiz} className="submit-button">Submit Quiz</button>
    </div>
    <div className='footer2'>
       <Footer />
    </div>
    
    </>
  );
  const renderPage3 = () => (
    <>

   
    <div className="container">
      <div className="congrats-message">
        <h2>Congratulations!</h2>
      </div>
      <div className="quiz-summary">
        <center><strong> <p>You have successfully completed the quiz.</p></strong>

          <p>Time taken: {300 - timer} seconds</p></center>

      </div>
      <center>
        <div className="answers-section">
          <p>Your answers:</p>
          <ul className="answers-list">
            {answers.map((answer, index) => (
              <li key={index}>Question {index + 1}: {answer}</li>
            ))}
          </ul>
        </div>
      </center>

    </div>
   
    <div className='footer3'>
       <Footer />
    </div>
    </>
  );


  return (
    <div className="App">
      {page === 1 && renderPage1()}
      {page === 2 && renderPage2()}
      {page === 3 && renderPage3()}
    </div>
  );
}

export default App;
