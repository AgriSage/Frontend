<script>
import { ref } from "vue";
import Cart from "../../cart/model/cart.entity";
import { CartApiService } from "../../cart/services/cart-api.service";
import { useRouter } from 'vue-router';

export default {
    data() {
        return {
            cardNumber: ref(),
            expiryDate: '',
            cvv: ref(),
            cart: new Cart(),
            cartApiService: new CartApiService(),
            total: 0,
            payment: false,
            timeToRedirect: 5,
            router: useRouter(),
        }
    },

	created() {
		this.cartApiService.getAll().then((cartData) => {
			this.cart = cartData.data.find((cart) => cart.userId === 1);
			console.log(this.cart);
            this.calculateTotal();
		});
	},

    updated() {
        this.calculateTotal();

        if (this.payment) {
            // push to route in 5 seconds
            setTimeout(() => {
                this.router.push('/store');
                --this.timeToRedirect;
            }, 5000);
        }
    },

    methods: {
        submit() {
            if (this.cardNumber && this.expiryDate && this.cvv) {
                this.payment = true;
                // clear products from cart
                //this.cart.products = [];
                //this.cartApiService.update(this.cart.id, this.cart);
            } else {
                alert('Please fill all the fields');
            }
        },
		calculateTotal() {
			if (this.cart.products) {
				let total = 0;
				this.cart.products.forEach((product) => {
					total += product.price * product.quantity;
				});
				this.total = total;
			}
		},
    }
}
</script>

<template >
    <div v-if="!cart.products">
        <p>No hay productos en tu carrito</p>
    </div>

    <div v-if="payment">
        <h1>Gracias por tu compra</h1>
        <p>Redirigiendo en {{ timeToRedirect }} segundos</p>
    </div>
    <div v-else>
    <h1>Card Payment</h1>
    <div class="card-payment">
        <form @submit.prevent="submit">
            <pv-input-number v-model="cardNumber" placeholder="Card Number"></pv-input-number>
            <pv-calendar v-model="expiryDate" placeholder="Expiry Date"></pv-calendar>
            <pv-input-number v-model="cvv" placeholder="CVV"></pv-input-number>
            <button type="submit">Pay</button>
        </form>
    </div>
    <div class="order-summary">
        <h2>Order Summary</h2>
        <p>Total de productos: {{ cart.products.length -1 }}</p>
        <p>Total: S/. {{ this.total }}</p>
    </div>
    </div>
</template>

<style scoped>
.card-payment {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
.order-summary {
    margin-top: 50px;
    color: #198754;
}
form {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;
    color: #000000;
}
input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #198754;
    color: white;
}

p{
    color: #000000;
}
</style>