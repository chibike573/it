
let tl = gsap.timeline({
  defaults: {
    duration: 1,
    opacity: 0,
    ease: "linear",
  },
});

tl.from(".childh1", {
  width: 0,
});

let tl2 = gsap.timeline({
  defaults: {
    duration: 1,
    opacity: 0,
    ease: "linear",
  },
});

tl2.fromTo(
  ".child2h1",
  {
    width: 0,
  },
  {
    width: "63rem",
    opacity: 1,
    delay: 5,
  }
);

tl2.fromTo(
  ".child2h4",
  {
    width: 0,
  },
  {
    width: "53rem",
    opacity: 1,
  }
);

const h4 = document.querySelector(".childh4");
const IB = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      IB.unobserve(entry.target);
    }
  });
});

IB.observe(h4);

const slides = document.querySelectorAll(".parent .child");
let slideindex = 0;
document.addEventListener("DOMContentLoaded", init());

function init() {
  if (slides.length > 0) {
    slides[slideindex].classList.add("view");

    setInterval(() => {
      next();
    }, 5000);
  }
}

function show(params) {
  if (params >= slides.length) {
    slideindex = 0;
  } else if (params < 0) {
    slideindex = slides.length - 1;
  }

  slides.forEach((s) => {
    s.classList.remove("view");
  });

  slides[slideindex].classList.add("view");
}

function next() {
  slideindex++;

  show(slideindex);
}

let prevscroll = window.scrollY;

window.addEventListener("scroll", () => {
  const info = document.querySelector(".info");

  const currscroll = window.scrollY;

  if (currscroll > prevscroll) {
    info.classList.add("info2");
  } else info.classList.remove("info2");

  prevscroll = currscroll;
});

const button = document.querySelector(".button");
const img = document.querySelector(".img");

img.addEventListener("mousemove", (e) => {
  button.style.opacity = 1;
  button.style.top = `${e.clientY}px`;
  button.style.left = `${e.clientX}px`;
  button.style.bottom = `${e.clientY}px`;
});

const grid = document.querySelector(".grid");

const obs3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("grid2");
      obs3.unobserve(entry.target);
    }
  });
});

obs3.observe(grid);

const satisfiedDiv = document.querySelector(".satisfied-client");
const deliveredDiv = document.querySelector(".Delivered-packages");
const goodsDiv = document.querySelector(".goods");

let satisfiedCostumers = 0;
let goods = 0;
let packagesDelivered = 0;

const satisfiedId = setInterval(() => {
  satisfiedCostumers += 20;
  satisfiedDiv.innerHTML = `
  <p class="number">${satisfiedCostumers}</p>
          <article>Satisfied Clients</article> 
  `;

  if (satisfiedCostumers >= 3500) {
    clearInterval(satisfiedId);
  }
}, 100);

const packagesId = setInterval(() => {
  packagesDelivered += 20;
  deliveredDiv.innerHTML = `
  <p class="number">${packagesDelivered}<sup>+</sup></p>
          <article>Packages Delivered</article> 
  `;

  if (packagesDelivered >= 5000) {
    clearInterval(packagesId);
  }
}, 100);

const goodsId = setInterval(() => {
  goods += 20;
  goodsDiv.innerHTML = `
  <p class="number">${goods}</p>

          <article>Ton Of Goods</article> 
  `;

  if (goods >= 4200) {
    clearInterval(goodsId);
  }
}, 100);


const testimonialSlider=document.querySelector('.clients-slider')
const testimonialSlides=document.querySelectorAll('.clients-slide')
let testimonialIndex=0;

function slideReport(params) {
  testimonialSlider.style.transform=`translateX(${-params *45}rem)`
}

setInterval(() => {
  testimonialIndex=(testimonialIndex + 1)%testimonialSlides.length

  slideReport(testimonialIndex)
}, 5000);


const cs=document.querySelectorAll('.clients2 .clients2-slide')
let csi=0;
document.addEventListener('DOMContentLoaded', cinit())
function cinit() {
  if (cs.length>0) {
  cs[csi].classList.add('cslides')

  setInterval(cnext, 5000);
    


  }
}



function cshow(params) {

  if (params>=cs.length) {
    csi=0
  } else if(params<0) {
    csi=cs.length
  }




  cs.forEach(sl=>{
    sl.classList.remove('cslides')
  })

  cs[csi].classList.add('cslides')
  
}

function cnext() {
  csi++

  cshow(csi)
}

const navbar=document.querySelector('.nav2')

const menu=document.querySelector('.menu')

menu.addEventListener('click', ()=>{
  navbar.classList.toggle('nav3')
})

const closebutton=document.querySelector('.nav2 button')

closebutton.addEventListener('click', ()=>{
  navbar.classList.toggle('nav3')

})








