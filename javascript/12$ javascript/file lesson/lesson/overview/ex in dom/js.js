// const heading=document.querySelector('.header');
// const bt=document.querySelector('.btn');
// console.log(heading,bt)
// bt.onclick=function(){
//     const headStyle=heading.style;
//     if(headStyle.display==="none"){
//         headStyle.display="block";
//     }else{
//         headStyle.display="none";
//     }
// }

const text=document.querySelector(".text");
const btn=document.querySelector(".btn");
console.log(text,btn)
btn.onclick=function(){
    if(text.style.display==="none"){
        text.style.display="block";
    }else{
        btn.classList.add("btn2");
        text.style.display="none";
    }
}