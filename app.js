const product = [
  {
    id: 1,
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
    img: './assets/images/image-waffle-desktop.jpg',
    thumbnail: './assets/images/image-waffle-thumbnail.jpg',
  },
  {
    id: 2,
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
    img: './assets/images/image-creme-brulee-desktop.jpg',
    thumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
  },
  {
    id: 3,
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
    img: './assets/images/image-macaron-desktop.jpg',
    thumbnail: './assets/images/image-macaron-thumbnail.jpg',
  },
  {
    id: 4,
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
    img: './assets/images/image-tiramisu-desktop.jpg',
    thumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
  },
  {
    id: 5,
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
    img: './assets/images/image-baklava-desktop.jpg',
    thumbnail: './assets/images/image-baklava-thumbnail.jpg',
  },
  {
    id: 6,
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
    img: './assets/images/image-meringue-desktop.jpg',
    thumbnail: './assets/images/image-meringue-thumbnail.jpg',
  },
  {
    id: 7,
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
    img: './assets/images/image-cake-desktop.jpg',
    thumbnail: './assets/images/image-cake-thumbnail.jpg',
  },
  {
    id: 8,
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 5.5,
    img: './assets/images/image-brownie-desktop.jpg',
    thumbnail: './assets/images/image-brownie-thumbnail.jpg',
  },
  {
    id: 9,
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
    img: './assets/images/image-panna-cotta-desktop.jpg',
    thumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
  },
];

