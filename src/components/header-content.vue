<template>
	<header class="header">
		<div class="logo">
			<img src="./logo.png" alt="Logo" />
		</div>
		<div class="buttons">
			<button @click="navigateToStore()">Tienda</button>
			<button @click="navigateToCourses()">Cursos</button>
			<button @click="navigateToCart()">Carrito</button>
			<button @click="navigateToProfile()">Mi perfil</button>
		</div>
	</header>
	<div class="separator"></div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
	setup() {
		const router = useRouter();

		const navigateToStore = () => {
			router.push("/store");
		};

		const navigateToCourses = () => {
			router.push("/courses");
		};

		const navigateToCart = () => {
			router.push("/cart");
		};

		const navigateToProfile = () => {
			router.push("/profile");
		};

		return {
			navigateToStore,
			navigateToCourses,
			navigateToCart,
			navigateToProfile,
		};
	},
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 20px;
	background-color: #fff;
	color: white;
	margin-top: -50px;
}

.logo img {
	width: 100px; /* Ajusta el tamaño según lo necesites */
}

.buttons button {
	margin-left: 10px; /* Espacio entre los botones */
	padding: 5px 10px;
	border: none;
	border-radius: 5px;
	background-color: #555;
	color: white;
	cursor: pointer;
}

.buttons button:hover {
	background-color: #777;
}
.separator {
	height: 2px; /* Grosor de la línea */
	background-color: green; /* Color de la línea */
	margin-bottom: 20px; /* Espacio entre el header y el contenido siguiente */
}
</style>
