import{S as v,a as w,A as y}from"./assets/vendor-CYbmqkW-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const j="/fullstack-portfolio-goit/assets/project-1x-(1)-D0rxAv7l.jpg",b="/fullstack-portfolio-goit/assets/project-2x-(1)-ClJKbZCz.jpg",S="/fullstack-portfolio-goit/assets/project-1x-(2)-DbADQU3y.jpg",x="/fullstack-portfolio-goit/assets/project-2x-(2)-Cj69THue.jpg",k="/fullstack-portfolio-goit/assets/project-1x-(3)-aItMGCtE.jpg",L="/fullstack-portfolio-goit/assets/project-2x-(3)-FqiuRYjK.jpg",J="/fullstack-portfolio-goit/assets/project-1x-(4)-B8B894Wj.jpg",M="/fullstack-portfolio-goit/assets/project-2x-(4)-FLgWhimk.jpg",E="/fullstack-portfolio-goit/assets/project-1x-(5)-DgFTMQvJ.jpg",R="/fullstack-portfolio-goit/assets/project-2x-(5)-D7yGaJdu.jpg",B="/fullstack-portfolio-goit/assets/project-1x-(6)-iiX1jDuM.jpg",G="/fullstack-portfolio-goit/assets/project-2x-(6)-Cycpnzpx.jpg",P="/fullstack-portfolio-goit/assets/project-1x-(7)-QZ9ZnrC4.jpg",C="/fullstack-portfolio-goit/assets/project-2x-(7)-BkbkmjAd.jpg",N="/fullstack-portfolio-goit/assets/project-1x-(8)-DW69YO_2.jpg",q="/fullstack-portfolio-goit/assets/project-2x-(8)-SxwPURlh.jpg",A="/fullstack-portfolio-goit/assets/project-1x-(9)-Cafyu-PJ.jpg",D="/fullstack-portfolio-goit/assets/project-2x-(9)-DVjCwhIU.jpg",I="/fullstack-portfolio-goit/assets/project-1x-(10)-D-lTsh1Y.jpg",$="/fullstack-portfolio-goit/assets/project-2x-(10)-B1s3AvHj.jpg",O="/fullstack-portfolio-goit/assets/icons-BMAn3I_a.svg";let n=[{img:j,srcset:b,technology:"React, JavaScript, Node JS, Git",name:"starlight studio landing page"},{img:S,srcset:x,technology:"React, JavaScript, Node JS, Git",name:"energy flow webservice"},{img:k,srcset:L,technology:"React, JavaScript, Node JS, Git",name:"fruitbox online store"},{img:J,srcset:M,technology:"React, JavaScript, Node JS, Git",name:"chego jewelry website"},{img:E,srcset:R,technology:"React, JavaScript, Node JS, Git",name:"mimino website"},{img:B,srcset:G,technology:"React, JavaScript, Node JS, Git",name:"vyshyvanka vibes Landing Page"},{img:P,srcset:C,technology:"React, JavaScript, Node JS, Git",name:"green harvest online store"},{img:N,srcset:q,technology:"React, JavaScript, Node JS, Git",name:"power pulse webservice"},{img:A,srcset:D,technology:"React, JavaScript, Node JS, Git",name:"wallet webservice"},{img:I,srcset:$,technology:"React, JavaScript, Node JS, Git",name:"English excellence webservice"}],c=0;const f=3,m=document.getElementById("gallery-project"),d=document.getElementById("loadMoreBtn");function h(t,o){const r=document.createDocumentFragment();for(let i=t;i<o&&n[i];i++){const e=n[i],s=document.createElement("div");s.classList.add("gallery-project-item"),s.innerHTML=`      
            <img src="${e.img}" srcset="${e.img} 1x, ${e.srcset} 2x" alt="${e.name}" loading="lazy" class="img-projects">    
            <div class="info-projects">
                <p class="technology-projects">${e.technology}</p>
                <h3 class="project-name">${e.name}</h3>
            </div>
            <a href="${e.img}" class="gallery-project-link">
                <div class="visit-container">
                    <button class="visit-btn" type="button">Visit
                        <svg class="svg-projects" width="22" height="22">
                            <use href="${O}#icon-arrow"></use>
                        </svg>
                    </button>
                </div>
            </a>
        `,r.appendChild(s)}m.appendChild(r)}function T(){const t=c,o=Math.min(c+f,n.length);h(t,o),c=o;const{height:r}=m.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*1.25,behavior:"smooth"}),c>=n.length&&(d.style.display="none")}function H(){const t=c,o=Math.min(c+f,n.length);h(t,o),c=o,c>=n.length&&(d.style.display="none")}H();d.addEventListener("click",T);const l=document.querySelector("#reviewsGallery");let g,p=[];const F=async()=>{try{const t=await w.get("https://portfolio-js.b.goit.study/api/reviews");return console.log("Fetched reviews:",t.data),t.data}catch(t){throw console.error("Error fetching reviews:",t),new Error("Failed to fetch reviews")}},V=({author:t,avatar_url:o,review:r})=>`
  <li class="swiper-slide">
    <div class="reviews-gallery-item">
      <p class="reviews-gallery-txt">${r}</p>
      <div class="gallery-item-person">
        <img src="${o}" alt="Avatar of ${t}" class="avatar" width="40" height="40">
        <h4>${t}</h4>
      </div>
    </div>
  </li>
`,z=async()=>{try{if(p=await F(),p.length===0){l.innerHTML='<p class="not-found">Not found</p>';return}console.log("Adding reviews to the DOM..."),p.forEach(t=>{const o=V(t);l.insertAdjacentHTML("beforeend",o)}),console.log("ReviewsGallery content:",l.innerHTML),g=new v(".swiper",{direction:"horizontal",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},scrollbar:{el:".swiper-scrollbar",draggable:!0},keyboard:{enabled:!0,onlyInViewport:!1},slidesPerView:1,speed:800,mousewheel:{sensitivity:5,EventsTarget:".swiper"},breakpoints:{1200:{slidesPerView:2,spaceBetween:20,slidesPerGroup:2}},on:{reachEnd:()=>{document.querySelector(".swiper-button-next").classList.add("swiper-button-disabled")},reachBeginning:()=>{document.querySelector(".swiper-button-prev").classList.add("swiper-button-disabled")},fromEdge:()=>{document.querySelector(".swiper-button-next").classList.remove("swiper-button-disabled"),document.querySelector(".swiper-button-prev").classList.remove("swiper-button-disabled")}}}),console.log("Swiper initialized:",g)}catch(t){alert("An error occurred while fetching reviews: "+t.message),l.innerHTML='<p class="not-found">Not found</p>'}};window.addEventListener("DOMContentLoaded",z);(()=>{const t={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".nav-menu-link")};t.openModalBtn.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o),t.navLinks.forEach(r=>{r.addEventListener("click",i=>{i.preventDefault();const e=r.getAttribute("href");if(e&&e.startsWith("#")){const s=document.querySelector(e);s&&(t.modal.classList.remove("is-open"),s.scrollIntoView({behavior:"smooth",block:"start"}))}})});function o(){t.modal.classList.toggle("is-open")}})();new y(".faq-list",{beforeOpen:u,beforeClose:u});function u(t){t.querySelector(".arrow-icon").classList.toggle("transform")}
//# sourceMappingURL=index.js.map
