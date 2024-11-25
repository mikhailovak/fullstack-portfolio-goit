'use strict';

// Reviews

import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const reviewsGallery = document.querySelector('#reviewsGallery');

let swiper;
let reviews = [];

// Fetch reviews from the API
const fetchReviews = async () => {
  try {
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
    console.log('Fetched reviews:', response.data); 
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw new Error('Failed to fetch reviews'); 
  }
};

// Create the HTML for a single review slide
const createReviewItem = ({ author, avatar_url, review }) => `
  <li class="swiper-slide">
    <div class="reviews-gallery-item">
      <p class="reviews-gallery-txt">${review}</p>
      <div class="gallery-item-person">
        <img src="${avatar_url}" alt="Avatar of ${author}" class="avatar" width="40" height="40">
        <h4>${author}</h4>
      </div>
    </div>
  </li>
`;


const loadReviews = async () => {
  try {
    reviews = await fetchReviews();

    if (reviews.length === 0) {
      reviewsGallery.innerHTML = '<p class="not-found">Not found</p>';
      return;
    }

    console.log('Adding reviews to the DOM...');
    reviews.forEach(review => {
      const reviewHTML = createReviewItem(review);
      reviewsGallery.insertAdjacentHTML('beforeend', reviewHTML);
    });

    console.log('ReviewsGallery content:', reviewsGallery.innerHTML);

    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      slidesPerView: 1,
      speed: 800,
      mousewheel: {
        sensitivity: 5,
        EventsTarget: ".swiper"
      },
      breakpoints: {
        1200: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
      },
      on: {
        reachEnd: () => {
          document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        },
        reachBeginning: () => {
          document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
        },
        fromEdge: () => {
          document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
          document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
        },
      },
    });

    console.log('Swiper initialized:', swiper);
  } catch (error) {
    alert('An error occurred while fetching reviews: ' + error.message); 
      reviewsGallery.innerHTML = '<p class="not-found">Not found</p>'; 
    // The paragraph is in the specifications
  }
};

window.addEventListener('DOMContentLoaded', loadReviews);

