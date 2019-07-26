/*
  This file contains class definitions for use with Material UI's 'withStyles' 
  method that allows for custom style overrides of the default component visuals.
*/
import React from "react";
import { fontSize, fontWeight } from "@material-ui/system";

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
    paddingTop: "100px"
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
  // these must be defined, even if empty so we can reference them in other nested rules
  listIcon: {},
  open: {}
});
export default styles;
