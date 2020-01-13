import fetchMock from "fetch-mock";
import { mockStoreWithAudio } from "../test/mockStore";
import mock from "../test/mock";
import PodcastPlayer from "../lib/PodcastPlayer";
import {
  FETCH_PODCASTS,
  PLAY_PODCAST,
  STOP_PODCAST,
  LOAD_PODCAST,
  PODCAST_LOADED
} from "../actions/action_types";
import { podcastLoaded } from "../actions/podcasts_actions";
const initialState = { podcasts: { list: mock, current: mock[0] } };
const store = mockStoreWithAudio(initialState);

let playStub, pauseStub;
describe("Audio Middleware Integration", () => {
  beforeEach(() => {
    store.dispatch({
      type: LOAD_PODCAST,
      payload: { id: mock[0].id, autoplay: false }
    });
  });
  beforeAll(() => {
    playStub = jest
      .spyOn(window.HTMLMediaElement.prototype, "play")
      .mockImplementation(() => {});
    pauseStub = jest
      .spyOn(window.HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {});
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it("should load a podcast", () => {
    expect(PodcastPlayer.audio.toString()).toBe("[object HTMLAudioElement]");
  });
  it("should load a podcast and play it immediately if autoplay param is supplied", () => {
    store.dispatch({
      type: LOAD_PODCAST,
      payload: { id: mock[0].id, autoplay: true }
    });
    expect(playStub).toHaveBeenCalled();
  });
  it("should load a podcast and attach an onended and oncanplaythrough event", () => {
    expect(typeof PodcastPlayer.audio.onended).toEqual("function");
    expect(typeof PodcastPlayer.audio.oncanplaythrough).toEqual("function");
  });
  it("Should play a podcast", () => {
    store.dispatch({
      type: PLAY_PODCAST,
      payload: { id: mock[0].id }
    });
    expect(playStub).toHaveBeenCalled();
  });
  it("Should stop a podcast", () => {
    store.dispatch({
      type: STOP_PODCAST
    });
    expect(pauseStub).toHaveBeenCalled();
  });
});
