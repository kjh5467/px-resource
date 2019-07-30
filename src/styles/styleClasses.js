/*
  This file contains class definitions for use with Material UI's 'withStyles' 
  method that allows for custom style overrides of the default component visuals.
*/
import React from "react";
import { fontSize, fontWeight, borderRight } from "@material-ui/system";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
    paddingTop: "100px",
    paddingBottom: "30vh"
  },
  navContainer: {
    height: "100%",
    maxWidth: "90%",
    borderRight: "1px solid rgba(0, 0, 0, 0.12)"
  },
  listContainer: {
    flexGrow: 1,
    overflowY: "auto",
    overflowX: "hidden",
    marginLeft: "64px",
    paddingTop: "8px",
    paddingBottom: "8px"
  },
  powerxpertblueresources: {
    marginBlockStart: ".67em",
    marginBlockEnd: ".67em",
    fontSize: "2rem",
    fontWeight: "500"
  },
  body: {
    marginBlockStart: "1em",
    marginBlockEnd: "1em"
  },
  h2: {
    fontWeight: "500",
    fontSize: "1.5em",
    marginBlockStart: ".83em",
    marginBlockEnd: ".83em"
  },
  eatonGrey: {
    height: "50",
    width: "auto"
  },
  sidebarFooter: {
    flex: "0 0 auto",
    display: "flex",
    padding: "15px",
    background: "#eef0f0",
    alignItems: "center",
    justifyContent: "center"
  },
  xpertBlue: {
    alignItems: "center",
    position: "relative",
    display: "flex",
    paddingLeft: "24px",
    paddingRight: "24px"
  },
  // these must be defined, even if empty so we can reference them in other nested rules
  listIcon: {},
  open: {}
});
export default styles;
