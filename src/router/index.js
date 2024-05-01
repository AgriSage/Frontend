import { createRouter, createWebHistory } from "vue-router";
import Home from "../public/pages/Home/home.compoment.vue";
import notFoundComponent from "../public/pages/NotFound/notFound.component.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/home", component: Home, meta: { title: "Home" } },
		{ path: "/", redirect: "/home", meta: { title: "Home" } },
		{ path: '/:pathMatch(.*)*', component: notFoundComponent},
	],
});

router.beforeEach((to, from, next) => {
	let baseTitle = "AgriSage";
	document.title = `${baseTitle} | ${to.meta["title"]}`;
	next();
});

export default router;
