import {
  PLAY_PODCAST,
  STOP_PODCAST,
  LOAD_PODCAST
} from "../actions/action_types";
import {
  podcastLoaded,
  playPodcast,
  loadPodcast
} from "../actions/podcasts_actions";
import podcastPlayer from "../utils/PodcastPlayer";
import { next as nextPodcast } from "../utils";

const audio = store => next => action => {
  const podcast = store.getState().podcasts.current;
  const list = store.getState().podcasts.list;
  let result = next(action);
  switch (action.type) {
    case LOAD_PODCAST:
      podcastPlayer.stop();
      const loadedCb = () => store.dispatch(podcastLoaded());
      const endCb = () => {
        const nextPlaying = nextPodcast(list, result.payload.id);
        store.dispatch(loadPodcast(nextPlaying.id));
        store.dispatch(
          playPodcast({ url: nextPlaying.url, id: nextPlaying.id })
        );
      };
      podcastPlayer.load(podcast.url, loadedCb, endCb);
      if (result.payload.autoplay) {
        store.dispatch(playPodcast({ url: podcast.url, id: podcast.id }));
      }

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
