/* =========================
   MUSIC SYSTEM
========================= */

const music = document.getElementById("music");

let musicStarted = false;

window.addEventListener("click", () => {

  if (musicStarted) return;

  if (!music) return;

  music.volume = 0.4;

  music.play().catch(err => {
    console.log("Music blocked:", err);
  });

  musicStarted = true;

});

/* =========================
   PARTICLES
========================= */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

const particles = [];

for (let i = 0; i < 60; i++) {

  particles.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.6,
    vy: (Math.random() - 0.5) * 0.6,
    size: Math.random() * 2 + 1
  });

}

function animate() {

  requestAnimationFrame(animate);

  ctx.fillStyle = "rgba(5,5,5,0.12)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;

    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

    ctx.fillStyle = "rgba(255,140,80,0.6)";
    ctx.fill();

  });

}

animate();

/* =========================
   SCROLL REVEAL SYSTEM
========================= */

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.15
});

/* ========================= */

document.querySelectorAll(
  ".home-card, .card, .panel, .carousel-panel"
).forEach(el => {

  observer.observe(el);

});
/* =========================
   PAGE TRANSITION
========================= */

document.querySelectorAll("a").forEach(link => {

  if (link.href.includes(window.location.host)) {

    link.addEventListener("click", (e) => {

      e.preventDefault();

      const target = link.href;

      document.body.style.opacity = "0";
      document.body.style.transform = "scale(1.02)";
      document.body.style.transition = "0.25s ease";

      setTimeout(() => {
        window.location.href = target;
      }, 250);

    });

  }

});
