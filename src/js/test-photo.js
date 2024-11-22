import fotka from "../img/projects/project-1x-(1).jpg";
import fotka2 from "/img/projects/project-1x-(1).jpg";


const element = document.querySelector(".unordered-list-test");

function addTestMarkup(position, fotka) {
    element.insertAdjacentHTML(position, `
        <li class="fotka-test">
            <img src="${fotka}" alt="fotka" />
        </li>`);
}

addTestMarkup("beforeend", fotka);

function addTestMarkup2(position, fotka2) {
    element.insertAdjacentHTML(position, `
        <li class="fotka-test">
            <img src="${fotka2}" alt="fotka" />
        </li>`);
}

addTestMarkup("beforeend", fotka2);
