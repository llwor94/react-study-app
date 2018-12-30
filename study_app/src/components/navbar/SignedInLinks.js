import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logOut } from "../../store/actions/authAction";

const SignedInLinks = props => {
  const { logOut } = props;

  return (
    <ul className="right">
      <li>
        <NavLink to="/create-quiz">New Quiz</NavLink>
      </li>
      <li>
        <NavLink to="/">Forums</NavLink>
      </li>
      <li>
        <NavLink to="/signin" onClick={logOut}>
          Sign Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating indigo lighten-2">
          TH
        </NavLink>
      </li>
    </ul>
  );
};

export default connect(
  null,
  { logOut }
)(SignedInLinks);
