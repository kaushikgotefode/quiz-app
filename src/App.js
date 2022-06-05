import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import QuestionComponent from './questionComponent';
export default function App() {
  const [questions, setQuestions] = useState([]);
  const [submitedQuestions, setSubmitedQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  useEffect(() => {
    (async function () {
      const data = await axios.get(
        'https://opentdb.com/api.php?amount=40&difficulty=easy&type=multiple'
      );
      setQuestions(data.data.results);
    })();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      getRandomQuestion();
    }
  }, [questions]);

  const getRandomQuestion = () => {
    setQuestion(questions[Math.ceil(Math.random() * questions.length)]);
  };

  const updateSubmitedAnswers = (que) => {
    setSubmitedQuestions([...submitedQuestions, que]);
  };

  return (
    <div>
      <QuestionComponent
        question={question}
        saveAns={updateSubmitedAnswers}
        nextQuestion={getRandomQuestion}
      />
    </div>
  );
}
