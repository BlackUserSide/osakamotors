<script lang="ts" setup>
import './scss/main.scss'
import InfoBar from "./components/InfoBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

</script>
<template>
  <div>
    <InfoBar/>
    <Header/>
    <!--    <HeaderMobile/>-->
    <RouterView/>
    <Footer/>
  </div>
</template>
