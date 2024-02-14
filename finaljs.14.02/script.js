// 1. Есть массив products. Отрисовать продукты из этого массива 
const products = [
    {
        name: "Молоко",
        price: 100
    },
    {
        name: "Кефир",
        price: 150
    },
    {
        name: "Сахар",
        price: 140
    }
]

    usersContainer.innerHTML = "" // очищаем контейнер перед отображением новых пользователей
    users.forEach (function(user) {
        usersContainer.innerHTML += `
            <div class="user">
                <h5>${user.name}</h5>
                <p>${user.age}</p>
            </div>
            `
    })  


    // 2. При отправке формы отображать в консоли введенные название и цену товара

/*
        <div class="product">
            <h5 class="product-name">Название</h5>
            <p class="product-price">Цена</p>
        </div>
