export default class Cart {
	constructor(id = 0, userId = 0, items = []) {
		this.id = id;
		this.userId = userId;
		this.items = items;
	}

	addItem(product) {
		this.items.push(product);
	}
	removeItem(productId) {
		this.items = this.items.filter((item) => item.id !== productId);
	}
	getCart() {
		return {
			id: this.id,
			items: this.items,
		};
	}
	getTotal() {
		return this.items.reduce((acc, item) => acc + item.price, 0);
	}
}
