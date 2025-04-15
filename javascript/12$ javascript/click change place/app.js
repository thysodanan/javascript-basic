const boxs=document.querySelectorAll(".box");
let startx=0;
let starty=0;
boxs.forEach(function(box){

    box.addEventListener("mousedown",function(e){
       document.addEventListener("mousemove",function(e){
        box.style.top=`${e.clientY}px`;
        box.style.left=`${e.clientX}px`;
       });
    });
});