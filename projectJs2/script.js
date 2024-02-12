// Обработка событий
// а.При нажатии на кнопку в консоли отображать "Клик"
// б. При нажатии 



// const button = document.querySelector(".btn") // поиск элемента
// const title = document.querySelector("h1") //поиск элемента h1
// const buttonMinus = document.querySelector(".btn-minus")
// const buttonReset = document.querySelector(".btn-reset")
// const pReset = document.querySelector(".p")
// let number = 0

// button.addEventListener("click", function() {
//     if(number === 10) { // Ограничение по числу  показывает только максимум 12
//         title.innerText = `${number} Это максимально допустимое значение`
//     } else {
//         number++ // number = number + 1
//         title.innerText = number // добавить текст number в h1
//     }
// })


// button.addEventListener("click",function() {
//     if(number === 10 ("Максимальное число")) 
//     title.innerText = `${number}` //добавить текст number в h1
//     else
//     number++ //number = number + 1 // прибавление кнопки плюс

    
// // })
//     buttonMinus.addEventListener("click", function(){
//         if(number > 0)
//         number --             // на уменьшение кнопки минус
//         title.innerText = number 
          
//     })
//     buttonReset.addEventListener("click", function() {
//         number = 0  //Сброс кнопки до нуля
//         title.innerText = number
//       })



// При нажатии на все кнопки - в консоле отображать "Кликнули"
//используя цикл for()
const button = document.querySelectorAll(".button")

for(let i = 0; i <button.length; i++){
  buttons[i].array.forEach(element => {
    
  });("click", function(){
    console.log("кликнули")
  }) 
} 
// const names = ["Arsen", "Hanna", "Sergey", "Maria"]
// names.forEach(function(name) {
//     console.log(`Привет, ${name}`)
// })


// array.forEach(function(item, index, array) {})

//     1. item - каждый элемент массива
//     2. index - индекс элемента массива в текущей итерации
//     3. arr - сам массив
// */
// Есть массив numbers. Вывести в консоли каждое число из массива numbers с помощью for
// const number = [10, 20, 30, 40, 50]
// for(let i = 0; i < number.length; i++){
//     console.log(number[i])
// }
// // решить эту задачу с помощью forEach
// const number = [10, 20, 30, 40, 50]
// number.forEach(function(number) {
//     console.log(number) // number - Каждый элемент, текущий элемент - numbers [i]
// })
//Есть массив имен. Вывести в косоли строку Привет, имя с помощью forEach
// const names = ["Arsen", "Hanna", "Sergey", "Maria"]
// names.forEach(function(name) {
//     console.log(`Привет, ${name}`)
// })


/*
element.addEventListner(type, callback) метод слушателя события
1. type - тип события (ckick, scroll, submit)
2. callback - функунция обратного вызова
*/
// function sum(a, b) {
//     console.log(a + b)
// }
// sum(10, 15) // immediately invoke function - немедленный вызов функции