import React, { Component } from "react";
import QuizList from "../quizzes/QuizList";
import { RowDiv } from "../../styled/containers";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <h3>Quizzes</h3>
        <QuizList />
      </div>
    );
  }
}

export default Dashboard;
