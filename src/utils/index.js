const humanReadableTime = duration => {
  const seconds = Math.floor((duration / 1000) % 60);
  return {
    minutes: Math.floor(duration / 1000 / 60),
    seconds: seconds < 10 ? `0${seconds}` : seconds
  };
};

export { humanReadableTime };
