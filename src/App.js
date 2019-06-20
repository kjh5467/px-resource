import React from "react";
import "./App.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import NpmTable from "./components/NpmTable";
import DesignTable from "./components/DesignTable";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="Inherit">
            Resources
          </Typography>
        </Toolbar>
      </AppBar>
      <h1 id="powerxpertblueresources">Power Xpert Blue Resources</h1>
      <p>
        Power Xpert Blue offers a number of resources for developers, available
        through{" "}
        <a
          href="https://www.npmjs.com/org/pxblue"
          target="_blank"
          rel="noopener noreferrer"
        >
          NPM
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/pxblue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        . These include utility packages as well as sample code/design pattern
        examples.
      </p>
      <h2 id="npmpackages">NPM Packages</h2>
      <p>
        The following table shows the current status for PX Blue resources
        available through NPM.
      </p>
      <NpmTable />
      <p>
        <br />
      </p>
      <h2 id="designpatternsexamples">Design Patterns / Examples</h2>
      <p>
        The following table shows the current status of the PX Blue design
        pattern code samples available from GitHub and{" "}
        <a
          href="https://stackblitz.com/@px-blue"
          target="_blank"
          rel="noopener noreferrer"
        >
          StackBlitz
        </a>
        .
      </p>
      <DesignTable />
    </div>
  );
}

export default App;
