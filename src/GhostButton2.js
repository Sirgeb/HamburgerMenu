import React from "react";
import { GhostButton } from "react-hamburger-menus";
import "./styles.css";

const GhostButton2 = () => {
  return (
    <div className="App">
      <GhostButton
        styles={{
          floatButtonY: 40,
          floatButtonX: 30,
          navigationCard: {
            backgroundColor: "pink"
            // width: '160px'
          },
          navigationButton: {
            borderRadius: "10px",
            border: "2px solid pink",
            // In case you need static not fixed
            // position: "static",
            width: "40px",
            height: "40px",
            backgroundColor: "pink",
            zIndex: 10
          },
          navigationIcon: {
            zIndex: 10
          },
          iconColor: "#fff",
        }}
        sticky
      >
        <ul
          style={{
            fontFamily: 'font-family: "Lato", sans-serif',
            color: "#fff"
          }}
        >
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>ELEMENTS</li>
          <li>CONTACT</li>
          <button
            style={{
              width: "89px",
              margin: "5px auto",
              border: "none",
              backgroundColor: "#FF4A6F",
              color: "#fff"
            }}
          >
            Login
          </button>
          <button
            style={{
              width: "89px",
              margin: "5px auto",
              border: "none",
              backgroundColor: "#fff",
              color: "#FF4A6F"
            }}
          >
            Logout
          </button>
        </ul>
      </GhostButton>
    </div>
  );
};

export default GhostButton2;
