import React, { Component } from "react";
import QuizList from "../quizzes/QuizList";
import { connect } from "react-redux";
import { getQuizzes } from "../../store/actions/quizAction";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getQuizzes();
  }

  render() {
    const { quizzes } = this.props;
    console.log(this.props.quizzes);

    return (
      <div className="dashboard container">
        <h3>Quizzes</h3>
        <QuizList quizzes={quizzes} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quizzes: state.quiz.quizzes
  };
};

export default connect(
  mapStateToProps,
  { getQuizzes }
)(Dashboard);
