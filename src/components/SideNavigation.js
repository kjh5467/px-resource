import React from "react";

import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Link
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { ReactComponent as PowerXpert } from "../media/pxblue.d5fa6462.svg";
import { ReactComponent as EatonGrey } from "../media/eatongrey.c8ce891e.svg";

const drawerWidth = 364;

//styling
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    position: "fixed"
  },
  navContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  listContainer: {
    flexGrow: "1",
    overflowY: "auto",
    overflowX: "hidden",
    marginLeft: "64px",
    paddingTop: "8px",
    paddingBottom: "8px"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
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
    width: "300px",
    height: "auto",
    marginLeft: "-5px",
    transition: "all 150ms ease-in-out"
  },
  sidebarHeader: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    paddingLeft: "24px",
    paddingRight: "24px",
    [theme.breakpoints.up("sm")]: {
      minHeight: "64px"
    }
  }
}));

export default function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const menuItem = [
    {
      title: "What is PX Blue?",
      link: "https://pxblue.github.io/overview"
    },
    {
      title: "Starting a Project",
      link: "https://pxblue.github.io/get-started/new-project"
    },
    {
      title: "Developing w/ PX Blue",
      link: "https://pxblue.github.io/development/environment"
    },
    {
      title: "Design Patterns",
      link: "https://pxblue.github.io/patterns/appbar"
    },
    {
      title: "Style Guide",
      link: "https://pxblue.github.io/style/color"
    },
    {
      title: "Community",
      link: "https://pxblue.github.io/community/license"
    },
    {
      title: "Resources",
      link: "https://pxblue.github.io/resources"
    },
    {
      title: "Release Notes",
      link: "https://pxblue.github.io/release-notes"
    }
  ];

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div className={classes.navContainer}>
      <div className={classes.sidebarHeader}>
        <Link href="https://pxblue.github.io/">
          <PowerXpert className={classes.xpertBlue} />
        </Link>
      </div>
      <Divider />
      <List className={classes.listContainer}>
        {menuItem.map((item, index) => (
          <ListItem button key={item.title}>
            <Link href={item.link}>
              <ListItemText primary={item.title} />
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className={classes.sidebarFooter}>
        <EatonGrey className={classes.eatonGrey} />
      </div>
    </div>
  );

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Resources
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
