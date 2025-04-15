// const div=document.querySelector(".user");





// const user=[
//     {name:"Thy sodanan",
//         age:19,
//         email:"thy sodanan"
//     },
//     {name:"Thy sodanan",
//         age:19,
//         email:"thy sodanan"
//     },
//     {name:"Thy sodanan",
//         age:19,
//         email:"thy sodanan"
//     },
//     {name:"Thy sodanan",
//         age:19,
//         email:"thy sodanan"
//     },
// ];


// document.body.innerHTML=` <div class="user">
//         <h4>${user[0].name} </h4>
//         <p>${user[0].age}  years</p>
//         <p>${user[0].email}</p>
//     </div>`

// console.log(div)





// const div=document.querySelector(".container");
// console.log(div)

const user=[
    {name:"thy sodanan",age:19,major:"IT"},
    {name:"reaksa",age:45,major:"translator"},
    {name:"jie min",age:45,major:"acouting"},
    {name:"thy sodanan",age:19,major:"IT"},
    {name:"reaksa",age:45,major:"translator"},
    {name:"jie min",age:45,major:"acouting"},
];


const newUser=user.map(function(newUser){
    return `<div class="user">
            <h3>${newUser.name}</h3>
            <p>${newUser.age}yease old</p>
            <h3>${newUser.major}</h3>
        </div>`;
})
// div.innerHTML=newUser;
document.body.innerHTML=newUser


