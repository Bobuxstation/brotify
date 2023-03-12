const audio = document.getElementById('player');
const playPauseBtn = document.querySelector('.play-pause-btn');
const progressBar = document.querySelector('.progress-bar');
const currentTime = document.querySelector('.current-time');
const totalTime = document.querySelector('.total-time');
const ffBtn = document.querySelector('.ff-btn');
const rwBtn = document.querySelector('.rw-btn');
const volumeSlider = document.querySelector('#volume');

let isPlaying = false;

isPlaying ? pauseAudio() : playAudio();

function togglePlayPause() {
  isPlaying ? pauseAudio() : playAudio();
}

function playAudio() {
  audio.play();
  playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
  isPlaying = true;
  playPauseBtn.classList.remove('play');
  playPauseBtn.classList.add('pause');
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`
  playPauseBtn.classList.remove('pause');
  playPauseBtn.classList.add('play');
}

function updateProgress() {
  const percent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = percent;
  const mins = Math.floor(audio.currentTime / 60);
  const secs = Math.floor(audio.currentTime % 60);
  currentTime.innerHTML = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function setTotalTime() {
  const mins = Math.floor(audio.duration / 60);
  const secs = Math.floor(audio.duration % 60);
  totalTime.innerHTML = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function fastForward() {
  audio.currentTime += 10;
}

function rewind() {
  audio.currentTime -= 10;
}

function setVolume() {
  audio.volume = volumeSlider.value;
}

function setProgress() {
   const newTime = progressBar.value / 100 * audio.duration;
   audio.currentTime = newTime;
}

// Add event listeners
playPauseBtn.addEventListener('click', togglePlayPause);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('loadedmetadata', setTotalTime);
ffBtn.addEventListener('click', fastForward);
rwBtn.addEventListener('click', rewind);
volumeSlider.addEventListener('input', setVolume);
progressBar.addEventListener('input', setProgress);