import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.faq-list', {
  beforeOpen: toggleIcon,
  beforeClose: toggleIcon,
});

accordion.open(0);

function toggleIcon(currentElement) {
  const arrowIcon = currentElement.querySelector('.arrow-icon');

  arrowIcon.classList.toggle('transform');
}