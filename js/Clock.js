// js/Clock.js
(function () {
  function pad(n){ return String(n).padStart(2,'0'); }

  function updateClock() {
    const el = document.getElementById('clock');
    if (!el) return; // do nothing if no clock element
    const now = new Date();
    const h = pad(now.getHours());
    const m = pad(now.getMinutes());
    const s = pad(now.getSeconds());
    // optional: show date too
    const day = now.toLocaleDateString();
    el.textContent = `${h}:${m}:${s} — ${day}`;
  }

  // start
  setInterval(updateClock, 1000);
  updateClock();
})();
