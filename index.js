(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();let a=[{img:"./img/projects/Project-1.jpg",technology:"React, JavaScript, Node JS, Git",name:"starlight studio landing page"},{img:"./img/projects/Project-2.jpg",technology:"React, JavaScript, Node JS, Git",name:"energy flow webservice"},{img:"./img/projects/Project-3.jpg",technology:"React, JavaScript, Node JS, Git",name:"fruitbox online store"},{img:"./img/projects/Project-4.jpg",technology:"React, JavaScript, Node JS, Git",name:"chego jewelry website"},{img:"./img/projects/Project-5.jpg",technology:"React, JavaScript, Node JS, Git",name:"mimino website"},{img:"./img/projects/Project-6.jpg",technology:"React, JavaScript, Node JS, Git",name:"vyshyvanka vibes Landing Page"},{img:"./img/projects/Project-7.jpg",technology:"React, JavaScript, Node JS, Git",name:"green harvest online store"},{img:"./img/projects/Project-8.jpg",technology:"React, JavaScript, Node JS, Git",name:"power pulse webservice"},{img:"./img/projects/Project-9.jpg",technology:"React, JavaScript, Node JS, Git",name:"wallet webservice"},{img:"./img/projects/Project-10.jpg",technology:"React, JavaScript, Node JS, Git",name:"English excellence webservice"}],n=0;const m=3,l=document.getElementById("gallery-project"),g=document.getElementById("loadMoreBtn");function p(i,o){const c=document.createDocumentFragment();for(let r=i;r<o&&a[r];r++){const e=a[r],t=document.createElement("div");t.classList.add("gallery-project-item"),t.innerHTML=`
            <a href="${e.img}" class="gallery-project-link">
                <img src="${e.img}" alt="${e.name}" loading="lazy" class="img-projects">
            </a>
            <div class="info">
                <p class="technology-projects">${e.technology}</p>
                <h3 class="project-name">${e.name}</h3>
            </div>
            <div class="visit-container">
                <button class="visit-btn" type="button">Visit</button>
            </div>
        `,c.appendChild(t)}l.appendChild(c)}function d(){const i=n,o=Math.min(n+m,a.length);p(i,o),n=o;const{height:c}=l.firstElementChild.getBoundingClientRect();window.scrollBy({top:c*1.25,behavior:"smooth"}),n>=a.length&&(g.style.display="none")}d();g.addEventListener("click",d);
//# sourceMappingURL=index.js.map