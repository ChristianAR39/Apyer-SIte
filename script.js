// ---------- DARK THEME TOGGLE (safe if #theme-toggle is missing) ----------
const themeBtn = document.getElementById('theme-toggle');
const applySavedTheme = () => {
  if (JSON.parse(localStorage.getItem('dark-theme'))) {
    document.body.classList.add('dark');
  }
};
applySavedTheme();

const toggleTheme = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark-theme', document.body.classList.contains('dark'));
};
if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

// ---------- MOBILE NAV TOGGLE ----------
const navBtn = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (navBtn && mobileMenu) {
  navBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// ---------- LIGHTROOM (enlarge card/image on click) ----------
// Works with cards inside #works. If you click anywhere inside a ".work-card"
// (or directly an <img>), it toggles a 'lightroom' class on the card.
const works = document.getElementById('works');

function findWorkCard(el) {
  // climb up to the nearest element that should be highlighted
  // use .work-card if present; otherwise use the <a> wrapper or the card itself
  return el.closest('.work-card') || el.closest('a') || el.closest('div');
}

function toggleLightroom(event) {
  if (!works) return;
  const card = findWorkCard(event.target);
  if (!card || !works.contains(card)) return;

  // Only toggle for actual cards; ignore clicks on links to other pages if you add them later
  card.classList.toggle('lightroom');
}

if (works) {
  works.addEventListener('click', toggleLightroom);
}

