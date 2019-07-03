import React, { Component } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  Drawer
} from "@material-ui/core";

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUserMenu: true,
      drawerOpen: true
    };
  }
  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  toggleNavMenu() {
    this.setState({ showUserMenu: !this.state.showUserMenu });
  }
  render() {
    return (
      <Drawer variant="permanent">
        <ListItem>
          <Link href="0" rel="nofollow">
            <ListItemText primary="What is PX Blue?" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://pxblue.github.io/overview" rel="nofollow">
            <ListItemText primary="Starting a Project" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://pxblue.github.io/overview" rel="nofollow">
            <ListItemText primary="Developing w/ PX Blue" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://pxblue.github.io/overview" rel="nofollow">
            <ListItemText primary="Design Patterns" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://pxblue.github.io/overview" rel="nofollow">
            <ListItemText primary="Style Guide" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://pxblue.github.io/overview" rel="nofollow">
            <ListItemText primary="Community" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://pxblue.github.io/overview" rel="nofollow">
            <ListItemText primary="Resources" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://pxblue.github.io/overview" rel="nofollow">
            <ListItemText primary="Release Notes" />
          </Link>
        </ListItem>
      </Drawer>
    );
  }
}

export default SideBar;
