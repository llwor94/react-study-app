import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addQuiz } from "../../store/actions/quizAction";

class CreateQuiz extends Component {
  state = {
    title: "",
    topic: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addQuiz(this.state);
  };

  render() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) return <Redirect to="/signin" />;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add New Quiz</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="topic">Topic</label>
            <input type="text" id="topic" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red darken-3">Add Quiz</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(
  mapStateToProps,
  { addQuiz }
)(CreateQuiz);
