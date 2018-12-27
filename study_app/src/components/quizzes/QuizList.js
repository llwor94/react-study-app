import React from "react";
import { DivWrap, FlexWrap } from "../../styled/containers";

const QuizList = () => {
  return (
    <FlexWrap className="quiz-list section">
      <DivWrap className="card project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Materialize UI</span>
          <p>Author: Tommy</p>
        </div>
      </DivWrap>

      <DivWrap className="card project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">ReactStrap</span>
          <p>Author: Lauren</p>
        </div>
      </DivWrap>

      <DivWrap className="card project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">Redux</span>
          <p>Author: Lidia</p>
        </div>
      </DivWrap>
    </FlexWrap>
  );
};

export default QuizList;
