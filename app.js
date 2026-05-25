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
