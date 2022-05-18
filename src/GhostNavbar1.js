import React from "react";
import { GhostNavbar } from "react-hamburger-menus";

import "./styles.css";

const GhostNavbar1 = () => {
  return (
    <div className="App">
      <GhostNavbar
        styles={{
          floatButtonSize: 0.9,
          floatButtonX: 6,
          floatButtonY: 15
        }}
      >
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar>
    </div>
  );
};

export default GhostNavbar1;
