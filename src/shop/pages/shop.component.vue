<script>
export default {
	name: "HomePage",
};
</script>
<template>
	<section style="display: grid; grid-template-columns: 50% 50%">
		<div class="ShopBox">
			<img
				src="./1.png"
				alt="Product 1"
				width="400"
				height="300"
				class="w-full h-60 object-cover"
				style="aspect-ratio: 400 / 300; object-fit: cover" />

			<div class="ShopSubBox">
				<div>
					<div style="width: 50%; display: inline-block; text-align: start">
						<span> S/80.0 </span>
					</div>
					<div style="width: 50%; display: inline-block; text-align: end">
						<span> 4.6/5 💗 </span>
					</div>
					<button class="button">Comprar ahora</button>
				</div>
			</div>
		</div>

		<div class="ShopBox">
			<img
				src="./2.png"
				alt="Product 2"
				width="400"
				height="300"
				class="w-full h-60 object-cover"
				style="aspect-ratio: 400 / 300; object-fit: cover" />
			<div class="ShopSubBox">
				<div>
					<div style="width: 50%; display: inline-block; text-align: start">
						<span> S/80.0 </span>
					</div>
					<div style="width: 50%; display: inline-block; text-align: end">
						<span> 4.6/5 💗 </span>
					</div>
					<button class="button">Comprar ahora</button>
				</div>
			</div>
		</div>

		<div class="ShopBox">
			<img
				src="./3.png"
				alt="Product 3"
				width="400"
				height="300"
				class="w-full h-60 object-cover"
				style="aspect-ratio: 400 / 300; object-fit: cover" />
			<div class="ShopSubBox">
				<div>
					<div style="width: 50%; display: inline-block; text-align: start">
						<span> S/80.0 </span>
					</div>
					<div style="width: 50%; display: inline-block; text-align: end">
						<span> 4.6/5 💗 </span>
					</div>
					<button class="button">Comprar ahora</button>
				</div>
			</div>
		</div>

		<div class="ShopBox">
			<img
				src="./4.png"
				alt="Product 4"
				width="400"
				height="300"
				class="w-full h-60 object-cover"
				style="aspect-ratio: 400 / 300; object-fit: cover" />
			<div class="ShopSubBox">
				<div>
					<div style="width: 50%; display: inline-block; text-align: start">
						<span> S/80.0 </span>
					</div>
					<div style="width: 50%; display: inline-block; text-align: end">
						<span> 4.6/5 💗 </span>
					</div>
					<button class="button">Comprar ahora</button>
				</div>
			</div>
		</div>

		<div class="ShopBox">
			<img
				src="./5.png"
				alt="Product 4"
				width="400"
				height="300"
				class="w-full h-60 object-cover"
				style="aspect-ratio: 400 / 300; object-fit: cover" />
			<div class="ShopSubBox">
				<div>
					<div style="width: 50%; display: inline-block; text-align: start">
						<span> S/80.0 </span>
					</div>
					<div style="width: 50%; display: inline-block; text-align: end">
						<span> 4.6/5 💗 </span>
					</div>
					<button class="button">Comprar ahora</button>
				</div>
			</div>
		</div>

		<div class="ShopBox">
			<img
				src="./6.png"
				alt="Product 4"
				width="400"
				height="300"
				class="w-full h-60 object-cover"
				style="aspect-ratio: 400 / 300; object-fit: cover" />
			<div class="ShopSubBox">
				<div>
					<div style="width: 50%; display: inline-block; text-align: start">
						<span> S/80.0 </span>
					</div>
					<div style="width: 50%; display: inline-block; text-align: end">
						<span> 4.6/5 💗 </span>
					</div>
					<button class="button">Comprar ahora</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
h1 {
	color: #000; /* Color negro */
}
.ShopBox {
	width: 450px;
	height: 85%;
	color: black;
	background-color: #f6ffef;
	border: solid 1px #2e4e36;
	border-radius: 20px;
	margin: auto;
	margin-bottom: 50px;
	padding: 50px 25px;
}
.SubBox {
	padding: 20px;
	margin-bottom: auto;
}
.button {
	color: white;
	background-color: #378d35;
	padding: 10px;
	margin-top: 20px;
}
</style>
