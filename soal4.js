user = {
    id: 6, name: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age:
        19, scores: { english: 10, math: 19.5, physics: 14 },
};


// let addNewCourse = (user, lesson, score) => {
//     let newScore = {}
//     newScore[lesson] = score
//     newUser = { ...user, scores: { ...user.scores, ...newScore } };
//     return newUser
// }

let addNewCourse = (user, newScore) => {

  return  { ...user, scores: { ...user.scores, ...newScore } };
     
}

let addNewRole = (user,role) => {

    return {...user,  roles : [...user.roles, role], status: user.age < 18 ?  "very-young" :  "enough"}
                 
}


let converToArray = (user) => {

let newUser = Object.entries(user);
newUser = [...newUser , ["fatherName", "Ali"]];
newUser = Object.fromEntries(newUser);

return newUser

}








// console.log(addNewCourse(user, {Psychology: 18}));
// console.log(addNewRole(user,"Secretary"))
console.log(converToArray(user))
console.log(user)
