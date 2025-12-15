// ----------------------------
// 1. Menu Toggle
// ----------------------------
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // Close menu on link click
  document.querySelectorAll(`#${navId} a`).forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('show'));
  });
}
showMenu('nav-toggle', 'nav-menu');

// ----------------------------
// 2. Detail Section Functions
// ----------------------------
function openDetail(id) {
  // Hide all detail sections first
  document.querySelectorAll('.detail-section').forEach(section => {
    section.classList.remove('show');
  });

  // Show the requested section
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('show');
    // Show backdrop
    showBackdrop();
  }
}

function closeDetail(id) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('show');
    // Hide backdrop
    hideBackdrop();
  }
}

function showHome() {
  // Hide all detail sections to show home
  document.querySelectorAll('.detail-section').forEach(section => {
    section.classList.remove('show');
  });
  hideBackdrop();
}

// Backdrop functions
function showBackdrop() {
  let backdrop = document.getElementById('modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.id = 'modal-backdrop';
    backdrop.className = 'modal-backdrop';
    backdrop.onclick = () => {
      document.querySelectorAll('.detail-section').forEach(section => {
        section.classList.remove('show');
      });
      hideBackdrop();
    };
    document.body.appendChild(backdrop);
  }
  setTimeout(() => backdrop.classList.add('show'), 10);
}

function hideBackdrop() {
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('show');
    setTimeout(() => backdrop.remove(), 300);
  }
}

// ----------------------------
// 3. Theme Toggle
// ----------------------------
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  if (body.getAttribute('data-theme') === 'light') {
    body.removeAttribute('data-theme');
    themeIcon.setAttribute('name', 'moon');
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    themeIcon.setAttribute('name', 'sunny');
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');

  if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    themeIcon.setAttribute('name', 'sunny');
  }
});

// ----------------------------
// 4. GSAP Timeline Animations
// ----------------------------
const tl = gsap.timeline();

// Overlay Animation
tl.to(".first", { duration: 1.5, top: "-100%", ease: "expo.inOut", delay: 0.5 })
  .to(".second", { duration: 1.5, top: "-100%", ease: "expo.inOut" }, "-=1.3")
  .to(".third", { duration: 1.5, top: "-100%", ease: "expo.inOut" }, "-=1.3")

  // Hero Image
  .from('.hero__image', { opacity: 0, x: 60, duration: 2 }, "-=0.5")

  // Hero Text (staggered)
  .from('.anime-text', { opacity: 0, y: 25, duration: 3, stagger: 0.3, ease: 'expo.out' }, "-=1")

  // Nav Logo & Items
  .from('.nav__logo', { opacity: 0, y: 25, duration: 2, ease: 'expo.out' }, "-=2")
  .from('.nav__item', { opacity: 0, y: 25, duration: 2, stagger: 0.2, ease: 'expo.out' }, "-=1.5")

  // Social Icons
  .from('.hero__social a', { opacity: 0, y: 25, duration: 2, stagger: 0.2, ease: 'expo.out' }, "-=1.5");

