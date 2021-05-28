import React, { useState } from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Link, Router } from "@reach/router";
import ApplicationBar from "components/ApplicationBar";
import TopImages from "components/templates/TopImages";
import TopImagesSm from "components/templates/TopImagesSm";
import Dynamic from "containers/Dynamic";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";

const useStyles = makeStyles({
  content: {
    marginTop: "0vh",
  },
  firstContent: {
    height: "100vh",
  },
  secondContent: {
    height: "100vh",
  },

  firstContentSm: {
    height: "75vh",
  },
  secondContentSm: {
    height: "75vh",
  },
  bottomNavigation: {
    width: "100vw",
    position: "fixed",
    bottom: "0",
    left: "0",
    boxShadow: "0 2px 2px 3px #bbb",
  },
});

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const isPhoneSize = useMediaQuery(theme.breakpoints.up("sm"));
  const [value, setValue] = useState(0);

  return (
    <Root>
      {isPhoneSize && (
        <div>
          <ApplicationBar></ApplicationBar>
          <div className={classes.content}>
            <div className={classes.firstContent}>
              <TopImages />
            </div>
            <div className={classes.secondContent}>
              <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                  <Dynamic path="dynamic" />
                  <Routes path="*" />
                </Router>
              </React.Suspense>
            </div>
          </div>
        </div>
      )}
      {!isPhoneSize && (
        <div>
          <div className={classes.content}>
            <div className={classes.firstContentSm}>
              <TopImagesSm />
            </div>
            <div className={classes.secondContentSm}>
              <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                  <Dynamic path="dynamic" />
                  <Routes path="*" />
                </Router>
              </React.Suspense>
            </div>
          </div>
          <BottomNavigation
            value={value}
            onChange={(_event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.bottomNavigation}
          >
            <BottomNavigationAction
              label="Home"
              icon={<HomeIcon />}
              component={Link}
              to="/"
            />
            <BottomNavigationAction
              label="Blog"
              icon={<DescriptionIcon />}
              component={Link}
              to="/blog"
            />
          </BottomNavigation>
        </div>
      )}
    </Root>
  );
}

export default App;
