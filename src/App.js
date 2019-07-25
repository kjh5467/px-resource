import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import "./App.css";

//Components
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import NpmTable from "./components/NpmTable";
import DesignTable from "./components/DesignTable";
import Footer from "./components/Footer";
import SideNavigation from "./components/SideNavigation";

import styles from "./styles/styleClasses";
import { makeStyles, useTheme } from "@material-ui/core/styles";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Resources
            </Typography>
          </Toolbar>
          </AppBar> */}
        <SideNavigation position="sticky" />
        <main className={styles.content}>
          <div className={styles.appBarSpacer} />
          <Typography variant="h4" color="Primary" id="powerxpertblueresources">
            Power Xpert Blue Resources
          </Typography>
          <Typography variant="body1">
            Power Xpert Blue offers a number of resources for developers,
            available through{" "}
            <Link
              href={"https://www.npmjs.com/org/pxblue"}
              target="_blank"
              rel="noopener noreferrer"
            >
              NPM
            </Link>{" "}
            and{" "}
            <Link
              href="https://github.com/pxblue"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
            . These include utility packages as well as sample code/design
            pattern examples.
          </Typography>
          <Typography variant="h4" color="primary" id="npmpackages">
            NPM Packages
          </Typography>
          <Typography variant="body1">
            The following table shows the current status for PX Blue resources
            available through NPM.
          </Typography>
          <NpmTable />
          <p>
            <br />
          </p>
          <Typography variant="h4" color="primary" id="designpatternsexamples">
            Design Patterns / Examples
          </Typography>
          <Typography variant="body1">
            The following table shows the current status of the PX Blue design
            pattern code samples available from GitHub and{" "}
            <Link
              href="https://stackblitz.com/@px-blue"
              target="_blank"
              rel="noopener noreferrer"
            >
              StackBlitz
            </Link>
          </Typography>
          <DesignTable />
        </main>
        <Footer />
      </div>
    );
  }
}

export default withStyles(styles)(App);
