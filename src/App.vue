<script>
import { RouterView, useRouter} from 'vue-router';
import FooterContent from "./components/footer-content.vue";
import HeaderContent from "./components/header-content.vue";
import LoginComponent from './public/pages/Login/login.component.vue';

import AuthenticationSection from "./iam/components/authentication-section.component.vue";
import {useAuthenticationStore} from "./iam/services/authentication.store.js";

export default {
  name: "App",
  components: {
    AuthenticationSection,
    FooterContent,
    HeaderContent,
    LoginComponent,
    RouterView
  },
  data() {
    return {
      router: useRouter(),
      authenticationStore: useAuthenticationStore(),
    }
  },
  computed: {
    isSignedIn() {
      return this.authenticationStore.isSignedIn;
    },
    currentUsername() {
      return this.authenticationStore.currentUsername;
    }
  },
};
</script>

<template>
  <pv-toast></pv-toast>
  <div v-if="isSignedIn">
    <HeaderContent/>
    <RouterView />
    <FooterContent />
  </div>
  <div v-else>
    <RouterView />
  </div>
</template>

<style scoped></style>