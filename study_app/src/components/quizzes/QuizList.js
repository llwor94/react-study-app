import React from "react";
import { FlexWrap } from "../../styled/containers";
import QuizSummary from "./QuizSummary";

const QuizList = () => {
  return (
    <FlexWrap className="quiz-list section">
      <QuizSummary />
      <QuizSummary />
      <QuizSummary />
      <QuizSummary />
    </FlexWrap>
  );
};

export default QuizList;
