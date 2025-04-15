const box=document.querySelector(".box");
console.log(box);
document.body.onclick=function(){
    if(box.classList.contains("hide")){
        box.classList.remove("hide");
    }else{
        box.classList.add("hide");
    }
}




// const box=document.querySelector(".box");
// console.log(box)


// document.body.scroll=function(){
//     if(box.classList.contains("hide")){
//         box.classList.remove("hide");
//     }else{
//         box.classList.add("hide");
//     }
// }
