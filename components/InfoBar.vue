<script lang="ts" setup>

import {useMainStore} from "#imports";
const store = useMainStore()
store.getCurrencyData()
const getCurrency = computed(() => {
  return store.currency
})
const dollar = ref(getCurrency)
</script>
<template>
  <div class="info-bar">
    <div class="container-wrapper">
      <div class="info-dollar-container">
       <span>USD/JPY - Dollar Yen 1$=¥{{dollar}}</span>
      </div>
      <div class="current-time-container">
        <span>Japan Standard Time 11/21 Fri 11:22 AM</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.info-bar {
  max-width: 100vw;
  width: 100%;
  padding: 10px var(--default-padding);
  background: var(--main-color);
  .container-wrapper {
    max-width: 100%;
    width: 100%;
    display: flex;
    column-gap: 50px;
    color: #fff;
    .info-dollar-container {
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .current-time-container {
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
