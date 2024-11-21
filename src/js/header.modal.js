'use strict';

(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття (ТРЕБА ЗРОБИТИ ДІМА НЕ ЗАБУДЬ!!!!!!!!!!!!!!!)
    openModalBtn: document.querySelector("[data-menu-open]"),
    // Додати атрибут data-modal-close на кнопку закриття (Є)
    closeModalBtn: document.querySelector("[data-menu-close]"),
    // Додати атрибут data-modal на бекдроп модалки (Є)
    modal: document.querySelector("[data-menu]"),
    // Всі посилання в меню
    navLinks: document.querySelectorAll(".nav-menu-link"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
    
  refs.navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href"); // Отримуємо ID секції
      if (targetId && targetId.startsWith("#")) {
        const targetSection = document.querySelector(targetId); // Знаходимо секцію за ID

        if (targetSection) {
          // Закриваємо модалку
          refs.modal.classList.remove("is-open");

          // Плавний скрол до секції
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
