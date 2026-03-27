// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    q.classList.toggle('open');
    const a = q.nextElementSibling;
    if (a) a.classList.toggle('open');
  });
});

// Mark active nav link
const path = window.location.pathname;
document.querySelectorAll('.site-nav a').forEach(a => {
  if (a.getAttribute('href') && path.startsWith(a.getAttribute('href')) && a.getAttribute('href') !== '/') {
    a.classList.add('active');
  }
});
