import {
  FETCH_PODCASTS,
  PLAY_PODCAST,
  STOP_PODCAST,
  LOAD_PODCAST,
  PODCAST_LOADED
} from "./action_types";

export const fetchPodcasts = () => {
  return async dispatch => {
    const response = await fetch(
      "https://public-api.pod.co/podcasts/create-reach-inspire/episodes"
    );
    let { data } = await response.json();
    dispatch({
      type: FETCH_PODCASTS,
      payload: data.sort(
        (a, b) => new Date(b.published_at) - new Date(a.published_at)
      )
    });
    dispatch(loadPodcast(data[0].id, false));
  };
};

export const loadPodcast = (id, autoplay) => {
  return {
    type: LOAD_PODCAST,
    payload: { id, autoplay }
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

export const podcastLoaded = () => {
  return {
    type: PODCAST_LOADED
  };
};
