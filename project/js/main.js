class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
            //            block.innerHTML += productObj.render();
        }
    }
    costProducts() {
        let cost = 0
        for (let product of this.goods) {
            cost += product.price
        }
        this.cost = cost

    }
}




class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;

    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
list.render();
list.costProducts();
console.log(list)

class Cart {
    constructor(container = '.cart') {
        this.container = container
        this.goods = [] // список товаров в корзине
        this.value = Null// стоимость товаров в корзине
        this.count = Null// количество товаров вы корзине
    }

    render() { } // отрисовка корзины

    addItem(item) { } // метод для добавление товара

    delItem() { } // удаление товара

    changeQuan() { } // изменить количество




}

class CartItem {
    constructor(product) {
        this.title = product.title
        this.price = product.price
        this.id = product.id
    }

    render() { } // отрисовка элемента
}







