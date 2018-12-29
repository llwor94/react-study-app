import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import QuizDetails from "./components/quizzes/QuizDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateQuiz from "./components/quizzes/CreateQuiz";

import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/quizzes/:id" component={QuizDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create-quiz" component={CreateQuiz} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
