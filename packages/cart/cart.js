const cartElem = document.querySelector('.cart tbody');
const addToCartBtns = document.querySelectorAll('.addToCart');
const cart = {
  data: {},
  sumCost() {
    let sum = 0;
    for (let key in this.data) {
      sum += this.data[key].cost * this.data[key].quantity;
    }
    return sum;
  },
  sumQuantity() {
    let quantity = 0;
    for (let key in this.data) {
      quantity += this.data[key].quantity;
    }
    return quantity;
  },
  removeFromCart(id) {
    delete this.data[id];
    updateCart();
  },

  clearCart() {
    for (let key in cart.data) {
      this.removeFromCart(key);
    }

    updateCart();
  },
};

const updateCart = () => {
  cartElem.innerHTML = '';

  for (let cartItem in cart.data) {
    cartElem.innerHTML += `
			<tr>
				<td>${cartItem}</td>
				<td>${cart.data[cartItem].name}</td>
				<td>${cart.data[cartItem].cost}$</td>
				<td>${cart.data[cartItem].quantity}</td>
				<td><button onclick="cart.removeFromCart(${cartItem})">🗑</button></td>
			</tr>
		`;
  }

  const cost = cart.sumCost();
  const quantity = cart.sumQuantity();
  cartElem.innerHTML += `
		<tr>
			<td>-</td>
			<td>Summary</td>
			<td>${cost}$</td>
			<td>${quantity}</td>
			${
        quantity
          ? '<td><button onclick="cart.clearCart()">🗑</button></td>'
          : '<td></td>'
      }
		</tr>
	`;
};

addToCartBtns.forEach(addToCartBtn => {
  addToCartBtn.addEventListener('click', btn => {
    const marketItem = btn.target.parentElement;
    const marketItemId = marketItem.dataset.id;

    if (cart.data[marketItemId]) {
      cart.data[marketItemId].quantity += 1;
    } else {
      const marketItemCost = marketItem.dataset.cost;
      const marketItemName = marketItem.dataset.name;

      Object.assign(cart.data, {
        [marketItemId]: {
          name: marketItemName,
          cost: marketItemCost,
          quantity: 1,
        },
      });
    }

    updateCart();
  });
});
