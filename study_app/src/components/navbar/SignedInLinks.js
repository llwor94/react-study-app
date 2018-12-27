import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Quizzes</NavLink>
      </li>
      <li>
        <NavLink to="/">Forums</NavLink>
      </li>
      <li>
        <NavLink to="/">New Quiz</NavLink>
      </li>
      <li>
        <NavLink to="/">Sign Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating indigo lighten-2">
          TH
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
