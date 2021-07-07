import React from "react";
import { DivWrap } from "../../styled/containers";

const QuizSummary = ({ quiz }) => {
  return (
    <DivWrap className="card quiz-summary">
      <div className="card-content grey-text text-darken-3">
        <h3 className="card-title">{quiz.title}</h3>
        <h4>{quiz.topic}</h4>
        <p>Author: {quiz.author}</p>
      </div>
    </DivWrap>
  );
};

export default QuizSummary;
