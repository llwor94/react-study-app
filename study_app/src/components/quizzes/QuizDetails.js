import React from "react";

const QuizDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section quiz-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Materialize UI - {id}</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            sunt excepturi et voluptate officia. Cupiditate soluta velit eum
            delectus minima nesciunt, ad quae excepturi praesentium natus animi,
            quam ipsa sit?
          </p>
        </div>
        <div className="card-action gret grey-text">
          <div>Posted by Tommy</div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
