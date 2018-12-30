import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = props => {
  const { isLoggedIn } = props;
  console.log("isLoggedIn:", isLoggedIn);

  let links;
  if (isLoggedIn) {
    links = <SignedInLinks />;
  } else {
    links = <SignedOutLinks />;
  }

  return (
    <nav className="nav-wrapper red darken-4 margin-bottom-50px">
      <div className="container">
        <Link to="/" className="brand-logo">
          Lambda Study App
        </Link>

        {links}
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

export default connect(mapStateToProps)(Navbar);
