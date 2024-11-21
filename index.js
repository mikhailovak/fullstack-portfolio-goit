(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();let s=[{img:"./img/projects/Project-1.jpg",technology:"React, JavaScript, Node JS, Git",name:"starlight studio landing page"},{img:"./img/projects/Project-2.jpg",technology:"React, JavaScript, Node JS, Git",name:"energy flow webservice"},{img:"./img/projects/Project-3.jpg",technology:"React, JavaScript, Node JS, Git",name:"fruitbox online store"},{img:"./img/projects/Project-4.jpg",technology:"React, JavaScript, Node JS, Git",name:"chego jewelry website"},{img:"./img/projects/Project-5.jpg",technology:"React, JavaScript, Node JS, Git",name:"mimino website"},{img:"./img/projects/Project-6.jpg",technology:"React, JavaScript, Node JS, Git",name:"vyshyvanka vibes Landing Page"},{img:"./img/projects/Project-7.jpg",technology:"React, JavaScript, Node JS, Git",name:"green harvest online store"},{img:"./img/projects/Project-8.jpg",technology:"React, JavaScript, Node JS, Git",name:"power pulse webservice"},{img:"./img/projects/Project-9.jpg",technology:"React, JavaScript, Node JS, Git",name:"wallet webservice"},{img:"./img/projects/Project-10.jpg",technology:"React, JavaScript, Node JS, Git",name:"English excellence webservice"}],i=0;const d=3,g=document.getElementById("gallery-project"),l=document.getElementById("loadMoreBtn");function m(n,o){const c=document.createDocumentFragment();for(let r=n;r<o&&s[r];r++){const e=s[r],t=document.createElement("div");t.classList.add("gallery-project-item"),t.innerHTML=`           
            <img src="${e.img}" alt="${e.name}" loading="lazy" class="img-projects">           
            <div class="info-projects">
                <p class="technology-projects">${e.technology}</p>
                <h3 class="project-name">${e.name}</h3>
            </div>
            <a href="${e.img}" class="gallery-project-link">
                <div class="visit-container">
                    <button class="visit-btn" type="button">Visit
                        <svg class="svg-projects" width="24" height="24">
                            <use href="img/icons.svg#icon-arrow-diagonal"></use>
                        </svg>
                    </button>
                </div>
            </a>
        `,c.appendChild(t)}g.appendChild(c)}function p(){const n=i,o=Math.min(i+d,s.length);m(n,o),i=o;const{height:c}=g.firstElementChild.getBoundingClientRect();window.scrollBy({top:c*1.25,behavior:"smooth"}),i>=s.length&&(l.style.display="none")}function u(){const n=i,o=Math.min(i+d,s.length);m(n,o),i=o,i>=s.length&&(l.style.display="none")}u();l.addEventListener("click",p);(()=>{const n={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".nav-menu-link")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o),n.navLinks.forEach(c=>{c.addEventListener("click",r=>{r.preventDefault();const e=c.getAttribute("href");if(e&&e.startsWith("#")){const t=document.querySelector(e);t&&(n.modal.classList.remove("is-open"),t.scrollIntoView({behavior:"smooth",block:"start"}))}})});function o(){n.modal.classList.toggle("is-open")}})();
//# sourceMappingURL=index.js.map
