<script setup lang="ts">
import {useFilters} from "~/stores/filter";

const filters = useFilters()
const getMainFilter = computed(() => {
  return filters.mainFilters
})
const mainFilter = ref(getMainFilter)
</script>
<template>
  <div class="main-screen-wrapper">
      <div class="navigation-wrapper">
        <div class="btn-nav-main" :class="mainFilter.new ? 'is-active':''" @click="filters.changeMainFilters('new')">
          <span>New Arrival</span>
        </div>
        <div class="btn-nav-main" :class="mainFilter.premium ? 'is-active':''" @click="filters.changeMainFilters('premium')">
          <span>Premium class</span>
        </div>
        <div class="btn-nav-main" :class="mainFilter.clearance ? 'is-active':''" @click="filters.changeMainFilters('clearance')">
          <span>Clearance</span>
        </div>
      </div>
    <CarsLinks/>
  </div>
</template>
<style lang="scss">
.main-screen-wrapper {
  .navigation-wrapper {
    display: flex;
    justify-content: center;
    column-gap: 20px;
  }
  .btn-nav-main {
    display: inline-flex;
    padding: 7px 37px 7px 38px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #09C;
    cursor: pointer;
    transition: .3s ease all;
    &.is-active {
      background: #09C;
      color: #fff;
    }
    &:hover {
      background: #09C;
      color: #fff;
    }
  }
}
</style>

