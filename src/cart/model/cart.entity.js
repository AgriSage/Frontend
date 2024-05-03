export default class Cart {
	constructor(id = 0, userId = 0, products = []) {
		this.id = id;
		this.userId = userId;
		this.products = products;
	}
}
