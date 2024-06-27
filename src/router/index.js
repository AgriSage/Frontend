import { createRouter, createWebHistory } from "vue-router";
import Home from "../public/pages/Home/home.compoment.vue";
import notFoundComponent from "../public/pages/NotFound/notFound.component.vue";
import Store from "../shop/pages/shop.component.vue";
import Courses from "../courses/pages/courses.component.vue";

import Profile from "../profile/pages/profile.component.vue";
import cartPageComponent from "../cart/pages/cart-page.component.vue";
import cardPaymentComponent from "../payment/pages/card-payment.component.vue";
import { authenticationGuard } from "../iam/services/authentication.guard.js";
import SignInComponent from "../iam/pages/sign-in.component.vue";
import SignUpComponent from "../iam/pages/sign-up.component.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/sign-in', name: 'sign-in', component: SignInComponent, meta: { title: 'Sign In'}},
		{ path: '/sign-up', name: 'sign-up', component: SignUpComponent, meta: { title: 'Sign Up'}},
		{ path: "/home", component: Home, meta: { title: "Home"} },
		{ path: "/profile", component: Profile, meta: { title: "Mi Perfil"} },
		{ path: "/store", component: Store, meta: { title: "Tienda" }},
		{ path: "/courses", component: Courses, meta: { title: "Cursos"}},
		{ path: "/cart", component: cartPageComponent, meta: { title: "Carrito"}},
		{
			path: "/checkout",
			component: cardPaymentComponent,
			meta: { title: "Pago"},
		},
		{ path: "/", redirect: "/home", meta: { title: "Home" }},
		{ path: "/:pathMatch(.*)*", component: notFoundComponent },
	],
});

router.beforeEach((to, from, next) => {
	let baseTitle = "AgriSage";
	document.title = `${baseTitle} | ${to.meta['title'] || 'Not Found'}`;
	authenticationGuard(to, from, next);
});

export default router;
