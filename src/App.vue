<script>
import { RouterView, useRouter} from 'vue-router';
import FooterContent from "./components/footer-content.vue";
import HeaderContent from "./components/header-content.vue";
import LoginComponent from './public/pages/Login/login.component.vue';

import { ref, onMounted, onUpdated, watchEffect } from 'vue';

export default {
  name: "App",
  components: {
    FooterContent,
    HeaderContent,
    LoginComponent
  },
  setup() {
    const user = ref({});
    const loggedIn = ref(false);
    const router = useRouter();

    onMounted(() => {
        const userInfo = localStorage.getItem("user-info");
        if (userInfo) {
          user.value = JSON.parse(userInfo);
          loggedIn.value = true;
        } else {
          loggedIn.value = false;
        }
    });

    onUpdated(() => {
      setTimeout(() => {
        const userInfo = localStorage.getItem("user-info");
        if (userInfo) {
          user.value = JSON.parse(userInfo);
          loggedIn.value = true;
        } else {
          loggedIn.value = false;
          // redirect to login page
          if (router.currentRoute.value.path !== '/login') {
            router.push('/login');
          }
        }
      }, 1000);
    });

    return { user, loggedIn };
  },
};
</script>

<template>
  <HeaderContent v-if="loggedIn" />
  <RouterView />
  <FooterContent v-if="loggedIn" />
</template>

<style scoped></style>