import React, { ReactElement } from "react";
import { Link } from "@reach/router";

import { makeStyles } from "@material-ui/core/styles";
import { ListItemIcon } from "@material-ui/core";

const useStyles = makeStyles({
  appBarLinkWrapper: {
    height: "100%",
    textAlign: "center",
    "&:hover": {
      "& $appBarLinkEffect": {
        color: "#424242",
      },
    },
  },
  appBarLinkIcon: {
    display: "flex",
    flexFlow: "column",
  },
  appBarLinkIconCore: {
    justifyContent: "center",
  },
  appBarLinkText: {
    display: "flex",
    flexFlow: "column",
  },
  appBarLinkEffect: {
    color: "#9E9E9E",
    fontSize: "10px",
    transition: "all 0.4s ease",
  },
});

type Props = {
  children: ReactElement;
  title: string;
  path: string;
};

const AppBarLink: React.FC<Props> = ({ children, title, path }) => {
  const classes = useStyles();

  return (
    <div className={classes.appBarLinkWrapper}>
      <div className={classes.appBarLinkIcon}>
        <ListItemIcon
          className={
            classes.appBarLinkIconCore + " " + classes.appBarLinkEffect
          }
        >
          {children}
        </ListItemIcon>
      </div>
      <div className={classes.appBarLinkText}>
        <Link to={path} className={classes.appBarLinkEffect}>
          {title}
        </Link>
      </div>
    </div>
  );
};

export default AppBarLink;
