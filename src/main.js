import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

//PrimeVue
import PrimeVue from "primevue/config";
// PrimeVue Material Design Theme
import "primevue/resources/themes/mdc-light-indigo/theme.css";
// PrimeVue Services
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";

// Router
import router from "./router";

createApp(App)
	.use(router)
	.use(PrimeVue, { ripple: true })
	.use(DialogService)
	.use(ConfirmationService)
	.use(ToastService)
	.mount("#app");
