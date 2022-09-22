const products = [
    { id: 1, title: 'Notebook', price: 2000, img: 'img/icons/notebook1.png' },
    { id: 2, title: 'Mouse', price: 20, img: 'img/icons/Mouse.png' },
    { id: 3, title: 'Keyboard', price: 200, img: 'img/icons/Keyboard.png' },
    { id: 4, title: 'Gamepad', price: 50, img: 'img/icons/Gamepad.png' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => {
    return `<div class="product-item">
             <img class='product-img' src='${item.img}'>
                <h3>${item.title}</h3>
                <p>${item.price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = (list = products) => {
    const productsList = list.map(item => renderProduct(item)).join(' ');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;

};

renderPage();