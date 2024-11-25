// Отримуємо елементи
const modalOverlay = document.getElementById('modal-overlay');
const modalCloseBtn = document.getElementById('modal-close-btn');

// Функція для відкриття модального вікна
function showModal() {
  modalOverlay.classList.add('active');
}

// Функція для закриття модального вікна
function closeModal() {
  modalOverlay.classList.remove('active');
}

// Відкриваємо модальне вікно 
showModal();

// Додаємо подію на закриття
modalCloseBtn.addEventListener('click', closeModal);

// Закриття модального вікна при кліку на overlay
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) closeModal();
});