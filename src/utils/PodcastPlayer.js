function PodcastPlayer() {}

PodcastPlayer.prototype = {
  audio: null,
  progressInterval: null,
  loadCb: null,
  play() {
    this.audio.play();
  },
  pause() {
    this.audio.pause();
  },
  stop() {
    if (this.audio) {
      this.pause();
      this.audio.currentTime = 0;
    }
  },
  destroy() {
    this.audio.removeEventListener("canplaythrough", () => this.loadCb());
  },
  load(url, cb) {
    this.stop();
    this.loading = true;
    this.audio = new window.Audio(url);
    this.audio.onended = () => this.stop();
    this.loadCb = cb;
    this.audio.addEventListener("canplaythrough", () => this.loadCb());
  },
  createProgressInterval(cb) {
    if (!this.progressInterval) {
      this.progressInterval = setInterval(() => {
        if (this.audio) {
          const progress = this.audio.currentTime / this.audio.duration;
          cb(progress);
        }
      }, 100);
    }
  },
  destroyProgressInterval() {
    clearInterval(this.progressInterval);
    this.progressInterval = null;
  }
};

const podcastPlayer = new PodcastPlayer();
export default podcastPlayer;
