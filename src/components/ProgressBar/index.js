import React, { useEffect, useState } from "react";
import podcastPlayer from "../../lib/PodcastPlayer";
import { Container } from "./StyledComponents";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    podcastPlayer.createProgressInterval(progress => {
      setProgress(+progress);
    });
  }, [setProgress]);
  return (
    <Container>
      <input
        type="range"
        min={0}
        max={1}
        value={progress || 0}
        step={0.001}
        className="slider"
        readOnly={true}
      />
    </Container>
  );
};

export default ProgressBar;
