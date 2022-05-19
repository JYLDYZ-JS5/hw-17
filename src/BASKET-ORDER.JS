let menu_list = document.getElementById('menu-list')
let orders_list = document.getElementById('orders-list')
let items_count = document.getElementById('items-count')
let sum = document.getElementById('sum')

//Меню лист чыгарган скрипттер

const renderMenuItem = (product) => {
  return ` <div class="food-card" onclick="onClickCard(event)" data-product='${JSON.stringify(
    product,
  )}' >
        <img class="food-img" src="${product.img}" alt="tea">
          <div>
           <div>${product.title}</div>
           <div>${product.price} som</div>
         </div>
            </div>`
}

const renderMenuList = (list) => {
  let items = []
  list.map((item) => {
    items.push(renderMenuItem(item))
  })
  menu_list.innerHTML = items.join('')
}

renderMenuList(menu_items)

// Заказдарды чыгыра турган скрипттер

const renderOrderItem = (orderItem) => {
  return `
          <li class="order-item" >
              <div>${orderItem.title} </div>   
              <span> count: ${orderItem.count}</span>
              <span>price: ${orderItem.price}</span>
              <span data-order='${JSON.stringify(
                orderItem,
              )}'onclick="onDelete(event)" class="delete-btn"> X </span>
          </li>`
}

const renderOrders = (list) => {
  //к list применяется order-basket на которую наполнятся заказами и это
  let items = []
  list.map((item) => {
    //присваивается в новый массив с помощью функции выше и выводится на DOM
    items.push(renderOrderItem(item))
  })
  orders_list.innerHTML = items.join('')
}

let addCount = () => {
  items_count.innerHTML = orders_basket.reduce((el, { count }) => el + count, 0)
}

let addSum = () => {
  sum.innerHTML = orders_basket.reduce((el, { price }) => el + price, 0)
}

const onClickCard = (event) => {
  console.log(event.currentTarget.dataset.product)
  let card = JSON.parse(event.currentTarget.dataset.product) //присваивается та карточка на которую нажимаем

  let currenIndex = orders_basket.findIndex((el) => {
    //присваивается значение которые совпадают с индексом
    return el.id == card.id
  })

  if (currenIndex == -1) {
    orders_basket.push({
      // если там нету похожих индексов то до6авляем туда
      ...card,
      count: 1,
    })
  } else {
    orders_basket[currenIndex].count++ //если там есть этот о6ъект то при6авляется еще один штук
    orders_basket[currenIndex].price += card.price //и к цене до6авляется цена того о6ъекта на которого мы нажали тоесть самомоу
  }
  renderOrders(orders_basket)
  addCount()
  addSum()
}

const onDelete = (event) => {
  let current_order = JSON.parse(event.currentTarget.dataset.order) //присваиваем значение на которую нажали

  let currenIndex = orders_basket.findIndex((el) => el.id == current_order.id) //индексы которые совпадают с корзиной и на которую нажали

  let item_price = menu_items.filter((el) => {
    //присваиваем айди которые совпадают с нажатым о6ъектом и data.js
    return el.id == current_order.id
  })

  if (current_order.count > 1) {
    //если 6аскан элементтин эсе6и 1ден аз 6олсо
    orders_basket[currenIndex].count-- //то корзинадан  индекси туура келге элементт очуро6уз
    orders_basket[currenIndex].price -= item_price[0].price
    renderOrders(orders_basket)
  } else {
    orders_basket.splice(currenIndex, 1)
    renderOrders(orders_basket)
  }
  addCount()
  addSum()
}
