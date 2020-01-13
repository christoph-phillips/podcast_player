import podcastsReducer from "./podcasts_reducer";
import {
  FETCH_PODCASTS,
  PLAY_PODCAST,
  STOP_PODCAST,
  LOAD_PODCAST,
  PODCAST_LOADED
} from "../actions/action_types";
import mockData from "../test/mock_data";

const initialState = { list: mockData, current: mockData[0] };
const emptyState = { list: [], current: null };

describe("Podcasts Reducer", () => {
  it("should return the initial state", () => {
    expect(podcastsReducer(undefined, {})).toEqual(emptyState);
  });
  it("FETCH_PODCASTS", () => {
    expect(
      podcastsReducer(initialState, {
        type: FETCH_PODCASTS,
        payload: mockData
      })
    ).toEqual({
      current: mockData[0],
      list: mockData
    });
  });
  it("LOAD_PODCAST", () => {
    expect(
      podcastsReducer(initialState, {
        type: LOAD_PODCAST,
        payload: { id: mockData[1].id }
      })
    ).toEqual({
      list: mockData,
      current: { ...mockData[1], loaded: false, playing: false }
    });
  });
  it("PLAY_PODCAST", () => {
    expect(
      podcastsReducer(initialState, {
        type: PLAY_PODCAST,
        payload: { id: mockData[0].id, url: mockData[0].id }
      })
    ).toEqual({
      list: mockData,
      current: { ...mockData[0], playing: true }
    });
  });
  it("PODCAST_LOADED", () => {
    expect(
      podcastsReducer(initialState, {
        type: PODCAST_LOADED,
        payload: { id: mockData[0].id, url: mockData[0].id }
      })
    ).toEqual({
      list: mockData,
      current: { ...mockData[0], loaded: true }
    });
  });
  it("STOP_PODCAST", () => {
    expect(
      podcastsReducer(initialState, {
        type: STOP_PODCAST
      })
    ).toEqual({
      list: mockData,
      current: { ...mockData[0], playing: false }
    });
  });
});
