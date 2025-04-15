import users from "./data.js";

export default (data,age)=>{
    return users.filter((user)=>user.age===age)
}