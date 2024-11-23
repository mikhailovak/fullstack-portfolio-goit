import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-list', {
  beforeOpen: toggleIcon,
  beforeClose: toggleIcon,
});

function toggleIcon(currentElement) {
  const arrowIcon = currentElement.querySelector('.arrow-icon');

  arrowIcon.classList.toggle('transform');
}
