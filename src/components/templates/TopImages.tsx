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
    width: "60vw",
  },
  topImgRight: {
    position: "absolute",
    top: "0px",
    right: "0px",
    zIndex: 2,
    objectFit: "cover",
    height: "100vh",
    width: "60vw",
  },
}));

const TopImages: React.FC = () => {
  const classes = useStyles();

  return (
    <article className={classes.topImgArea}>
      <img
        src="/img/zhipeng-ya-Eaa2QUqnz3M-unsplash.jpg"
        className={classes.topImgLeft}
      />
      <img
        src="/img/martijn-baudoin-c_uHShdMI4Q-unsplash.jpg"
        className={classes.topImgRight}
      />
    </article>
  );
};
export default TopImages;
