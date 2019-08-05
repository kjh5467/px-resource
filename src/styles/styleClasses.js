/*
  This file contains class definitions for use with Material UI's 'withStyles' 
  method that allows for custom style overrides of the default component visuals.
*/

const styles = theme => ({
  app: {
    margin: "auto",
    maxWidth: "1150px",
    display: "flex"
  },
  content: {
    flexGrow: 1,

    paddingTop: "100px",
    paddingBottom: "30vh",
    paddingLeft: "15px",
    marginLeft: "0px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "365px"
    }
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
