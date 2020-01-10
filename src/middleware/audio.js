import {
  PLAY_PODCAST,
  STOP_PODCAST,
  LOAD_PODCAST
} from "../actions/action_types";
import { podcastLoaded } from "../actions/podcasts_actions";
import podcastPlayer from "../utils/PodcastPlayer";

const audio = store => next => action => {
  const podcast = store.getState().podcasts.current;
  let result = next(action);

  switch (action.type) {
    case LOAD_PODCAST:
      podcastPlayer.stop();
      podcastPlayer.load(podcast.url, () => {
        if (!podcast.loaded) {
          store.dispatch(podcastLoaded());
        }
      });
      return;
    case PLAY_PODCAST:
      podcastPlayer.play();
      return;
    case STOP_PODCAST:
      podcastPlayer.pause();
      return;
  }
  return result;
};

export default audio;
