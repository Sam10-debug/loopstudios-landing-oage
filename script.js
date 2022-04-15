const hamburger=document.querySelector(".hamburger")
const close=document.querySelector(".close")
const hidden= document.querySelector(".hidden")
const showfunc=()=>{
    hidden.classList.toggle("active")
    // close.classList.toggle("active")
    console.log(9)
}
const closefunc=()=>{
   
    hidden.classList.remove("active")
}
close.addEventListener("click",closefunc)
hamburger.addEventListener("click",showfunc)