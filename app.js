const hoverSound =
  document.getElementById("hoverSound");

const clickSound =
  document.getElementById("clickSound");

document.querySelectorAll(".nav a")
.forEach(btn => {

  btn.addEventListener("mouseenter", () => {

    hoverSound.currentTime = 0;
    hoverSound.volume = 0.2;
    hoverSound.play();
  });

  btn.addEventListener("click", () => {

    clickSound.currentTime = 0;
    clickSound.volume = 0.3;
    clickSound.play();
  });
});
const music = document.getElementById("music");

let musicStarted = false;

/* =========================
   AUTO MUSIC START
========================= */

window.addEventListener("click", () => {

  if (!musicStarted) {

    music.volume = 0.4;
    music.play();

    musicStarted = true;
  }
});

/* =========================
   DEBUG SAFE LOG
========================= */

console.log("NPS SYSTEM LOADED");
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
const music = document.getElementById("music");

let audioContext;
let analyser;
let dataArray;

function initAudio() {

  audioContext = new AudioContext();

  const source =
    audioContext.createMediaElementSource(music);

  analyser = audioContext.createAnalyser();

  source.connect(analyser);
  analyser.connect(audioContext.destination);

  analyser.fftSize = 64;

  dataArray = new Uint8Array(analyser.frequencyBinCount);
}
function animate() {

  requestAnimationFrame(animate);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let bass = 0;

  if (analyser) {
    analyser.getByteFrequencyData(dataArray);
    bass = dataArray[1] / 255;
  }

  particles.forEach(p => {

    p.x += p.vx * (1 + bass * 3);
    p.y += p.vy * (1 + bass * 3);

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;

    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();

    ctx.arc(
      p.x,
      p.y,
      p.size + bass * 2,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(255, ${120 + bass * 100}, 80, 0.7)`;

    ctx.fill();
  });
}

animate();
window.addEventListener("click", () => {

  if (!musicStarted) {

    music.play();

    initAudio(); // key GD-style reaction starts here

    musicStarted = true;
  }
});
