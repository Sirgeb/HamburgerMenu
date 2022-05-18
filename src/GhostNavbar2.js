import React from "react";
import { GhostNavbar } from "react-hamburger-menus";

import "./styles.css";

const GhostNavbar2 = () => {
  return (
    <div className="App">
      <GhostNavbar
        styles={{
          fontColor: "#fff",
          fontHoverColor: "black",
          listHoverColor: ["transparent", "#fff"],
          floatButtonX: 87,
          floatButtonY: 15,
          navigationButton: {
            borderRadius: "5px",
            width: "50px",
            backgroundColor: "black"
          },
          navigationBackground: {
            backgroundColor: "black"
          },
          iconColor: "#fff"
        }}
      >
        <ul
          style={{
            fontFamily: 'font-family: "Lato", sans-serif'
          }}
        >
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostNavbar>
    </div>
  );
};

export default GhostNavbar2;
