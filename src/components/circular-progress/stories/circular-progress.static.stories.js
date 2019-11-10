import React from "react";
import makeStyles from "utils/makeStyles";
import CircularProgress from "components/circular-progress";

export default {
  title: "Library|CircularProgress/Static",
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export const staticPrimary = () => {
  const classes = useStyles();
  const completed = withProgress(0);

  return (
    <div className={classes.root}>
      <CircularProgress variant="static" value={25} />
      <CircularProgress variant="static" value={50} />
      <CircularProgress variant="static" value={75} />
      <CircularProgress variant="static" value={100} />
      <CircularProgress variant="static" value={completed} />
    </div>
  );
};

export const staticSecondary = () => {
  const classes = useStyles();
  const completed = withProgress(0);

  return (
    <div className={classes.root}>
      <CircularProgress variant="static" color="secondary" value={25} />
      <CircularProgress variant="static" color="secondary" value={50} />
      <CircularProgress variant="static" color="secondary" value={75} />
      <CircularProgress variant="static" color="secondary" value={100} />
      <CircularProgress variant="static" color="secondary" value={completed} />
    </div>
  );
};

function withProgress(initialValue = 0) {
  const [completed, setCompleted] = React.useState(initialValue);

  React.useEffect(() => {
    function tick() {
      setCompleted((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 25));
    }

    const timer = setInterval(tick, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return completed;
}
