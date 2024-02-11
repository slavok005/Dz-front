let user = {
    userName: 'Slava',
    age: 40
}
let {userName, age} = user //десруктуризация объекта
console.log(age);
console.log(`Привет ${userName}!\nТебе ${age} лет`);