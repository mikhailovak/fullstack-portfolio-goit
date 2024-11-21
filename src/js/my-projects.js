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




// Reviews




import axios from 'axios';
import Swiper from 'swiper';



const reviewsGallery = document.querySelector('#reviewsGallery');
const swiperButtonNext = document.querySelector('.swiper-button-next');

let reviews = [];
let currentReviewIndex = 0;
let swiper;

const fetchReviews = async () => {
  try {
    console.log('Sending request to API...');
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
    console.log('Response data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};

const createReviewItem = ({ author, avatar_url, review }) => `
  <div class="swiper-slide">
    <div class="reviews-gallery-item">
      <img src="${avatar_url}" alt="Avatar of ${author}" class="avatar">
      <h3>${author}</h3>
      <p>${review}</p>
    </div>
  </div>
`;

const loadNextReview = () => {
  if (currentReviewIndex < reviews.length) {
    const reviewHTML = createReviewItem(reviews[currentReviewIndex]);
    reviewsGallery.insertAdjacentHTML('beforeend', reviewHTML);
    if (swiper) {
      swiper.update(); 
    }
    currentReviewIndex++;
  } else {
    swiperButtonNext.disabled = true; 
    swiperButtonNext.classList.add('swiper-button-disabled');
  }
};



const loadReviews = async () => {
  if (!reviewsGallery) {
    console.error('reviewsGallery not found in DOM');
    return;
  }

  reviews = await fetchReviews();

  if (reviews.length === 0) {
    reviewsGallery.innerHTML = '<p>No reviews available.</p>';
    return;
  }

  
    loadNextReview();
    
  
  swiperButtonNext.addEventListener('click', loadNextReview);
};

window.addEventListener('DOMContentLoaded', loadReviews);
