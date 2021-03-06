import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  topImgArea: {
    width: "100%",
    height: "100%",
  },
  topImgLeft: {
    position: "absolute",
    top: "0px",
    left: "0px",
    zIndex: 1,
    objectFit: "cover",
    height: "75vh",
    width: "55vw",
  },
  topImgRight: {
    position: "absolute",
    top: "0px",
    right: "0px",
    zIndex: 2,
    objectFit: "cover",
    height: "75vh",
    width: "55vw",
    clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  topTitleBox: {
    position: "absolute",
    marginTop: "-12.5vh",
    marginLeft: "-20.43vh",
    top: "37vh",
    left: "50vw",
    zIndex: 3,
    height: "25vh",
    width: "40.86vh",
    borderStyle: "none",
    boxShadow: "0 0 2px rgba(0, 10, 25, 0, .5)",
    clipPath: "polygon(13% 0%, 87% 0%, 87% 100%, 13% 100%)",
  },
}));

const TopImagesSm: React.FC = () => {
  const classes = useStyles();

  return (
    <article className={classes.topImgArea}>
      <img
        src="/img/ben-kolde-cpLsWmMEa1Q-unsplash.jpg"
        className={classes.topImgLeft}
      />
      <img
        src="/img/joao-melo-ExBeumLi7G4-unsplash.jpg"
        className={classes.topImgRight}
      />
      <h1>
        <img src="/img/YMNSlogo.png" className={classes.topTitleBox} />
      </h1>
    </article>
  );
};
export default TopImagesSm;
