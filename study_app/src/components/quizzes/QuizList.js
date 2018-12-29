import React from "react";
import { FlexWrap } from "../../styled/containers";
import QuizSummary from "./QuizSummary";

const QuizList = ({ quizzes }) => {
  return (
    <FlexWrap className="quiz-list section">
      {quizzes &&
        quizzes.map(quiz => <QuizSummary quiz={quiz} key={quiz.id} />)}
    </FlexWrap>
  );
};

export default QuizList;
