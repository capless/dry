import React from "react";
import LinearProgress from "dry/components/linear-progress";

export default {
  title: "Library|LinearProgress/Determinate",
};

export const determinatePrimary = () => {
  const progress = withProgress(0);

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
    />
  );
};

export const determinateSecondary = () => {
  const progress = withProgress(0);

  return (
    <LinearProgress
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
      setProgress((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(tick, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return progress;
}
