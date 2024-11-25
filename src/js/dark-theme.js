const toggleButton = document.querySelector('#toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});
