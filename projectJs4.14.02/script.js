// При отправке формы в консоль отображать "отправленно"



const form = document.querySelector("form")
const username = document.querySelector(".username") //("input[name="username"]")
// const age = document.querySelector(".userage")//("input[name="userage"]")
const usersContainer = document.querySelector(".users")


const users = [
    {
        name: "Vyacheslav",
        age: "100"
    },
    {
        name: "Arsen",
        age: "25"
    }, 
    {
        name: "Stefan",
        age: "90"
    }
]


form.addEventListener("submit", function(event) {
    event.preventDefault() //отменяем действие по умолчанию применяется всегда для отправки
    console.log(username.value )// Отобразить данные из imput username
    console.log(age.value ) //Отобразить данные из imput в age
    const user = {
      name: username.value,
       age: age.value
    }
       users.push(user)
       showUsers() // вызывает функуию отрисовки в html после добавления новых пользователей
    
})

function showUsers() {
    usersContainer.innerHTML = "" // очищаем контейнер перед отображением новых пользователей
users.forEach(function(user) {
    usersContainer.innerHTML += `
    <div class="user">
    <h5>${user.name}</h5>
    <p>${user.age}</p>
    </div> 
    `
})
}

showUsers() // вызывает функуию отрисовки в html после добавления новых пользователей





// Отобразить в консоли данные которые пользователь заполнил по умолчанию



// При отправке формы страница обновляется по умолчанию, но нам такое поведение нужно отменять.
//     Для того, чтобы отменить подобное поведение используется функция preventDefault(), 
//     которая реализована у объекта события, которое происходит
//     Когда в браузере происходит какое-либо событие (клик, сабмит и тд), автоматические
//     создается объект события event, который можно получить в коллбэк функции метода addEventListener()

// В объекте события event есть свойство target - это элемент, который вызвал событие

// У input есть свойство value, внутри которого лежат заполненные пользователем данные

//     События:
//     1. click - событие клика по тегу
//     2. submit - событие отправки формы, оно реализовано только у формы