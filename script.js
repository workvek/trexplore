document.addEventListener("DOMContentLoaded", function () {
  // Get references to the video and buttons
  const video = document.querySelector("video");
  const playButton = document.getElementById("play-button");
  const pauseButton = document.getElementById("pause-button");

  // Add click event listener to the play button
  playButton.addEventListener("click", function () {
    // Check if the video is already playing, and prevent playing it again
    if (!video.paused) {
      return;
    }

    // Play the video
    video.play();

    // Hide the play button and show the pause button
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
  });

  // Add click event listener to the pause button
  pauseButton.addEventListener("click", function () {
    // Check if the video is already paused, and prevent pausing it again
    if (video.paused) {
      return;
    }

    // Pause the video
    video.pause();

    // Hide the pause button and show the play button
    pauseButton.style.display = "none";
    playButton.style.display = "inline-block";
  });
});

