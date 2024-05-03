<script>
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';
import FooterContent from "./components/footer-content.vue";
import HeaderContent from "./components/header-content.vue";
import LoginComponent from './public/pages/Login/login.component.vue';

import { ref, onMounted, onUpdated } from 'vue';

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
      setInterval(() => {
        const userInfo = localStorage.getItem("user-info");
        if (userInfo) {
          user.value = JSON.parse(userInfo);
          loggedIn.value = true;
          router.push('/home');
        } else {
          loggedIn.value = false;
          router.push('/login');
        }
      }, 1000);
    });

    onUpdated(() => {
      const userInfo = localStorage.getItem("user-info");
      if (userInfo) {
        user.value = JSON.parse(userInfo);
        loggedIn.value = true;
        router.push('/home');
      } else {
        loggedIn.value = false;
        router.push('/login');
      }
    });

    return { user, loggedIn };
  },
};
</script>

<template>
  <div v-if="loggedIn">
    <HeaderContent />
    <RouterView />
    <FooterContent />
  </div>
  <div v-else>
    <LoginComponent />
  </div>
</template>

<style scoped></style>