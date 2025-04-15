


const showbtn=document.querySelector(".show-btn");
const closebtn=document.querySelector(".close-btn");
const bgoverlay=document.querySelector(".bg-overlay");
const model=document.querySelector(".model");

showbtn.addEventListener("click",function(){
    bgoverlay.style.display="flex";
    model.classList.add("active")
});
closebtn.addEventListener("click",function(){
    bgoverlay.style.display="none";
    model.classList.remove("active")
})