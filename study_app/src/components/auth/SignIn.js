import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  render() {
    const { loggingIn, authErr } = this.props;

    if (loggingIn) {
      return <h1 className="center">Loading...</h1>;
    }

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
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
            <button className="btn red darken-3">Login</button>
            <div className="red-text">
              {authErr ? (
                <p>Login Failed: {authErr.response.data.message}</p>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggingIn: state.auth.loggingIn,
  authErr: state.auth.authErr
});

export default connect(
  mapStateToProps,
  { signIn }
)(SignIn);
