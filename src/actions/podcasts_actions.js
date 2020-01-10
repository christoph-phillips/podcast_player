import {
  FETCH_PODCASTS,
  PLAY_PODCAST,
  STOP_PODCAST,
  LOAD_PODCAST,
  PODCAST_LOADED
} from "./action_types";

export const loadPodcasts = () => {
  return async dispatch => {
    const response = await fetch(
      "https://public-api.pod.co/podcasts/create-reach-inspire/episodes"
    );
    let { data } = await response.json();
    dispatch({
      type: FETCH_PODCASTS,
      payload: data
    });
    dispatch(loadPodcast(data[0].id));
  };
};

export const loadPodcast = id => {
  return {
    type: LOAD_PODCAST,
    payload: id
  };
};
export const playPodcast = ({ id, url }) => {
  return {
    type: PLAY_PODCAST,
    payload: { id, url }
  };
};

export const stopPodcast = () => {
  return {
    type: STOP_PODCAST
  };
};

export const podcastLoaded = bool => {
  return {
    type: PODCAST_LOADED,
    payload: bool
  };
};
