// const heading=document.querySelector(".text");
// heading.textcontent="javascript";
// console.log(heading.textcontent);
// console.log(heading)
   


// const link=document.querySelector("a");
// const attValue=link.getAttribute("href");
// console.log(attValue)
// console.log(link)

// // const love=document.querySelector(".love")
// // love.setAttribute("class","red-text");
// // console.log(love)




// const h3=document.createElement("h3");
// document.body.appendChild(h3);
// console.log(h3)



// const div=document.createElement("div");
// document.body.append(div);
// console.log(div)



// const div1=document.createElement("div")
// div1.style.cssText="width:100px;height:100px;background-color:red;";
// document.body.append(div1)
// console.log(div1)




// const div=document.createElement("div");
// const p=document.createElement("p");
// p.setAttribute("class","love")
// div.append(p);
// document.body.append(div);
// console.log(div)



// // exersic
// const smartphone=["iPhone","oppo","vivo","Sony"];
// const ul=document.createElement("ul");
// for(let i=0;i<smartphone.length;i++){
//     const li=document.createElement("li");
//     li.textContent=smartphone[i];
//     ul.append(li);
// }
// document.body.append(ul);
// console.log(ul)





const name=["Nan","Sa","min"];
const ul=document.createElement("ul");
for(let i=0;i<name.length;i++){
    const li=document.createElement("li");
    li.textContent=name[i];
    ul.append(li)
}
document.body.append(ul);
console.log(ul)