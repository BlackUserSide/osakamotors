<script setup lang="ts">
import {useRouter} from "vue-router";
import {useGetData} from "~/composable/useGetData";
import {useHandlerWiki} from "~/composable/useHandlerWiki";
import {navigateTo} from "#app/composables/router";
import {useCompareWikiRoute} from "~/composable/useCompareWikiRoute";


const router = useRouter()
const mainData = ref(useGetData(router.currentRoute.value))
const activeItemContent = ref(router.currentRoute.value.fullPath.split('/')[2])
const currentContent = ref(useHandlerWiki(activeItemContent.value, 'howtobuy'))
const title = ref(currentContent.value.title)
const openHiddenWrapper = ref(false)
watchEffect(() => {
  useHead({
    title: title.value
  })
})

function changeContent(item: string) {
  navigateTo(`/howtobuy/${useCompareWikiRoute(item)}`)
}

watch(activeItemContent, () => {
  currentContent.value = useHandlerWiki(activeItemContent.value, 'howtobuy')
  title.value = currentContent.value.title
  console.log(title.value)
})
</script>
<template>
  <div v-if="mainData" class="wiki-layout">
    <div class="menu-wrapper">
      <div class="navigation-wiki">
        <ul>
          <li class="item-nav-wiki" v-for="item in mainData.menu"
              :class="item === currentContent.title ? 'is-active':''"
              @click="changeContent(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="mobile-menu">
      <div v-if="!openHiddenWrapper" class="btn-open-menu" @click="openHiddenWrapper = !openHiddenWrapper">
        <span>Menu</span>
      </div>
      <div v-if="openHiddenWrapper" class="hidden-menu-wrapper">
        <ul>
          <li class="item-nav-wiki" @click="openHiddenWrapper = !openHiddenWrapper">Close menu</li>
          <li class="item-nav-wiki" v-for="item in mainData.menu"
              :class="item === currentContent.title ? 'is-active':''"
              @click="changeContent(item)">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="title-wrapper">
        <h1 class="h1">{{ currentContent.title }}</h1>
      </div>
      <p>{{ currentContent.text }}</p>
    </div>
  </div>
</template>
<style lang="scss">
.wiki-layout {
  max-width: 100%;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  column-gap: 30px;
  padding: 45px 0;

  .mobile-menu {
    width: auto;
    min-width: 10%;
    position: relative;

    .btn-open-menu {
      rotate: -90deg;
      position: fixed;
      border: 1px solid #0099CC;
      padding: 14px 20px;
      border-radius: 22px;
      left: -10px;
      top: 40%;
      cursor: pointer;
    }

    .hidden-menu-wrapper {
      background: #fff;
      z-index: 3;

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        padding: 0 0 0 10px;

        li {
          margin-bottom: 20px;
          cursor: pointer;
          width: 70%;
          border: 1px solid #0099CC;
          padding: 14px 22px;
          font-size: 12px;
          border-radius: 22px;
        }
      }
    }
  }

  .menu-wrapper {
    width: 30%;

    ul {
      list-style: none;

      .item-nav-wiki {
        border-radius: 15px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        padding: 14px 20px;
        cursor: pointer;
        transition: .3s ease all;

        &.is-active {
          border: 1px solid #09c;

          &:hover {
            transform: scale(1);
          }
        }

        &:hover {
          transform: scale(1.025);
          border: 1px solid #09c;
        }
      }
    }
  }

  .content-wrapper {
    width: 60%;

    .title-wrapper {
      margin-bottom: 20px;

      .h1 {
        font-family: Open Sans;
        font-size: 48px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        letter-spacing: -0.72px;
      }
    }

    p {
      color: #696969;

      font-family: Open Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 160% */
      letter-spacing: 0.2px;
    }
  }
}

@media (max-width: 600px) {
  .menu-wrapper {
    display: none;
  }
  .wiki-layout .content-wrapper {
    max-width: 100%;
    width: 95%;

  }
}

@media (min-width: 600px) {
  .mobile-menu {
    display: none;
  }
  .menu-wrapper {
    display: block;
  }
}
</style>
