<script>
import { RouterView } from 'vue-router';
import FooterContent from "./components/footer-content.vue";
import HeaderContent from "./components/header-content.vue";
import LoginComponent from './public/pages/Login/login.component.vue';

import { ref, onMounted } from 'vue';

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

    onMounted(() => {
        const userInfo = localStorage.getItem("user-info");
        if (userInfo) {
          user.value = JSON.parse(userInfo);
          loggedIn.value = true;
        } else {
          loggedIn.value = false;
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
    <RouterView />
  </div>
</template>

<style scoped></style>