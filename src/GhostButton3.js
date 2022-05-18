import React from "react";
import { GhostButton } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

const GhostButtonAsDropdownLink = () => {
  return (
    <div className="App">
      <GhostButton
        icon={
          <p style={{ fontSize: "16px", borderBottom: "1px solid grey" }}>
            Calculators
          </p>
        }
        styles={{
          floatButtonY: 40,
          floatButtonX: 10,
          navigationCard: {
            backgroundColor: "#fff"
            // top: "50px"
            // width: '160px'
            // left: 0
          },
          navigationButton: {
            borderRadius: "10px",
            border: "none",
            // In case you need static not fixed
            position: "relative",
            width: "100px",
            height: "40px",
            backgroundColor: "transparent",
            zIndex: 10,
            boxShadow: "none"
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
          <li> Charging Calculator</li>
          <li> Cost Calculator</li>
          <li> Find My Ev</li>
        </ul>
      </GhostButton>
    </div>
  );
};

export default GhostButtonAsDropdownLink;
