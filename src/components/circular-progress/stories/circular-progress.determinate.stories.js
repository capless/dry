import React from "react";
import CircularProgress from "dry/components/circular-progress";

export default {
  title: "Library|CircularProgress/Determinate",
};

export const determinatePrimary = () => {
  const progress = withProgress(0);

  return (
    <CircularProgress
      variant="determinate"
      value={progress}
    />
  );
};

export const determinateSecondary = () => {
  const progress = withProgress(0);

  return (
    <CircularProgress
      variant="determinate"
      color="secondary"
      value={progress}
    />
  );
};

function withProgress(initialValue = 0) {
  const [progress, setProgress] = React.useState(initialValue);

  React.useEffect(() => {
    function tick() {
      setProgress((oldProgress) => (oldProgress >= 100 ? 0 : oldProgress + 1));
    }

    const timer = setInterval(tick, 20);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return progress;
}
