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
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Button from 'primevue/button';
import Image from 'primevue/image';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';

// Router
import router from "./router";

createApp(App)
	.use(router)
	.use(PrimeVue, { ripple: true })
	.component('pv-input', InputText)
	.component('pv-field', IconField)
	.component('pv-icon', InputIcon)
	.component('pv-button', Button)
	.component('pv-image', Image)
	.component('pv-calendar', Calendar)
	.component('pv-input-number', InputNumber)
	.use(DialogService)
	.use(ConfirmationService)
	.use(ToastService)
	.mount("#app");
