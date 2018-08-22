import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  link: {
    textDecoration: "none",
    color: "White"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
const Header = ({ classes, getInputValue, SearchMovieByName }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            <NavLink to="/" className={classes.link}>
              {" "}
              illuba{" "}
            </NavLink>
          </Typography>
          <Button color="inherit">
            <NavLink to="/SearchPage" className={classes.link}>
              {" "}
              Search{" "}
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
