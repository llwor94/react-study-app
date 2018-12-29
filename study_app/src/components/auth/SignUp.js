import React, { Component } from "react";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    img_url: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input
              required
              type="text"
              id="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="img">Image Url - (Optional)</label>
            <input type="text" id="img" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn red darken-3">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
