'use strict';

import photo from "/img/projects/project-1x-(1).jpg";
import src from "/img/projects/project-2x-(1).jpg";
import photo2 from "/img/projects/project-1x-(2).jpg";
import src2 from "/img/projects/project-2x-(2).jpg";
import photo3 from "/img/projects/project-1x-(3).jpg";
import src3 from "/img/projects/project-2x-(3).jpg";
import photo4 from "/img/projects/project-1x-(4).jpg";
import src4 from "/img/projects/project-2x-(4).jpg";
import photo5 from "/img/projects/project-1x-(5).jpg";
import src5 from "/img/projects/project-2x-(5).jpg";
import photo6 from "/img/projects/project-1x-(6).jpg";
import src6 from "/img/projects/project-2x-(6).jpg";
import photo7 from "/img/projects/project-1x-(7).jpg";
import src7 from "/img/projects/project-2x-(7).jpg";
import photo8 from "/img/projects/project-1x-(8).jpg";
import src8 from "/img/projects/project-2x-(8).jpg";
import photo9 from "/img/projects/project-1x-(9).jpg";
import src9 from "/img/projects/project-2x-(9).jpg";
import photo10 from "/img/projects/project-1x-(10).jpg";
import src10 from "/img/projects/project-2x-(10).jpg";
import icon from "/img/icons.svg";

let projects = [
    {
        img: photo,
        srcset: src,
        technology: "React, JavaScript, Node JS, Git",
        name: "starlight studio landing page"
    },
    {
        img: photo2,
        srcset: src2,
        technology: "React, JavaScript, Node JS, Git",
        name: "energy flow webservice"
    },
    {
        img: photo3,
        srcset: src3,
        technology: "React, JavaScript, Node JS, Git",
        name: "fruitbox online store"
    },
    {
        img: photo4,
        srcset: src4,
        technology: "React, JavaScript, Node JS, Git",
        name: "chego jewelry website"
    },
    {
        img: photo5,
        srcset: src5,
        technology: "React, JavaScript, Node JS, Git",
        name: "mimino website"
    },
    {
        img: photo6,
        srcset: src6,
        technology: "React, JavaScript, Node JS, Git",
        name: "vyshyvanka vibes Landing Page"
    },
    {
        img: photo7,
        srcset: src7,
        technology: "React, JavaScript, Node JS, Git",
        name: "green harvest online store"
    },
    {
        img: photo8,
        srcset: src8,
        technology: "React, JavaScript, Node JS, Git",
        name: "power pulse webservice"
    },
    {
        img: photo9,
        srcset: src9,
        technology: "React, JavaScript, Node JS, Git",
        name: "wallet webservice"
    },
    {
        img: photo10,
        srcset: src10,
        technology: "React, JavaScript, Node JS, Git",
        name: "English excellence webservice"
    }
]

let loadedProjects = 0;
const projectsPerPage = 3;
const galleryProject = document.getElementById('gallery-project');
const loadMoreBtn = document.getElementById('loadMoreBtn');


function renderProjects(start, end) {
    const fragment = document.createDocumentFragment();
    
    for (let i = start; i < end; i++) {
        if (!projects[i]) break;

        const project = projects[i];
        const imgCard = document.createElement('div');
        imgCard.classList.add('gallery-project-item');
        imgCard.innerHTML = `      
            <img src="${project.img}" srcset="${project.img} 1x, ${project.srcset} 2x" alt="${project.name}" loading="lazy" class="img-projects">    
            <div class="info-projects">
                <p class="technology-projects">${project.technology}</p>
                <h3 class="project-name">${project.name}</h3>
            </div>
            <a href="${project.img}" class="gallery-project-link">
                <div class="visit-container">
                    <button class="visit-btn" type="button">Visit
                        <svg class="svg-projects" width="22" height="22">
                            <use href="${icon}#icon-arrow"></use>
                        </svg>
                    </button>
                </div>
            </a>
        `;
        fragment.appendChild(imgCard);
    }

    galleryProject.appendChild(fragment);
}

function loadMoreProjects() {
    const start = loadedProjects;
    const end = Math.min(loadedProjects + projectsPerPage, projects.length);
    renderProjects(start, end);
    loadedProjects = end;

    const { height: cardHeight } = galleryProject.firstElementChild.getBoundingClientRect();
    window.scrollBy({ top: cardHeight * 1.25, behavior: "smooth" });

    if (loadedProjects >= projects.length) {
        loadMoreBtn.style.display = 'none';
    }
}

function initialRender() {
    const start = loadedProjects;
    const end = Math.min(loadedProjects + projectsPerPage, projects.length);
    renderProjects(start, end);
    loadedProjects = end;

    if (loadedProjects >= projects.length) {
        loadMoreBtn.style.display = 'none';
    }
}

initialRender();

loadMoreBtn.addEventListener('click', loadMoreProjects);
