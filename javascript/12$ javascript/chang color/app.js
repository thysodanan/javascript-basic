const color=["red","blue","rebeccapurple","purple","yellow","pink","darkorange"];
const btn=document.querySelector(".btn");
// btn.addEventListener("click",function(){
//     const you=Math.floor(Math.random()*5);
//     document.body.style.background=color[you]
// })
function change(){
    return Math.floor(Math.random()*color.length)
}
document.body.addEventListener("click",function(){
    const you=change();
    document.body.style.background=color[you]
    // document.body.style.color=color[you]
    console.log(you)
})
