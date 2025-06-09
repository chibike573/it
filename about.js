const navbar=document.querySelector('.nav2')

const menu=document.querySelector('.menu')

menu.addEventListener('click', ()=>{
  navbar.classList.toggle('nav3')
})

const closebutton=document.querySelector('.nav2 button')

closebutton.addEventListener('click', ()=>{
  navbar.classList.toggle('nav3')

})

const abcon=document.querySelector('.exp')
const obs=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if (entry.isIntersecting) {
      entry.target.classList.add('exp2')
    obs.unobserve(entry.target)

    }

  })
})

obs.observe(abcon)






const tPercentage=document.querySelector('.trans-per')
const tRate=document.querySelector('.trans-rate')
let trans=0;


const transid =setInterval(() => {
  trans++

  tPercentage.innerHTML=`${trans}%`
  tRate.style.width=`${trans}%` 
  if (trans===100) {
    clearInterval(transid)
  }
}, 100);


const supportPercentage=document.querySelector('.sup-per')
const supportRate=document.querySelector('.sup-rate')
let sp=0;


const spid =setInterval(() => {
  sp++

  supportPercentage.innerHTML=`${sp}%`
  supportRate.style.width=`${sp}%` 
  if (sp===98) {
    clearInterval(spid)
  }
}, 100);






const dilPercentage=document.querySelector('.dil-per')
const dilRate=document.querySelector('.dil-rate')
let dil=0;


const dilid =setInterval(() => {
  dil++

  dilPercentage.innerHTML=`${dil}%`
  dilRate.style.width=`${dil}%` 
  if (dil===82) {
    clearInterval(dilid)
  }
}, 100);