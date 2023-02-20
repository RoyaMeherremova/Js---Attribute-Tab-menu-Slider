"use strict";


let btn =document.querySelector(".click button")
let modall =document.querySelector(".modals")
let icon =document.querySelector(".modals .title i")
let closeButon =document.querySelector(".modals .buttons .left")

btn.addEventListener("click",function(){
    modall.classList.remove("active")
    document.getElementById("overlay").style.display="block"
})
icon.addEventListener("click",function(){
    modall.classList.add("active")
    document.getElementById("overlay").style.display="none"
})
closeButon.addEventListener("click",function(){

    modall.classList.add("active")
})