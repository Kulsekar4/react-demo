import React from "react";

// Stateless Functional Component
const NavBar = ({totalCounters,sec}) => {
  return (
    <nav className="navbar navbar-light bg-light">
     <a className="navbar-brand" href="/">
   Working cart {sec} {" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;