const svg = {
  remove: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>`,
  carbonNeutral: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>`,
  increment: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>`,
  decrement: `<svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="currentColor" d="M0 .375h10v1.25H0V.375Z"/></svg>`,
};

const hero = document.getElementById('hero');
const cartAmount = document.querySelector('.cart-amount')

let generateShop = () => {
  hero.innerHTML = product
    .map((x) => {
      let { id, name, price, category, img } = x;
      return `
        <div class="waffle" id='product-id-${id}' > 
          <div data-dom-item="${id}" class="img-btn-container">
            <img src="${img}" alt="${name}" />
            <div class="cart-btn-container">
              <button data-menu-id="${id}" class="addTocartBtn">
                <img class="cartimg" src="assets/images/icon-add-to-cart.svg" alt="Cart Icon" />
                Add to Cart
              </button>
  
              <div class="HideBtn">
                <button data-menu-id="${id}" class="decrementBtn">
                  ${svg.decrement}
                </button>
                <span class="btnAmount">1</span>
                <button data-menu-id="${id}" class="incrementBtn">
                  ${svg.increment}
                </button>
              </div>
            </div>
          </div>

          <div>
            <p>${category}</p>
            <h4>${name}</h4>
            <p class="dollarcolor">$${price.toFixed(2)}</p>
          </div>
        </div>`;
    })
    .join('');
};

generateShop();

const orderitem = document.querySelector('.orderitem');
const addTocartBtns = document.querySelectorAll('.addTocartBtn');
const hideBtns = document.querySelectorAll('.HideBtn');
const orderCake = document.querySelector('.ordercake');

const cartList = [];

function updateCartList() {
  orderCake.innerHTML = '';

  cartList.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'each-cart-item';
    div.innerHTML = `
      <div>
        <span>${item.name}</span>
        <div>
          <span>${item.count}x</span>
          <span>
            <span>@</span>
            <span>$${item.price.toFixed(2)}</span>
          </span>
          <span>$${(item.price * item.count).toFixed(2)}</span>
        </div>
      </div>

      <button data-menu-id="${item.id}" class="item-remove-btn">
        <span>${svg.remove}</span>
      </button>
    `;
    orderCake.appendChild(div);
  });

  const confirmArea = document.createElement('div');
  confirmArea.className = 'confirm-area';
  confirmArea.innerHTML = `
    <div>
      <span>Order Total</span>
      <span class="total-price">$46.50</span>
    </div>

    <div>
      <div>
        ${svg.carbonNeutral}
        <span>This is a <strong>carbon-neutral</strong> delivery</span>
      </div>
    </div>

    <button class='confirm-order-btn'>Confirm Order</button>
  `;

  const totalPrice = cartList.reduce((acc, item) => acc + item.count * item.price, 0);
  confirmArea.querySelector('.total-price').textContent = '$' + totalPrice.toFixed(2);
  orderCake.appendChild(confirmArea);
}

function addToCart(btn) {
  const id = btn.dataset.menuId;
  const name = btn.closest('.waffle').querySelector('h4').textContent;
  const price = btn.closest('.waffle').querySelector('.dollarcolor').textContent.replace('$', '');

  const item = {
    id: Number(id),
    name: name,
    price: Number(price),
    count: 1,
  };

  cartList.push(item);

  updateCartList();
  btn.closest('.cart-btn-container').classList.add('switch');
  btn.closest('.img-btn-container').classList.add('selected');
  totalProductCountUpdate();
}

//! total product count program 
function totalProductCountUpdate() {
  cartAmount.textContent = cartList.reduce((acc, item) => acc + item.count, 0);
}

//! Increment and Decrement program
function incrementOrDecrement(btn, value) {
  const index = cartList.findIndex((item) => item.id === Number(btn.dataset.menuId));
  if (cartList[index].count === 1 && value === -1) return;

  cartList[index].count = cartList[index].count + value;

  btn.closest('.HideBtn').querySelector('.btnAmount').textContent = cartList[index].count;
  updateCartList();
  totalProductCountUpdate();
}

//! Confirmed list program
function confirmListDialogue() {
  const confirmedItemListContainer = document.querySelector('.confirmed-item-list-container');

  cartList.forEach((item) => {
    const { name, price, count, id } = item;

    const matchedItem = product.find((obj) => obj.id === id);
    const image = matchedItem.thumbnail;
    const div = document.createElement('div');
    div.className = 'each-confirmed-list-item';
    div.innerHTML = `
      <img src="${image}"/>

      <div class="confirmed-item-info">
        <span class="">${name}</span>
        <div>
          <span class="confirmed-count">${count}x</span>
          <span>
            <span>@</span>
            <span>$${price.toFixed(2)}</span>
          </span>
        </div>
      </div>

      <span>$${(price * count).toFixed(2)}</span>
    `;

    confirmedItemListContainer.appendChild(div);
  });

  const confirmedModal = document.querySelector('.confirmed-modal');
  confirmedModal.classList.add('show');

  const totalPrice = cartList.reduce((acc, obj) => {
    return acc + obj.price * obj.count;
  }, 0);

  document.querySelector('.total-confirmed-amount-container').textContent = '$' + totalPrice.toFixed(2);
}

//! Remove items
function removeItems(btn) {
  const domItem = document.querySelector(`[data-dom-item="${btn.dataset.menuId}"]`);

  domItem.classList.remove('selected');
  domItem.querySelector('.btnAmount').textContent = '1';
  domItem.querySelector('.cart-btn-container').classList.remove('switch');

  const index = cartList.findIndex(item => item.id === Number(btn.dataset.menuId))
  cartList.splice(index, 1);
  updateCartList();

  if(cartList.length === 0) {
    orderCake.innerHTML = `
      <img src="assets/images/illustration-empty-cart.svg" alt="cake">
      <p class="orderp">Your added items will appear here</p>
    `;
  }

  totalProductCountUpdate();
}

document.addEventListener('click', (e) => {
  const addToCartBtn = e.target.closest('.addTocartBtn');
  if (addToCartBtn) {
    addToCart(addToCartBtn);
  }

  const decrementBtn = e.target.closest('.decrementBtn');
  if (decrementBtn) {
    incrementOrDecrement(decrementBtn, -1);
  }
  const incrementBtn = e.target.closest('.incrementBtn');
  if (incrementBtn) {
    incrementOrDecrement(incrementBtn, 1);
  }

  const confirmOrderBtn = e.target.closest('.confirm-order-btn');
  if (confirmOrderBtn) {
    confirmListDialogue();
    document.body.style.overflow = 'hidden';
  }

  const itemremoveBtn = e.target.closest('.item-remove-btn');
  if (itemremoveBtn) {
    removeItems(itemremoveBtn);
  }

  const reloadbutton = e.target.closest('.start-new-order-btn');
  if (reloadbutton) {
    window.location.reload();
  }
});
