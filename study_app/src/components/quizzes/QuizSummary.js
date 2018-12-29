import React from "react";
import { DivWrap } from "../../styled/containers";

const QuizSummary = ({ quiz }) => {
  return (
    <DivWrap className="card quiz-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{quiz.title}</span>
        <p>Topic: {quiz.topic}</p>
      </div>
    </DivWrap>
  );
};

export default QuizSummary;
