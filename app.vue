<script lang="ts" setup>
import './scss/main.scss'
import InfoBar from "./components/InfoBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileHeader from "~/components/MobileHeader.vue";

</script>
<template>
  <div>
    <InfoBar/>
    <Header/>
    <MobileHeader/>
    <HeaderMobile/>
    <RouterView/>
    <Footer/>
  </div>
</template>
