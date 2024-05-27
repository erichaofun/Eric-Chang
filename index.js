let photoGallery=document.querySelector(".photo-gallery");
let backBtn=document.querySelector("#backbtn");
let nextBtn=document.querySelector("#nextbtn");


nextBtn.addEventListener("click",()=>{
    photoGallery.style.scrollBehavior="smooth";
    photoGallery.scrollLeft +=1500;

})


backBtn.addEventListener("click",()=>{
    photoGallery.style.scrollBehavior="smooth";
    photoGallery.scrollLeft -=1500;

})


const currentYear=new Date().getFullYear();
var Footer = document.getElementById("Footerp");
Footer.innerHTML = `Eric Chang &copy; ${currentYear} copyright reserved`;