//Домашнее задание 9. (после 22 урока)
// Решить следующие задачи:

// Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.

// const square = document.querySelector(".square");
// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   square.style.backgroundColor = "green";
//   square.style.width = "100px";
//   square.style.height = "100px";
// });

// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку менять цвет на синий и выводить в консоль обновленный цвет квадрата.


// const square = document.querySelector(".square");
// const button = document.querySelector("button");

// button.addEventListener("click", function () {
//   square.style.backgroundColor = "blue";
//   console.log(square.style.backgroundColor)
// });

// Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

//  const square = document.querySelector(".square");
// const button = document.querySelector("button");
//  button.addEventListener("click", function() {
//   square.style.width = "220px";
//   square.style.height = "220px";
//     })




// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.

// const root = document.querySelector(".root")
// const button = document.querySelector("button")


// button.addEventListener("click", function () {
// root.innerHTML=""
// root.innerHTML += "<p>А вот вам и синий цвет :)</p>"
// root.style.color = "blue"
// })
// Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const root = document.querySelector(".root")
const button = document.querySelector("button")
let color = "blue"

button.addEventListener("click", function() {
root.innerHTML = ""
root.innerHTML += "<p>А вот вам и синий цвет :)  и зеленый </p>"
root.style.color = color;

if(color === "blue") {
color = "green";
} else {
  color = "blue";
}
 })
