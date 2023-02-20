"use strict";


// let linkElement = document.querySelector("a")

// linkElement.getAttribute("href")  // getAttribute- atributun deyerini goturmey ucun

// linkElement.setAttribute("href","https://www.linkedin.com/")   //setAttribute  -atributu deyismey ucun

// console.log(linkElement.hasAttribute("href"))  //hasAttribute-hemin adda atribur varmi yoxmu yoxlayir true-false



// let btnGoogle = document.querySelector("button:nth-child(1")
// let btnLinkedin = document.querySelector("button:nth-child(2")


// btnGoogle.addEventListener("click",function(){                   //google butona basanda a-nin href link olsun google
//     linkElement.setAttribute("href","https://www.google.com/")
// })
// btnLinkedin.addEventListener("click",function(){
//     linkElement.setAttribute("href","https://www.linkedin.com/")    //linkedin butona basanda a-nin href link olsun linkedin
// })


// let headers =document.querySelectorAll(".tab-menu .header .item")

// let contents= document.querySelectorAll(".tab-menu .content .item")


// headers.forEach(element => {        //element=headers icindeki divler
//     element.addEventListener("click",function(){         
//         document.querySelector(".active").classList.remove("active")   //heryerden active clasin sil 
//         this.classList.add("active")   //bu elemente elave et

//         contents.forEach(content => {
//             if(content.getAttribute("data-id") == this.getAttribute("data-id")){    //this bize regular functionu verir -elementi
//                 content.classList.remove("d-none")

//             }
//             else{
//                 content.classList.add("d-none")
//             }

//         });
//     })


// });

// document.querySelector("a").removeAttribute("href")  //var olan atributu tagdan silmek ucun

// let nameInput =document.querySelector("#exampleInputEmail1")

// document.querySelector(".login-btn").addEventListener("click",function(){   //butona basanda inputun-valusunu elde etmek gelecekde
//     console.log(nameInput.value);                                            // backende gondermek ucun istifade oluna biler
// })

// let leftIcon = document.querySelector(".slider .left");

// let rightIcon = document.querySelector(".slider .right");

// function rightSlider() {       //saga basanda sekiler deyissin slider ucun - function
//     let activeImage = document.querySelector(".active");

//     if (activeImage.nextElementSibling != null) {        //eyer sekil varsa novbetine deyisdir
//         activeImage.classList.remove("active");
//         activeImage.nextElementSibling.classList.add("active")
//     } else {                                            //eyer sekiller bittise en birinci sekil gorunsun
//         activeImage.classList.remove("active");
//         activeImage.parentNode.firstElementChild.classList.add("active")
//     }
// }



// function leftSlider(){                          //sola basanda sekiler deyissin slider ucun -function
//     let activeImage = document.querySelector(".active");

//     if (activeImage.previousElementSibling != null) {        //eyer sekil varsa novbetine deyisdir
//         activeImage.classList.remove("active");
//         activeImage.previousElementSibling.classList.add("active")
//     } else {                                            //eyer sekiller bittise en sonuncu sekil gorunsun
//         activeImage.classList.remove("active");
//         activeImage.parentNode.lastElementChild.classList.add("active")
//     }
// }

// rightIcon.addEventListener("click", rightSlider);

// leftIcon.addEventListener("click",leftSlider);


// rightIcon.addEventListener("mouseover", rightSlider);     //right-icona toxunanda cevlirisin slider

// leftIcon.addEventListener("mouseover",leftSlider);        //left-icona toxunanda cevlirisin slider



// setInterval(() => {     //sliderin oz ozne deyismeyi ucun hazir function
//     rightSlider()       //hansi method islesin
// }, 2000);                //vaxt-saniye

