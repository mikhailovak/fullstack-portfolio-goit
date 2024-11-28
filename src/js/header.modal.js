'use strict';

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-menu-open]"),
    closeModalBtn: document.querySelector("[data-menu-close]"),
    modal: document.querySelector("[data-menu]"),
    navLinks: document.querySelectorAll(".nav-menu-link"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
    
  refs.navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href"); 
      if (targetId && targetId.startsWith("#")) {
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          refs.modal.classList.remove("is-open");
          document.body.style.overflow = "";

          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });

  function toggleModal() {
    const isOpen = refs.modal.classList.contains("is-open");

    refs.modal.classList.toggle("is-open");

    if (isOpen) {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }

  }
})();
