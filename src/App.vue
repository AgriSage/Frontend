<script setup>
import { RouterView } from 'vue-router';
import FooterContent from "./components/footer-content.vue";
import HeaderContent from "./components/header-content.vue";
import HomePage from "./public/pages/Home/home.compoment.vue";
</script>

<template>
  <div>
    <HeaderContent></HeaderContent>
    <RouterView />
  <FooterContent></FooterContent>
  </div>
</template>

<style scoped></style>
