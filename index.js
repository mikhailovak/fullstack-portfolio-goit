(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let s=[{img:"./img/projects/Project-1.jpg",technology:"React, JavaScript, Node JS, Git",name:"starlight studio landing page"},{img:"./img/projects/Project-2.jpg",technology:"React, JavaScript, Node JS, Git",name:"energy flow webservice"},{img:"./img/projects/Project-3.jpg",technology:"React, JavaScript, Node JS, Git",name:"fruitbox online store"},{img:"./img/projects/Project-4.jpg",technology:"React, JavaScript, Node JS, Git",name:"chego jewelry website"},{img:"./img/projects/Project-5.jpg",technology:"React, JavaScript, Node JS, Git",name:"mimino website"},{img:"./img/projects/Project-6.jpg",technology:"React, JavaScript, Node JS, Git",name:"vyshyvanka vibes Landing Page"},{img:"./img/projects/Project-7.jpg",technology:"React, JavaScript, Node JS, Git",name:"green harvest online store"},{img:"./img/projects/Project-8.jpg",technology:"React, JavaScript, Node JS, Git",name:"power pulse webservice"},{img:"./img/projects/Project-9.jpg",technology:"React, JavaScript, Node JS, Git",name:"wallet webservice"},{img:"./img/projects/Project-10.jpg",technology:"React, JavaScript, Node JS, Git",name:"English excellence webservice"}],i=0;const g=3,d=document.getElementById("gallery-project"),l=document.getElementById("loadMoreBtn");function p(c,o){const n=document.createDocumentFragment();for(let r=c;r<o&&s[r];r++){const e=s[r],t=document.createElement("div");t.classList.add("gallery-project-item"),t.innerHTML=`           
            <img src="${e.img}" alt="${e.name}" loading="lazy" class="img-projects">           
            <div class="info-projects">
                <p class="technology-projects">${e.technology}</p>
                <h3 class="project-name">${e.name}</h3>
            </div>
            <a href="${e.img}" class="gallery-project-link">
                <div class="visit-container">
                    <button class="visit-btn" type="button">Visit
                        <svg class="svg-projects" width="24" height="24">
                            <use href="./img/icons.svg#icon-arrow-diagonal"></use>
                        </svg>
                    </button>
                </div>
            </a>
        `,n.appendChild(t)}d.appendChild(n)}function m(){const c=i,o=Math.min(i+g,s.length);p(c,o),i=o;const{height:n}=d.firstElementChild.getBoundingClientRect();window.scrollBy({top:n*1.25,behavior:"smooth"}),i>=s.length&&(l.style.display="none")}function j(){const c=i,o=Math.min(i+g,s.length);p(c,o),i=o,i>=s.length&&(l.style.display="none")}j();l.addEventListener("click",m);
//# sourceMappingURL=index.js.map
