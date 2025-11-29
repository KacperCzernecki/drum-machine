const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const audio = pad.querySelector("audio");
    playSound(audio, pad);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key.toUpperCase();
  const audio = document.getElementById(key);
  if (!audio) return;

  const pad = audio.parentElement;
  playSound(audio, pad);
});

function playSound(audio, pad) {
  audio.currentTime = 0;
  audio.play();

  display.innerText = `You played a sound ${audio.src
    .replace("https://cdn.freecodecamp.org/curriculum/drum/", "")
    .replace(".mp3", "")}`;

  pad.classList.add("active");
  setTimeout(() => pad.classList.remove("active"), 150);
}
