export const humanReadableTime = duration => {
  const seconds = Math.floor((duration / 1000) % 60);
  return {
    minutes: Math.floor(duration / 1000 / 60).toString(),
    seconds: seconds < 10 ? `0${seconds}` : seconds
  };
};

export const next = (list, currentId) => {
  const index = list.findIndex(item => item.id === currentId);
  if (index === list.length - 1) {
    return list[0];
  }
  return list[index + 1];
};

export const prev = (list, currentId) => {
  const index = list.findIndex(item => item.id === currentId);
  if (index === 0) {
    return list[list.length - 1];
  }
  return list[index - 1];
};
