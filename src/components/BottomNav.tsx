import React, { useState } from "react";

import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "@reach/router";

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

const BottomNav: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
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
  );
};

export default BottomNav;
