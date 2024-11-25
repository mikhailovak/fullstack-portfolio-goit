'use strict';
import axios from 'axios';
import iziToast from 'izitoast';

// DOM Elements: отримання посилань на елементи з HTML
const form = document.querySelector('.work-together-form'); // форма
const input = document.querySelector('.work-together-input'); // поле для вводу email
const message = document.querySelector('.work-together-message'); // поле для вводу повідомлення
const success = document.querySelector('.work-together-success'); // повідомлення про успіх
const errorInput = document.querySelector('.work-together-errorInput'); // помилка для поля email
const errorMessage = document.querySelector('.work-together-errorMessage'); // помилка для поля повідомлення
const close = document.querySelector('.modal-close-btn'); // кнопка закриття модального вікна
const loader = document.querySelector('.work-together-loader'); // індикатор завантаження
const backdrop = document.querySelector('.modal-overlay'); // фон модального вікна
const modalTitle = document.querySelector('.modal-title'); // заголовок модального вікна
const modalText = document.querySelector('.modal-message'); // текст у модальному вікні
const modalCloseBtn = document.getElementById('modal-close-btn');

// Відкриває/закриває модальне вікно
const toggleModal = isOpen => {
  backdrop.classList.toggle('active', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';
};


// Показує повідомлення про помилку
const showError = (element, message = '') => {
  element.style.display = 'block'; // робить елемент видимим
  element.textContent = message; // додає текст помилки
};

// Приховує повідомлення про помилку
const hideError = element => {
  element.style.display = 'none'; // робить елемент невидимим
};

// Відображає або приховує індикатор завантаження
const toggleLoader = isLoading => {
  loader.classList.toggle('is-hide', !isLoading); // перемикає клас is-hide
};

// Скидає стан форми до початкового
const resetForm = () => {
  form.reset(); // очищає поля форми
  hideError(errorInput); // приховує помилку email
  hideError(errorMessage); // приховує помилку повідомлення
  success.style.display = 'none'; // приховує повідомлення про успіх
};

// Перевіряє валідність введеного email
const validateEmail = () => {
  const isValid = input.validity.valid && input.value.trim() !== ''; // перевіряє формат і наявність тексту
  success.style.display = isValid ? 'block' : 'none'; // показує успішну валідацію, якщо email валідний
  if (!isValid && input.value.trim() === '') {
    showError(errorInput, 'The field must be filled.'); // показує помилку, якщо поле порожнє
  } else {
    hideError(errorInput); // приховує помилку
  }
};

// Обробляє введення у полі email
input.addEventListener('input', validateEmail);

// Закриває модальне вікно при кліку на кнопку закриття
close.addEventListener('click', () => toggleModal(false));

// Закриває модальне вікно при натисканні Escape
window.addEventListener('keydown', e => {
  if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
    toggleModal(false);
  }
});

// Закриває модальне вікно при кліку на фон (backdrop)
backdrop.addEventListener('click', e => {
  if (e.target === backdrop) toggleModal(false);
});

// Обробка події надсилання форми
form.addEventListener('submit', async e => {
  e.preventDefault(); // запобігає перезавантаженню сторінки

  const email = input.value.trim(); // отримує введений email
  const comment = message.value.trim(); // отримує введене повідомлення

  let hasError = false;

  // Перевірка на порожнє поле email
  if (!email) {
    showError(errorInput, 'The field must be filled.');
    hasError = true;
  }

  // Перевірка на порожнє поле повідомлення
  if (!comment) {
    showError(errorMessage, 'Message cannot be empty.');
    hasError = true;
  }

  if (hasError) return; // якщо є помилки, виходить із функції

  toggleLoader(true); // показує індикатор завантаження

  try {
    // Відправляє POST-запит на сервер
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        method: 'POST', // метод запиту
        headers: {
          'Content-Type': 'application/json', // формат даних
        },
        body: JSON.stringify({ email, comment }), // тіло запиту у форматі JSON
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`); // генерує помилку, якщо відповідь не успішна
    }

    const data = await response.json(); // отримує дані з відповіді

    toggleLoader(false); // приховує індикатор завантаження
    toggleModal(true); // відкриває модальне вікно

    modalTitle.textContent = data?.title || 'Success'; // оновлює заголовок модального вікна
    modalText.textContent =
      data?.message || 'Your message has been sent successfully!'; // оновлює текст у модальному вікні
    resetForm(); // скидає форму
  } catch (error) {
    toggleLoader(false); // приховує індикатор завантаження

    alert(`Error: ${error.message}`); // показує повідомлення про помилку
  }
});
