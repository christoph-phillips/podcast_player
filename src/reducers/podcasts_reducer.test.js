import podcastsReducer from "./podcasts_reducer";
import {
  FETCH_PODCASTS,
  PLAY_PODCAST,
  STOP_PODCAST,
  LOAD_PODCAST,
  PODCAST_LOADED
} from "../actions/action_types";
import mock from "../test/mock";

const initialState = { list: mock, current: mock[0] };
const emptyState = { list: [], current: null };

describe("Podcasts Reducer", () => {
  it("should return the initial state", () => {
    expect(podcastsReducer(undefined, {})).toEqual(emptyState);
  });
  it("FETCH_PODCASTS", () => {
    expect(
      podcastsReducer(initialState, {
        type: FETCH_PODCASTS,
        payload: mock
      })
    ).toEqual({
      current: mock[0],
      list: mock
    });
  });
  it("LOAD_PODCAST", () => {
    expect(
      podcastsReducer(initialState, {
        type: LOAD_PODCAST,
        payload: { id: mock[1].id }
      })
    ).toEqual({
      list: mock,
      current: { ...mock[1], loaded: false, playing: false }
    });
  });
  it("PLAY_PODCAST", () => {
    expect(
      podcastsReducer(initialState, {
        type: PLAY_PODCAST,
        payload: { id: mock[0].id, url: mock[0].id }
      })
    ).toEqual({
      list: mock,
      current: { ...mock[0], playing: true }
    });
  });
  it("PODCAST_LOADED", () => {
    expect(
      podcastsReducer(initialState, {
        type: PODCAST_LOADED,
        payload: { id: mock[0].id, url: mock[0].id }
      })
    ).toEqual({
      list: mock,
      current: { ...mock[0], loaded: true }
    });
  });
  it("STOP_PODCAST", () => {
    expect(
      podcastsReducer(initialState, {
        type: STOP_PODCAST
      })
    ).toEqual({
      list: mock,
      current: { ...mock[0], playing: false }
    });
  });
});
