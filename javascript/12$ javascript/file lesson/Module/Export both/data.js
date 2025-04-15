export const userdata=[
    {id:1,age:23},
    {id:2,age:23},
    {id:3,age:23},
];


export default function(data,age){
    return data.filter((user)=>user.age===age)
}



// export {userdata};
// export default filter;