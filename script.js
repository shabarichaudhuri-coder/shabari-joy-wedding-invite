document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("inviteVideo");
  const playButton = document.getElementById("playBtn");

  if (playButton && video) {
    playButton.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playButton.classList.add("playing");
      } else {
        video.pause();
        playButton.classList.remove("playing");
      }
    });
  }

  if (video) {
    video.addEventListener("ended", () => {
      if (playButton) {
        playButton.classList.remove("playing");
      }
    });
  }
});
