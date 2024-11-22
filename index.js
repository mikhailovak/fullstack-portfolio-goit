(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();let n=[{img:"img/projects/project-1x-(1).jpg",srcset:"img/projects/project-1x-(1).jpg 1x, img/projects/project-2x-(1).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"starlight studio landing page"},{img:"img/projects/project-1x-(2).jpg",srcset:"img/projects/project-1x-(2).jpg 1x, img/projects/project-2x-(2).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"energy flow webservice"},{img:"img/projects/project-1x-(3).jpg",srcset:"img/projects/project-1x-(3).jpg 1x, img/projects/project-2x-(3).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"fruitbox online store"},{img:"img/projects/project-1x-(4).jpg",srcset:"img/projects/project-1x-(4).jpg 1x, img/projects/project-2x-(4).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"chego jewelry website"},{img:"img/projects/project-1x-(5).jpg",srcset:"img/projects/project-1x-(5).jpg 1x, img/projects/project-2x-(5).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"mimino website"},{img:"img/projects/project-1x-(6).jpg",srcset:"img/projects/project-1x-(6).jpg 1x, img/projects/project-2x-(6).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"vyshyvanka vibes Landing Page"},{img:"img/projects/project-1x-(7).jpg",srcset:"img/projects/project-1x-(7).jpg 1x, img/projects/project-2x-(7).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"green harvest online store"},{img:"img/projects/project-1x-(8).jpg",srcset:"img/projects/project-1x-(8).jpg 1x, img/projects/project-2x-(8).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"power pulse webservice"},{img:"img/projects/project-1x-(9).jpg",srcset:"img/projects/project-1x-(9).jpg 1x, img/projects/project-2x-(9).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"wallet webservice"},{img:"img/projects/project-1x-(10).jpg",srcset:"img/projects/project-1x-(10).jpg 1x, img/projects/project-2x-(10).jpg 2x",technology:"React, JavaScript, Node JS, Git",name:"English excellence webservice"}],i=0;const g=3,l=document.getElementById("gallery-project"),p=document.getElementById("loadMoreBtn");function j(c,t){const r=document.createDocumentFragment();for(let s=c;s<t&&n[s];s++){const e=n[s],o=document.createElement("div");o.classList.add("gallery-project-item"),o.innerHTML=`      
            <img src="${e.img}" srcset="${e.srcset}" alt="${e.name}" loading="lazy" class="img-projects">    
            <div class="info-projects">
                <p class="technology-projects">${e.technology}</p>
                <h3 class="project-name">${e.name}</h3>
            </div>
            <a href="${e.img}" class="gallery-project-link">
                <div class="visit-container">
                    <button class="visit-btn" type="button">Visit
                        <svg class="svg-projects" width="24" height="24">
                            <use href="/img/icons.svg#icon-arrow-diagonal"></use>
                        </svg>
                    </button>
                </div>
            </a>
        `,r.appendChild(o)}l.appendChild(r)}function f(){const c=i,t=Math.min(i+g,n.length);j(c,t),i=t;const{height:r}=l.firstElementChild.getBoundingClientRect();window.scrollBy({top:r*1.25,behavior:"smooth"}),i>=n.length&&(p.style.display="none")}function h(){const c=i,t=Math.min(i+g,n.length);j(c,t),i=t,i>=n.length&&(p.style.display="none")}h();p.addEventListener("click",f);(()=>{const c={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),navLinks:document.querySelectorAll(".nav-menu-link")};c.openModalBtn.addEventListener("click",t),c.closeModalBtn.addEventListener("click",t),c.navLinks.forEach(r=>{r.addEventListener("click",s=>{s.preventDefault();const e=r.getAttribute("href");if(e&&e.startsWith("#")){const o=document.querySelector(e);o&&(c.modal.classList.remove("is-open"),o.scrollIntoView({behavior:"smooth",block:"start"}))}})});function t(){c.modal.classList.toggle("is-open")}})();const d="/fullstack-portfolio-goit/assets/project-1x-(1)-D0rxAv7l.jpg",x="/fullstack-portfolio-goit/assets/icons-BMAn3I_a.svg",m=document.querySelector(".unordered-list-test");function u(c,t){m.insertAdjacentHTML(c,`
        <li class="fotka-test">
            <img src="${t}" alt="fotka" />
        </li>`)}u("beforeend",d);u("beforeend",d);function v(c,t){m.insertAdjacentHTML(c,`
        <li class="svg-test">
        <svg class="svg-icon-test" width="20" height="20">
            <use href="${t}#icon-light"></use>
                        </svg>
        </li>`)}v("beforeend",x);
//# sourceMappingURL=index.js.map