window.onload = () => {
  const html = document.querySelector('html');
  const check = document.getElementById('checkbox');

  check.addEventListener('change', () => {
    html.classList.toggle('dark-mode')
  });
}
