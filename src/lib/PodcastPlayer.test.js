import PodcastPlayer from "./PodcastPlayer";

PodcastPlayer.load(
  "https://downloads.pod.co/b0b0796f-3204-4a5b-bf8d-7ba5e9361f80/b82a69fb-e017-4fda-b986-7194e30fe5b0.mp3"
);

let playStub, pauseStub;

describe("PodcastPlayer", () => {
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
  it("Calls play function", () => {
    PodcastPlayer.play();
    expect(playStub).toHaveBeenCalled();
  });
  it("It attached an onEnd and onCanPlayThrough callback function for the audio", () => {
    const onLoad = jest.fn();
    const onEnd = jest.fn();
    PodcastPlayer.load(
      "https://downloads.pod.co/b0b0796f-3204-4a5b-bf8d-7ba5e9361f80/b82a69fb-e017-4fda-b986-7194e30fe5b0.mp3",
      onLoad,
      onEnd
    );
    expect(PodcastPlayer.audio.onended).toEqual(onEnd);
    expect(PodcastPlayer.audio.oncanplaythrough).toEqual(onLoad);
  });
  it("Calls stop function", () => {
    PodcastPlayer.stop();
    expect(pauseStub).toHaveBeenCalled();
  });
  it("Seeks to a current time", () => {
    PodcastPlayer.seek(1000);
    expect(PodcastPlayer.audio.currentTime).toEqual(1000);
  });
  it("Creates and destroys a progress interval", done => {
    const intervalFn = jest.fn();
    PodcastPlayer.createProgressInterval(intervalFn);
    setTimeout(() => {
      expect(intervalFn).toHaveBeenCalled();
      PodcastPlayer.destroyProgressInterval();
      expect(PodcastPlayer.progressInterval).toEqual(null);
      done();
    }, 500);
  });
});
