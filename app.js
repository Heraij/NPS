/* MUSIC */
const music = document.getElementById("music");

window.addEventListener("click", () => {
  if (music && music.paused) {
    music.volume = 0.4;
    music.play();
  }
});

/* =========================
   PARTICLE SYSTEM
========================= */

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

/* ========================= */

function resizeCanvas() {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

/* =========================
   PARTICLE CLASS
========================= */

class Particle {

  constructor() {

    this.reset();
  }

  reset() {

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.size = Math.random() * 2 + 1;

    this.speedX = (Math.random() - 0.5) * 0.25;
    this.speedY = (Math.random() - 0.5) * 0.25;

    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {

    this.x += this.speedX;
    this.y += this.speedY;

    /* smooth edge looping */

    if (this.x < -10) this.x = canvas.width + 10;
    if (this.x > canvas.width + 10) this.x = -10;

    if (this.y < -10) this.y = canvas.height + 10;
    if (this.y > canvas.height + 10) this.y = -10;
  }

  draw() {

    ctx.beginPath();

    ctx.arc(
      this.x,
      this.y,
      this.size,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(255,138,76,${this.opacity})`;

    ctx.shadowBlur = 12;
    ctx.shadowColor = "rgba(255,138,76,0.4)";

    ctx.fill();

    ctx.shadowBlur = 0;
  }
}

/* =========================
   CREATE PARTICLES
========================= */

const particles = [];

for (let i = 0; i < 70; i++) {

  particles.push(new Particle());
}

/* =========================
   CONNECTION LINES
========================= */

function connectParticles() {

  for (let a = 0; a < particles.length; a++) {

    for (let b = a; b < particles.length; b++) {

      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {

        ctx.beginPath();

        ctx.strokeStyle =
          `rgba(255,138,76,${0.08 - distance / 1500})`;

        ctx.lineWidth = 1;

        ctx.moveTo(
          particles[a].x,
          particles[a].y
        );

        ctx.lineTo(
          particles[b].x,
          particles[b].y
        );

        ctx.stroke();
      }
    }
  }
}

/* =========================
   ANIMATION LOOP
========================= */

function animateParticles() {

  requestAnimationFrame(animateParticles);

  ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
  );

  particles.forEach(particle => {

    particle.update();
    particle.draw();
  });

  connectParticles();
}

animateParticles();
