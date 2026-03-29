document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.site-nav').classList.toggle('open');
});

document.querySelectorAll('.faq-q').forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('open');
  });
});