import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, CssBaseline, Fade } from "@material-ui/core";
import background_image from "./assets/images/backgroundimage.jpg";
import { NAVBAR_INDEX } from "./store";

import NavBar from "./components/Layout/NavBar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import LandingPage from "./components/LandingPage";

const styles = theme => ({
  "@global": {
    "html,body,#root": {
      height: "100%"
    }
  },

  root: {
    overflowX: "hidden",
    width: "100%",
    height: "100%",
    background: `url(${background_image})`,
    backgroundSize: "cover"
  },
  toolbar: theme.mixins.toolbar
});

function App(props) {
  const [navBarIndex, setnavBarIndex] = useState(NAVBAR_INDEX.LANDING_PAGE);
  const { classes } = props;

  function handleCategorySelected(index) {
    setnavBarIndex(index);
  }

  function toggleSelectedTab(navBarIndex) {
    switch (navBarIndex) {
      case NAVBAR_INDEX.LANDING_PAGE:
        return <LandingPage />;
      case NAVBAR_INDEX.PROJECTS:
        return <Projects />;
      case NAVBAR_INDEX.RESUME:
        return <Resume />;
      case NAVBAR_INDEX.CONTACT:
        return <Contact />;
      default:
        return <LandingPage />;
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <NavBar
        onSelect={handleCategorySelected}
        index={navBarIndex}
        onTitleSelected={() =>
          handleCategorySelected(NAVBAR_INDEX.LANDING_PAGE)
        }
      />

      <div className={classes.toolbar} />

      <Fade in timeout={750}>
        {toggleSelectedTab(navBarIndex)}
      </Fade>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
