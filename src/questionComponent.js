import React, { useState, useEffect } from 'react';
function QuestionComponent({ question, saveAns, nextQuestion }) {
  const [options, setOptions] = useState([]);
  const [submited_answer, setSubmited_answer] = useState(null);
  useEffect(() => {
    let opts = question?.incorrect_answers;
    opts?.splice(
      Math.ceil(Math.random() * opts.length),
      0,
      question?.correct_answer
    );
    setOptions(opts);
  }, [question]);

  const submitAnswer = () => {
    const que = question;
    console.log(submited_answer);
    que.submited_answer = setSubmited_answer;
    saveAns(que)
  };
  return (
    <div>
      <p>{question?.question}</p>
      <div>
        {options?.map((opt, i) => {
          return (
            <li style={{ listStyle: 'none' }}>
              <input
                type="radio"
                id={`opt${i}`}
                name="question"
                value={opt}
                onChange={(e) => setSubmited_answer(e.target.value)}
              />
              <label htmlFor={`opt${i}`}>{opt}</label>
            </li>
          );
        })}
      </div>
      <input type="button" value="Submit" onClick={() => submitAnswer()} />
       <input type="button" value="Next" onClick={() => nextQuestion()} />
    </div>
  );
}
export default QuestionComponent;
