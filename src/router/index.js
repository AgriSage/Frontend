import { createRouter, createWebHistory } from "vue-router";
import Home from "../public/pages/Home/home.compoment.vue";
import notFoundComponent from "../public/pages/NotFound/notFound.component.vue";
import Store from "../shop/pages/shop.component.vue";
import Courses from "../courses/pages/courses.component.vue";

import Profile from "../profile/pages/profile.component.vue";
import cartPageComponent from "../cart/pages/cart-page.component.vue";
import RegisterComponent from "../public/pages/Register/register.component.vue";
import LoginComponent from "../public/pages/Login/login.component.vue";
import cardPaymentComponent from "../payment/pages/card-payment.component.vue";


const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/home", component: Home, meta: { title: "Home", requiresAuth: true } },
		{ path: "/profile", component: Profile, meta: { title: "Mi Perfil",requiresAuth: true } },
		{ path: "/login", component: LoginComponent, meta: { title: "Login"} },
		{
			path: "/register",
			component: RegisterComponent,
			meta: { title: "Register" },
		},
		{ path: "/", redirect: "/home", meta: { title: "Home", requiresAuth: true } },
		{ path: "/store", component: Store, meta: { title: "Tienda", requiresAuth: true} },
		{ path: "/courses", component: Courses, meta: { title: "Cursos", requiresAuth: true } },
		{ path: "/cart", component: cartPageComponent, meta: { title: "Carrito", requiresAuth: true } },
		{
			path: "/checkout",
			component: cardPaymentComponent,
			meta: { title: "Pago", requiresAuth: true },
		},
		{ path: "/:pathMatch(.*)*", component: notFoundComponent },
	],
});

router.beforeEach((to, from, next) => {
	let baseTitle = "AgriSage";
	document.title = `${baseTitle} | ${to.meta.title || 'Not Found'}`;
	const userInfo = localStorage.getItem('user-info');
	if (to.meta.requiresAuth && !userInfo) {
		next('/login');
	}
	else {
		next();
	}
});

export default router;
