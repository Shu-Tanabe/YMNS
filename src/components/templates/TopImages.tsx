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
    height: "100vh",
    width: "55vw",
  },
  topImgRight: {
    position: "absolute",
    top: "0px",
    right: "0px",
    zIndex: 2,
    objectFit: "cover",
    height: "100vh",
    width: "55vw",
    clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  topTitleBox: {
    position: "absolute",
    marginTop: "-145px",
    marginLeft: "-237px",
    top: "50%",
    left: "50%",
    zIndex: 3,
    height: "290px",
    width: "474px",
    borderStyle: "none",
    boxShadow: "0 0 2px rgba(0, 10, 25, 0, .5)",
  },
}));

const TopImages: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.topImgArea}>
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
    </div>
  );
};
export default TopImages;
