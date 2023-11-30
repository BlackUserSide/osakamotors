<script lang="ts" setup>
import {useHead} from "unhead";
import MainLayout from "../components/layouts/MainLayout.vue";
import MainScreen from "~/components/MainScreen.vue";
useHead({
   title: "OsakaMotors"
})
</script>
<template>
  <div>
    <MainLayout>
      <MainScreen/>
    </MainLayout>
    <ReviewSection/>
  </div>
</template>
