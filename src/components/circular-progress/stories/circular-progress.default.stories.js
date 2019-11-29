import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Button from "dry/components/button";
import CircularProgress from "dry/components/circular-progress";

export default {
  title: "Library|CircularProgress/Default",
};

const useStyles = makeStyles({
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
});

export const primary = () => <CircularProgress />;

export const secondary = () => <CircularProgress color="secondary" />;

export const withButton = () => {
  const classes = useStyles();

  return (
    <Button
      disabled
      variant="contained"
      color="primary"
    >
      Saving ...
      <CircularProgress
        size={24}
        className={classes.buttonProgress}
      />
    </Button>
  );
};
