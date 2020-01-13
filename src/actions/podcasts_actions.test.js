import fetchMock from "fetch-mock";
import { mockStore } from "../test/mockStore";
import mock from "../test/mock";
import {
  FETCH_PODCASTS,
  PLAY_PODCAST,
  STOP_PODCAST,
  LOAD_PODCAST,
  PODCAST_LOADED
} from "./action_types";

import {
  fetchPodcasts,
  loadPodcast,
  playPodcast,
  stopPodcast,
  podcastLoaded
} from "./podcasts_actions";

describe("Podcast actions", () => {
  it("should create an action to fetch podcasts and load the first in the list", () => {
    const mockData = mock.sort(
      (a, b) => new Date(b.published_at) - new Date(a.published_at)
    );
    fetchMock.getOnce(
      "https://public-api.pod.co/podcasts/create-reach-inspire/episodes",
      {
        body: { data: mockData },
        headers: { "content-type": "application/json" }
      }
    );
    const expectedActions = JSON.stringify([
      { type: FETCH_PODCASTS, payload: mockData },
      { type: LOAD_PODCAST, payload: { id: mockData[0].id, autoplay: false } }
    ]);
    const store = mockStore({ podcasts: { list: [], current: [] } });
    return store.dispatch(fetchPodcasts()).then(() => {
      const actualActions = JSON.stringify(store.getActions());
      expect(actualActions).toEqual(expectedActions);
    });
  });
  it("should create an action to load a podcast", () => {
    const expectedAction = {
      type: LOAD_PODCAST,
      payload: {
        autoplay: true,
        id: "test"
      }
    };
    expect(loadPodcast("test", true)).toEqual(expectedAction);
  });
  it("should create an action to play a podcast", () => {
    const id = "test";
    const url = "testUrl";
    const expectedAction = {
      type: PLAY_PODCAST,
      payload: {
        id,
        url
      }
    };
    expect(playPodcast({ id, url })).toEqual(expectedAction);
  });
  it("should create an action to stop a podcast", () => {
    const expectedAction = {
      type: STOP_PODCAST
    };
    expect(stopPodcast()).toEqual(expectedAction);
  });
  it("should create an action to confirm when podcast is loaded", () => {
    const expectedAction = {
      type: PODCAST_LOADED
    };
    expect(podcastLoaded()).toEqual(expectedAction);
  });
});
