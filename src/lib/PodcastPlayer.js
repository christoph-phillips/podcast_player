function PodcastPlayer() {}

PodcastPlayer.prototype = {
  audio: null,
  progressInterval: null,
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
  load(url, loadCb, endCb) {
    this.stop();
    this.loading = true;
    this.audio = new window.Audio(url);
    this.audio.preload = "auto";
    this.audio.onended = endCb;
    this.audio.addEventListener("canplaythrough", loadCb);
  },
  seek(val) {
    this.audio.currentTime = val;
  },
  createProgressInterval(cb) {
    if (!this.progressInterval) {
      this.progressInterval = setInterval(() => {
        if (this.audio) {
          const duration = this.audio.duration > 0 ? this.audio.duration : 1000;
          const progress = +(this.audio.currentTime / duration).toFixed(3);
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
