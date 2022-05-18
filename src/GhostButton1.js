import React from "react";
import { GhostButton } from "react-hamburger-menus";
import "./styles.css";

const GhostButton1 = () => {
  return (
    <div className="App">
      <GhostButton
        styles={{
          floatButtonX: 60,
          floatButtonY: 40,
          listHoverColor: "#F6E4F4",
          navigationCard: {
            backgroundColor: "#ffff"
          },
          navigationButton: {
            borderRadius: "10px",
            border: "2px solid #F6E4F4",
            // In case you need static not fixed
            // position: "static",
            width: "90px",
            height: "40px",
            backgroundColor: "#8D0083",
            zIndex: 10
          },
          navigationIcon: {
            zIndex: 10
          },
          iconColor: "#fff"
        }}
      >
        <ul
          style={{
            fontFamily: 'font-family: "Lato", sans-serif',
            color: "black"
          }}
        >
          <button
            style={{
              width: "130px",
              margin: "5px auto",
              border: "none",
              backgroundColor: "#8D0083",
              color: "#fff",
              border: "2px solid #F6E4F4"
            }}
          >
            Sign in
          </button>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
        </ul>
      </GhostButton>
    </div>
  );
};

export default GhostButton1;
