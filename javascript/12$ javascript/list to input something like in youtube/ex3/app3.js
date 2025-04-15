const container=document.querySelector(".container");
const counttext=document.querySelector(".count-text");

document.addEventListener("DOMContentLoaded",function(){
    const ul=document.createElement("ul");
    const add=document.querySelector(".add");
    const clears=document.querySelector(".clear");
    ul.className="list"
    container.insertBefore(ul,counttext);
    add.addEventListener("click",addtext);
    ul.addEventListener("click",deletetext);
    clears.addEventListener("click",clearAll)
    showalltext();
    
});
function addtext(event){
    event.preventDefault();
    const input=document.querySelector(".input");
    const ul=document.querySelector(".list");
    const li=document.createElement("li");
    if(!input.value.trim()){
        alert("Add text broooo..........!!")
        input.focus();
    }else{

        li.innerHTML=`${input.value}<i class="fa-solid fa-xmark"></i>`
        ul.appendChild(li);
    }
    input.value="";
    showalltext();
}

function deletetext(event){
    // console.dir(event.target)
    if(event.target.tagName==="LI"){
        event.target.classList.toggle("complete");
    }
    if(event.target.tagName==="I"){
        event.target.parentElement.remove();
        showalltext();
    }
}
function clearAll(){
    const ul=document.querySelector(".list");
    ul.innerHTML="";
    showalltext();
}
function showalltext(){
    const counts=document.querySelector(".list").childElementCount;
    const verb=counts>1?"are":"is";
    const count=counts>0?counts:"no such";
    const singleplural=counts>1?"s":"";
    counttext.textContent=`There ${verb} ${count} item${singleplural}`


}