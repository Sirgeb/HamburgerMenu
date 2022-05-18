import React from "react";
import "react-hamburger-menus/dist/style.css";
import "./styles.css";
import { ResponsiveNavbar } from "react-hamburger-menus";

import GhostNavbar1 from "./GhostNavbar1";
import GhostNavbar2 from "./GhostNavbar2";
import GhostButton1 from "./GhostButton1";
import GhostButton2 from "./GhostButton2";
import GhostButtonAsDropdownLink from "./GhostButton3";

const App = () => {
  return (
    <div className="App">
      <h5>Note : Issue with Z-index because of multiple fixed elements</h5>
      <div style={{ margin: "0 auto", marginLeft: "40vw" }}>
        <GhostButtonAsDropdownLink />
      </div>
      <GhostNavbar1 />
      <GhostNavbar2 />
      <GhostButton1 />
      <GhostButton2 />

      <ResponsiveNavbar
        logo={<p>Logo</p>}
        styles={{
          navigation: { fontFamily: "Arial, Helvetica, sans-serif" },
          navigationBarSmall: {
            backgroundColor: "aliceblue"
          },
          navigationCardSmall: {
            backgroundColor: "aliceblue"
          },
          navigationBarLarge: {
            backgroundColor: "aliceblue"
          },
          animatinDelay: 5,
          zIndex: 100000
        }}
      >
        <ul style={{ marginRight: "10px" }}>
          <li>About</li>
          <li>Projects</li>
          <li>Elements</li>
          <li>Contact</li>
        </ul>
      </ResponsiveNavbar>
    </div>
  );
};

export default App;
