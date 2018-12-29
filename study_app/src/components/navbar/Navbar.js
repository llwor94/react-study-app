import React from "react";
import { Link } from "react-router-dom";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-4 margin-bottom-50px">
      <div className="container">
        <Link to="/" className="brand-logo">
          Lambda Study App
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
