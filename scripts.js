(function(){
  // Write current year in footer
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mark current nav link
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if ((here === '' && href.endsWith('index.html')) || href.endsWith(here)) {
      a.setAttribute('aria-current', 'page');
    }
  });

  // Light/Dark toggle (simple class on <html>)
  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('light');
    });
  }
})();
