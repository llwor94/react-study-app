import React, { Component } from "react";
import QuizList from "../quizzes/QuizList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getQuizzes } from "../../store/actions/quizAction";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getQuizzes();
  }

  render() {
    const { quizzes, isLoggedIn } = this.props;

    if (!isLoggedIn) return <Redirect to="/signin" />;
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
    isLoggedIn: state.auth.isLoggedIn,
    quizzes: state.quiz.quizzes
  };
};

export default connect(
  mapStateToProps,
  { getQuizzes }
)(Dashboard);
