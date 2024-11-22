import fotka from "../img/projects/project-1x-(1).jpg";
import fotka2 from "/img/projects/project-1x-(1).jpg";

import svgTest from "/img/icons.svg"

const element = document.querySelector(".unordered-list-test");

function addTestMarkup(position, fotka) {
    element.insertAdjacentHTML(position, `
        <li class="fotka-test">
            <img src="${fotka}" alt="fotka" />
        </li>`);
}

addTestMarkup("beforeend", fotka);
addTestMarkup("beforeend", fotka2);

function addTestMarkupSvg(position, svgTest) {
    element.insertAdjacentHTML(position, `
        <li class="svg-test">
        <svg class="svg-icon-test" width="20" height="20">
            <use href="${svgTest}#icon-light"></use>
                        </svg>
        </li>`);
}

addTestMarkupSvg("beforeend", svgTest);