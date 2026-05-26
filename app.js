/* =========================
   RESET
========================= */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* =========================
   BASE
========================= */

body {

  background:
    radial-gradient(circle at top, #1b1010, #050505 65%);

  color: white;

  font-family: Arial, sans-serif;

  overflow-x: hidden;

  min-height: 100vh;
}

/* =========================
   SCROLLBAR
========================= */

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(0,0,0,0.4);
}

::-webkit-scrollbar-thumb {
  background: rgba(255,140,80,0.4);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255,140,80,0.7);
}

/* =========================
   PARTICLES
========================= */

#particles {

  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;

  z-index: 0;

  pointer-events: none;
}

/* =========================
   FOG LAYERS
========================= */

.bg-fog,
.bg-fog-2 {

  position: fixed;

  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  filter: blur(110px);

  pointer-events: none;

  z-index: 0;
}

.bg-fog {

  width: 800px;
  height: 350px;

  background:
    radial-gradient(circle, rgba(255,120,80,0.18), transparent 70%);
}

.bg-fog-2 {

  width: 500px;
  height: 240px;

  background:
    radial-gradient(circle, rgba(255,80,140,0.08), transparent 70%);
}

/* =========================
   TOP BAR
========================= */

.topbar {

  position: fixed;

  top: 0;
  left: 0;
  right: 0;

  height: 72px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;

  background:
    rgba(0,0,0,0.25);

  backdrop-filter: blur(10px);

  border-bottom:
    1px solid rgba(255,255,255,0.05);

  z-index: 100;
}

/* ========================= */

.logo {

  font-size: 24px;
  font-weight: bold;

  letter-spacing: 1px;
}

.logo span {
  color: #ff8a4c;
}

/* =========================
   NAVIGATION
========================= */

.nav {

  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav a {

  color: white;
  text-decoration: none;

  padding: 10px 16px;

  border-radius: 10px;

  background:
    rgba(255,255,255,0.05);

  transition: 0.2s;

  display: inline-block;
}

.nav a:hover {

  background:
    rgba(255,140,80,0.18);

  color: #ff8a4c;

  transform: translateY(-2px);
}

/* =========================
   PAGE LAYOUT
========================= */

.page,
.hero {

  position: relative;

  z-index: 5;

  text-align: center;

  padding-top: 150px;
}

/* =========================
   TITLES
========================= */

.title,
.hero h1 {

  font-size: clamp(48px, 8vw, 82px);

  letter-spacing: 3px;

  margin-bottom: 12px;

  color: #ff8a4c;

  text-shadow:
    0 0 18px rgba(255,120,80,0.25);
}

/* =========================
   HOME GRID (FIXED STACK)
========================= */

.home-grid {

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 20px;

  margin-top: 40px;

  padding: 20px;
}

/* =========================
   CARDS
========================= */

.card,
.panel,
.home-card {

  width: 260px;

  padding: 22px;

  border-radius: 16px;

  background:
    rgba(255,255,255,0.05);

  border:
    1px solid rgba(255,255,255,0.05);

  backdrop-filter: blur(8px);

  transition: 0.2s;
}

.card:hover,
.panel:hover,
.home-card:hover {

  transform: translateY(-4px);

  border:
    1px solid rgba(255,140,80,0.2);

  box-shadow:
    0 0 22px rgba(255,140,80,0.12);
}

/* =========================
   WEEKLY + WINNERS LISTS
========================= */

.task-list,
.winner-list {

  list-style: none;

  padding: 0;

  margin-top: 12px;

  text-align: left;
}

.task-list li,
.winner-list li {

  padding: 6px 0;

  border-bottom:
    1px solid rgba(255,255,255,0.05);

  font-size: 14px;
}

/* =========================
   RANK COLORS
========================= */

.rank1 { color: #ffd36a; }
.rank2 { color: #bcd0ff; }
.rank3 { color: #ffb38a; }

/* =========================
   BEST LEVELS CAROUSEL
========================= */

.carousel-panel {

  width: 90%;

  max-width: 900px;

  padding: 22px;

  border-radius: 16px;

  background:
    rgba(255,255,255,0.05);

  border:
    1px solid rgba(255,255,255,0.05);
}

.carousel-track {

  display: flex;

  gap: 15px;

  overflow-x: auto;

  padding: 10px;

  scroll-snap-type: x mandatory;
}

.carousel-card {

  min-width: 220px;

  padding: 18px;

  border-radius: 14px;

  background:
    rgba(255,255,255,0.05);

  border:
    1px solid rgba(255,255,255,0.05);

  scroll-snap-align: center;

  transition: 0.2s;
}

.carousel-card:hover {

  transform: translateY(-3px);

  border:
    1px solid rgba(255,140,80,0.2);
}

/* =========================
   FORMS
========================= */

.form {

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;

  margin-top: 30px;
}

input,
select,
button {

  width: 260px;

  padding: 12px;

  border: none;

  border-radius: 10px;

  background:
    rgba(255,255,255,0.06);

  color: white;

  outline: none;
}

button {

  cursor: pointer;

  transition: 0.2s;
}

button:hover {

  background:
    rgba(255,140,80,0.18);

  transform: translateY(-2px);
}

/* =========================
   MOBILE
========================= */

@media (max-width: 700px) {

  .topbar {

    flex-direction: column;

    height: auto;

    gap: 12px;

    padding: 14px;
  }

  .page,
  .hero {

    padding-top: 190px;
  }

  .card,
  .panel,
  .home-card,
  input,
  select,
  button {

    width: 90%;
    max-width: 320px;
  }
}
/* =========================
   SCROLL REVEAL BASE
========================= */

.home-card,
.card,
.panel,
.carousel-panel {

  opacity: 0;

  transform:
    translateY(30px)
    scale(0.98);

  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

/* =========================
   ACTIVE STATE
========================= */

.show {

  opacity: 1;

  transform:
    translateY(0)
    scale(1);
}
