'use strict';

let projects = [
    {
        img: "img/projects/project-1x-(1).jpg",
        srcset: "img/projects/project-1x-(1).jpg 1x, img/projects/project-2x-(1).jpg 2x",
        technology: "React, JavaScript, Node JS, Git",
        name: "starlight studio landing page"
    },
    {
        img: "img/projects/project-1x-(2).jpg",
        srcset: "img/projects/project-1x-(2).jpg 1x, img/projects/project-2x-(2).jpg 2x",
        technology: "React, JavaScript, Node JS, Git",
        name: "energy flow webservice"
    },
    {
        img: "img/projects/project-1x-(3).jpg",
        srcset: "img/projects/project-1x-(3).jpg 1x, img/projects/project-2x-(3).jpg 2x",
        technology: "React, JavaScript, Node JS, Git",
        name: "fruitbox online store"
    },
    {
        img: "img/projects/project-1x-(4).jpg",
        srcset: "img/projects/project-1x-(4).jpg 1x, img/projects/project-2x-(4).jpg 2x",
        technology: "React, JavaScript, Node JS, Git",
        name: "chego jewelry website"
    },
    {
        img: "img/projects/project-1x-(5).jpg",
        srcset: "img/projects/project-1x-(5).jpg 1x, img/projects/project-2x-(5).jpg 2x",
        technology: "React, JavaScript, Node JS, Git",
        name: "mimino website"
    },
    {
        img: "img/projects/project-1x-(6).jpg",
        srcset: "img/projects/project-1x-(6).jpg 1x, img/projects/project-2x-(6).jpg 2x",
        technology: "React, JavaScript, Node JS, Git",
        name: "vyshyvanka vibes Landing Page"
    },
    {
        img: "img/projects/project-1x-(7).jpg",
        srcset: "img/projects/project-1x-(7).jpg 1x, img/projects/project-2x-(7).jpg 2x",
        technology: "React, JavaScript, Node JS, Git",
        name: "green harvest online store"
    },
    {
        img: "img/projects/project-1x-(8).jpg",
        srcset: "img/projects/project-1x-(8).jpg 1x, img/projects/project-2x-(8).jpg 2x",
        technology: "React, JavaScript, Node JS, Git",
        name: "power pulse webservice"
    },
    {
        img: "img/projects/project-1x-(9).jpg",
        srcset: "img/projects/project-1x-(9).jpg 1x, img/projects/project-2x-(9).jpg 2x",
        technology: "React, JavaScript, Node JS, Git",
        name: "wallet webservice"
    },
    {
        img: "img/projects/project-1x-(10).jpg",
        srcset: "img/projects/project-1x-(10).jpg 1x, img/projects/project-2x-(10).jpg 2x",
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
            <img src="${project.img}" srcset="${project.srcset}" alt="${project.name}" loading="lazy" class="img-projects">    
            <div class="info-projects">
                <p class="technology-projects">${project.technology}</p>
                <h3 class="project-name">${project.name}</h3>
            </div>
            <a href="${project.img}" class="gallery-project-link">
                <div class="visit-container">
                    <button class="visit-btn" type="button">Visit
                        <svg class="svg-projects" width="24" height="24">
                            <use href="/img/icons.svg#icon-arrow-diagonal"></use>
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
