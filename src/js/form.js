'use strict';

import axios from 'axios';
import iziToast from 'izitoast';

const form = document.querySelector('.work-together__form');
const input = document.querySelector('.work-together__input');
const message = document.querySelector('.work-together__message');
const success = document.querySelector('.work-together__success');
const errorInput = document.querySelector('.work-together__error-input');
const errorMessage = document.querySelector('.work-together__error-message');
const close = document.querySelector('.work-together__close');
const backdrop = document.querySelector('.work-together__backdrop');
const loader = document.querySelector('.work-together__loader');

close.addEventListener('click', () => {
  backdrop.classList.remove('work-together__backdrop--open');
  document.body.style.overflow = 'auto';
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    backdrop.classList.remove('work-together__backdrop--open');
    document.body.style.overflow = 'auto';
  }
});

backdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget) {
    backdrop.classList.remove('work-together__backdrop--open');
    document.body.style.overflow = 'auto';
  }
});

const checkEmail = () => {
  if (input.validity.valid) {
    success.style.display = 'block';
    errorInput.style.display = 'none';
  } else {
    success.style.display = 'none';
  }
  if (input.value === '') {
    success.style.display = 'none';
  }
};

input.addEventListener('input', checkEmail);

form.addEventListener('submit', e => {
  e.preventDefault();

  if (input.value.trim() === '') {
    errorInput.style.display = 'block';
    errorInput.textContent = 'Поле должно быть заполнено';
  }

  if (message.value.trim() === '') {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }

  if (input.value.trim() !== '' && message.value.trim() !== '') {
    loader.classList.remove('work-together__loader--hide');

    axios
      .post('https://portfolio-js.b.goit.study/api/requests', {
        email: input.value,
        comment: message.value,
      })
      .then(res => {
        loader.classList.add('work-together__loader--hide');
        backdrop.classList.add('work-together__backdrop--open');
        elScrollBtn.classList.remove('is-active-scroll');
        document.body.style.overflow = 'hidden';

        const title = document.querySelector('.work-together__modal-title');
        const text = document.querySelector('.work-together__modal-text');

        title.textContent = res.data.title;
        text.textContent = res.data.message;

        errorInput.style.display = 'none';
        errorMessage.style.display = 'none';
        success.style.display = 'none';
        form.reset();
      })
      .catch(error => {
        loader.classList.add('work-together__loader--hide');

        iziToast.error({
          title: 'Ошибка',
          message: error.message,
          position: 'center',
        });
      });
  }
});