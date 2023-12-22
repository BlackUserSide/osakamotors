<script lang="ts" setup>
import {headerBar} from "~/data/headerBar";
import {useMainStore} from "#imports";
import {useRestoreTitleHeader} from "~/composable/useRestoreTitleHeader";

const head = ref(headerBar)
const store = useMainStore()
const title: any = ref('')
const getDataHidden = computed(() => {
  title.value = useRestoreTitleHeader(store.hiddenHeader)
  return store.hiddenHeader
})
const methodHeader = ref(getDataHidden)
</script>
<template>
  <div class="header-hidden-bar">
    <div class="hidden-margin"></div>
    <div class="template-header">
      <div class="top-line-hidden">
        <h5 class="h5">{{ title }}</h5>
      </div>
      <div class="list-links-wrapper">
        <NuxtLink v-for="item in head[methodHeader]" :to="item.link" class="link-hidden-header">{{
            item.text
          }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.header-hidden-bar {
  max-width: 100%;
  width: 100%;
  min-height: 70px;
  background: #fff;
  z-index: 4;
  padding: 30px 0;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  visibility: visible;
  opacity: 1;

  .hidden-margin {
    margin-right: 20.25%;
  }

  .h5 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  .list-links-wrapper {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    a {
      display: inline-block;
      margin-bottom: 12px;
      color: #000;
      text-decoration: none;
      transition: .3s ease all;

      &:hover {
        color: #09C;
      }
    }
  }
}
</style>
