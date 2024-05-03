<script>
import Cart from "../model/cart.entity";
import { CartApiService } from "../services/cart-api.service";

export default {
	data() {
		return {
			userId: 1,
			cartApi: new CartApiService(),
			cart: new Cart(),
			total: 0,
		};
	},
	created() {
		this.cartApi.getAll().then((cartData) => {
			this.cart = cartData.data.find((cart) => cart.userId === this.userId);
			console.log(this.cart);
		});
	},

	updated() {
		this.calculateTotal();
	},

	methods: {
		calculateTotal() {
			if (this.cart.products) {
				let total = 0;
				this.cart.products.forEach((product) => {
					total += product.price * product.quantity;
				});
				this.total = total;
			}
		},
		addQuantity(idProduct) {
			const product = this.cart.products.find(
				(product) => product.id === idProduct,
			);
			product.quantity++;
			this.cartApi.update(this.cart.id, this.cart);
		},

		removeQuantity(idProduct) {
			const product = this.cart.products.find(
				(product) => product.id === idProduct,
			);
			if (product.quantity > 1) {
				product.quantity--;
				this.cartApi.update(this.cart.id, this.cart);
			}
		},
	},
};
</script>

<template>
	<div v-if="!cart.products">
		<p>No hay productos en tu carrito</p>
	</div>
	<div v-else>
		<div class="products" v-for="product in cart.products" :key="product.id">
			<div>
				<p>{{ product.name }}</p>
				<div v-if="product.id != 2" class="quantity">
					<button @click="addQuantity(product.id)">+</button>
					<p>Cantidad: {{ product.quantity }}</p>
					<button @click="removeQuantity(product.id)">-</button>
				</div>
				<div v-else>
					<p>El delivery incluye todos los productos</p>
				</div>
			</div>
			<p>S/.{{ product.price }}</p>
		</div>
		<div>
			<p>Total: S/.{{ this.total }}</p>
			<RouterLink to="/checkout">
				<button>Continuar con la compra</button>
			</RouterLink>
		</div>
	</div>
</template>

<style scoped>
p {
	margin: 0;
	color: #333;
}
.products {
	display: flex;
	justify-content: space-between;
	padding: 10px;
	border-bottom: 1px solid #ccc;
}

button {
	padding: 10px;
	background-color: #333;
	color: #fff;
	border: none;
	cursor: pointer;
}

.quantity {
	display: flex;
	align-items: center;
}
</style>
