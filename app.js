/* =========================
   MUSIC SYSTEM (SAFE)
========================= */

const music = document.getElementById("music");

let musicStarted = false;

window.addEventListener("click", () => {

  if (musicStarted) return;

  music.volume = 0.4;

  music.play().catch(err => {
    console.log("Music blocked:", err);
  });

  musicStarted = true;
});

/* =========================
   PARTICLES SYSTEM
========================= */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

/* ========================= */

const particles = [];

for (let i = 0; i < 70; i++) {

  particles.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    size: Math.random() * 2 + 1
  });

}

/* =========================
   ANIMATION LOOP
========================= */

function animate() {

  requestAnimationFrame(animate);

  // trail effect (important for GD feel)
  ctx.fillStyle = "rgba(5,5,5,0.12)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {

    p.x += p.vx;
    p.y += p.vy;

    // wrap edges
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;

    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;

    // draw
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

    ctx.fillStyle = "rgba(255,140,80,0.6)";
    ctx.fill();

  });

}
/* =========================
   DEBUG
========================= */

console.log("NPS SYSTEM LOADED ✔");

document.querySelectorAll(".edit-btn").forEach(btn => {

  btn.addEventListener("click", (e) => {

    const card = e.target.closest(".home-card, .card, .panel");

    // allow editing only text elements inside card
    const textElements = card.querySelectorAll("h2, p, li");

    const isEditing = card.classList.contains("editing");

    if (!isEditing) {

      card.classList.add("editing");

      textElements.forEach(el => {
        el.contentEditable = true;
        el.style.outline = "1px dashed rgba(255,140,80,0.4)";
      });

      btn.textContent = "💾 Save";

    } else {

      card.classList.remove("editing");

      textElements.forEach(el => {
        el.contentEditable = false;
        el.style.outline = "none";
      });

      btn.textContent = "✏ Edit";
    }

  });

});
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
