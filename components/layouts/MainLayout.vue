<script lang="ts" setup>
import Filter from "../components/Filter.vue";
</script>
<template>
  <div class="main-layout">
    <div class="filter-wrapper">
      <Filter/>
    </div>
    <div class="view-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
.main-layout {
  max-width: 100vw;
  width: 100%;
  padding: 30px var(--default-padding);
  display: flex;
}

.filter-wrapper {
  padding: 25px 15px;
}

.view-wrapper {
  padding: 0 var(--default-padding);
  width: 100%;
}

@media (max-width: 930px) {
  .filter-wrapper {
    display: none;
  }
}
</style>
