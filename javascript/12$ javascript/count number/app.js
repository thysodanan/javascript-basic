const counter=document.getElementById("count");
const start=document.querySelector(".btn1");
const stopbtn=document.querySelector(".btn2");
let n=0;
let intervalid=null;
function counting(){
    counter.textContent=n;
    n++;
}
function startcounting(){
    if(intervalid!==null){
        clearInterval(intervalid)
    }
    intervalid = setInterval(counting,1000)
}
startcounting();

function stop(){
    clearInterval(intervalid)
}

stopbtn.addEventListener("click",stop)
start.addEventListener("click",startcounting)