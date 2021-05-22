import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";
import { Router } from "@reach/router";
import ApplicationBar from "components/ApplicationBar";
import TopImages from "components/templates/TopImages";
import Dynamic from "containers/Dynamic";
import { makeStyles } from "@material-ui/core/styles";

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
});

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
  const classes = useStyles();

  return (
    <Root>
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
    </Root>
  );
}

export default App;
