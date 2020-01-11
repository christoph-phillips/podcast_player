import {
  FETCH_PODCASTS,
  PLAY_PODCAST,
  STOP_PODCAST,
  LOAD_PODCAST,
  PODCAST_LOADED
} from "../actions/action_types";

export default (state = { list: [], current: null }, action) => {
  switch (action.type) {
    case FETCH_PODCASTS:
      return { list: action.payload, current: { ...action.payload[0] } };
    case LOAD_PODCAST:
      const newPodcast = state.list.find(
        podcast => podcast.id === action.payload.id
      );
      return {
        ...state,
        current: { ...newPodcast, playing: false, loaded: false }
      };
    case PODCAST_LOADED:
      return {
        ...state,
        current: { ...state.current, loaded: true }
      };
    case PLAY_PODCAST:
      return {
        ...state,
        current: { ...state.current, playing: true }
      };
    case STOP_PODCAST:
      return {
        ...state,
        current: {
          ...state.current,
          playing: false
        }
      };
    default:
      return state;
  }
};
