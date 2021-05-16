import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import HomeIcon from "@material-ui/icons/Home";
import DescriptionIcon from "@material-ui/icons/Description";
import AppBarLink from "components/molecules/AppBarLink";

library.add(faTwitter, faGithub, faInstagram);

const twitterIcon = <FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />;
const githubIcon = <FontAwesomeIcon icon={["fab", "github"]} size="lg" />;
const instagramIcon = <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />;

const useStyles = makeStyles({
  appBarRoot: {
    height: "10%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    color: "#424242",
  },
  appBarGrid: {
    height: "100%",
    alignItems: "center",
    marginTop: 0,
    marginRight: "1vw",
  },
  appBarGridItems: {
    height: "100%",
  },
  appBarTitle: {
    height: "100%",
    paddingLeft: "2vw",
    marginLeft: "1vw",
  },
  appBarList: {
    height: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 0,
    color: "#424242",
  },
  appBarExternalLink: {
    paddingLeft: "0px",
    paddingRight: "4px",
  },
});

const ApplicationBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBarRoot}>
      <Grid container spacing={3} className={classes.appBarGrid}>
        <Grid item xs={6}>
          <Typography variant="h6" noWrap className={classes.appBarTitle}>
            YMNS
          </Typography>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={2} className={classes.appBarGridItems}>
          <List aria-label="page links" className={classes.appBarList}>
            <ListItem>
              <AppBarLink title="Home" path="/">
                <HomeIcon fontSize="large" />
              </AppBarLink>
            </ListItem>
            <ListItem>
              <AppBarLink title="Blog" path="/blog">
                <DescriptionIcon fontSize="large" />
              </AppBarLink>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={1}>
          <List aria-label="external links" className={classes.appBarList}>
            <ListItem className={classes.appBarExternalLink}>
              {twitterIcon}
            </ListItem>
            <ListItem className={classes.appBarExternalLink}>
              {instagramIcon}
            </ListItem>
            <ListItem className={classes.appBarExternalLink}>
              {githubIcon}
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default ApplicationBar;
