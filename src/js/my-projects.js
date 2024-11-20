'use strict';

let projects = [
    {
        img: "../img/projects/Project-1.jpg",
        technology: "React, JavaScript, Node JS, Git",
        name: "starlight studio landing page"
    },
    {
        img: "../img/projects/Project-2.jpg",
        technology: "React, JavaScript, Node JS, Git",
        name: "energy flow webservice"
    },
    {
        img: "../img/projects/Project-3.jpg",
        technology: "React, JavaScript, Node JS, Git",
        name: "fruitbox online store"
    },
    {
        img: "../img/projects/Project-4.jpg",
        technology: "React, JavaScript, Node JS, Git",
        name: "chego jewelry website"
    },
    {
        img: "../img/projects/Project-5.jpg",
        technology: "React, JavaScript, Node JS, Git",
        name: "mimino website"
    },
    {
        img: "../img/projects/Project-6.jpg",
        technology: "React, JavaScript, Node JS, Git",
        name: "vyshyvanka vibes Landing Page"
    },
    {
        img: "../img/projects/Project-7.jpg",
        technology: "React, JavaScript, Node JS, Git",
        name: "green harvest online store"
    },
    {
        img: "../img/projects/Project-8.jpg",
        technology: "React, JavaScript, Node JS, Git",
        name: "power pulse webservice"
    },
    {
        img: "../img/projects/Project-9.jpg",
        technology: "React, JavaScript, Node JS, Git",
        name: "wallet webservice"
    },
    {
        img: "../img/projects/Project-10.jpg",
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
            <a href="${project.img}" class="gallery-project-link">
                <img src="${project.img}" alt="${project.name}" loading="lazy" class="img-projects">
            </a>
            <div class="info">
                <p class="technology-projects">${project.technology}</p>
                <h3 class="project-name">${project.name}</h3>
            </div>
            <div class="visit-container">
                <button class="visit-btn" type="button">Visit</button>
            </div>
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

loadMoreProjects();

loadMoreBtn.addEventListener('click', loadMoreProjects);