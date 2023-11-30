<script lang="ts" setup>
import { ref} from "vue";
import {brand} from "../data/brand";
import {useFilters} from "~/stores/filter";

const openBrand = ref(true)
const openEngine = ref(true)
const transmissons = ref(true)
const selectBrand:Ref<string[]> = ref([])
const filter = useFilters()
function brandHandler (item:string) {
  const findElement = checkFilter(item, selectBrand.value)
  if(findElement) {
    filter.filterForBrand('')
    selectBrand.value = selectBrand.value.filter(e => e !== item)
    return
  }
  filter.filterForBrand(item)
  selectBrand.value.push(item)
}
function checkFilter(item:string, array: [] | string[]) {
  const findElement = array.find(e => e === item)
  if(findElement) {
    return true
  }
  return false
}
</script>
<template>
    <div class="filter-container">
     <div class="head-filter">
      <div class="title-wrap">
        <h3 class="h3">Filter</h3>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" viewBox="0 0 20 14" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.937 1.5H19.25C19.6642 1.5 20 1.83579 20 2.25C20 2.66421 19.6642 3 19.25 3H16.7324C16.3866 3.5978 15.7403 4 15 4C14.2597 4 13.6134 3.5978 13.2676 3H0.75C0.335786 3 0 2.66421 0 2.25C0 1.83579 0.335786 1.5 0.75 1.5H13.063C13.285 0.637386 14.0681 0 15 0C15.9319 0 16.715 0.637386 16.937 1.5ZM0.75 6.5C0.335786 6.5 0 6.83579 0 7.25C0 7.66421 0.335786 8 0.75 8H3.26756C3.61337 8.5978 4.25972 9 5 9C5.74028 9 6.38663 8.5978 6.73244 8H19.25C19.6642 8 20 7.66421 20 7.25C20 6.83579 19.6642 6.5 19.25 6.5H6.93699C6.71497 5.63739 5.93192 5 5 5C4.06808 5 3.28503 5.63739 3.06301 6.5H0.75ZM0 12.25C0 11.8358 0.335786 11.5 0.75 11.5H10.063C10.285 10.6374 11.0681 10 12 10C12.9319 10 13.715 10.6374 13.937 11.5H19.25C19.6642 11.5 20 11.8358 20 12.25C20 12.6642 19.6642 13 19.25 13H13.7324C13.3866 13.5978 12.7403 14 12 14C11.2597 14 10.6134 13.5978 10.2676 13H0.75C0.335786 13 0 12.6642 0 12.25Z" fill="black"/>
        </svg>
      </div>
       <button class="link-btn reset-filter">Reset filter</button>
     </div>
      <div class="brand-filter">
        <div class="brand-head">
          <div class="title-wrapper">
            <h3 class="h3">Car Brand</h3>
            <svg class="open-filter-icon" :class="openBrand ? 'is-active': 'is-disabled' " xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15" fill="none" @click="openBrand = !openBrand">
              <path d="M12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L20.0711 5.34315C20.4616 4.95262 20.4616 4.31946 20.0711 3.92893C19.6805 3.53841 19.0474 3.53841 18.6569 3.92893L13 9.58579L7.34315 3.92893C6.95262 3.53841 6.31946 3.53841 5.92893 3.92893C5.53841 4.31946 5.53841 4.95262 5.92893 5.34315L12.2929 11.7071ZM12 10L12 11L14 11L14 10L12 10Z" fill="#989898"/>
            </svg>
          </div>
        </div>
        <div class="brand-body" :class="openBrand ? 'open-filter': 'close-filter'">
          <div v-for="item in brand" class="item-brand" :class="checkFilter(item, selectBrand) ? 'select-brand':''" @click="brandHandler(item)">
            <span>{{item}}</span>
          </div>
          <div class="btn-show">
            <span>Show more</span>
          </div>
        </div>
      </div>
      <div class="brand-filter">
        <div class="brand-head">
          <div class="title-wrapper">
            <h3 class="h3">Engine displacement</h3>
            <svg class="open-filter-icon" :class="transmissons ? 'is-active': 'is-disabled' " xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15" fill="none" @click="openEngine = !openEngine">
              <path d="M12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L20.0711 5.34315C20.4616 4.95262 20.4616 4.31946 20.0711 3.92893C19.6805 3.53841 19.0474 3.53841 18.6569 3.92893L13 9.58579L7.34315 3.92893C6.95262 3.53841 6.31946 3.53841 5.92893 3.92893C5.53841 4.31946 5.53841 4.95262 5.92893 5.34315L12.2929 11.7071ZM12 10L12 11L14 11L14 10L12 10Z" fill="#989898"/>
            </svg>
          </div>
        </div>
        <div  class="brand-body" :class="transmissons ? 'open-filter': 'close-filter'">
          <div v-for="item in brand" class="item-brand" :class="checkFilter(item, selectBrand) ? 'select-brand':''" @click="brandHandler(item)">
            <span>{{item}}</span>
          </div>
          <div class="btn-show">
            <span>Show more</span>
          </div>
        </div>
      </div>
      <div class="brand-filter">
        <div class="brand-head">
          <div class="title-wrapper">
            <h3 class="h3">Transmission</h3>
            <svg class="open-filter-icon" :class="openEngine ? 'is-active': 'is-disabled' " xmlns="http://www.w3.org/2000/svg" width="26" height="15" viewBox="0 0 26 15" fill="none" @click="openEngine = !openEngine">
              <path d="M12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L20.0711 5.34315C20.4616 4.95262 20.4616 4.31946 20.0711 3.92893C19.6805 3.53841 19.0474 3.53841 18.6569 3.92893L13 9.58579L7.34315 3.92893C6.95262 3.53841 6.31946 3.53841 5.92893 3.92893C5.53841 4.31946 5.53841 4.95262 5.92893 5.34315L12.2929 11.7071ZM12 10L12 11L14 11L14 10L12 10Z" fill="#989898"/>
            </svg>
          </div>
        </div>
        <div  class="brand-body" :class="openEngine ? 'open-filter': 'close-filter'">
          <div v-for="item in brand" class="item-brand" :class="checkFilter(item, selectBrand) ? 'select-brand':''" @click="brandHandler(item)">
            <span>{{item}}</span>
          </div>
          <div class="btn-show">
            <span>Show more</span>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss">
.filter-wrapper {
  max-width: 25%;
  width: 100%;
  background: #FEFBF8;
  .open-filter-icon {
    transition: .3s ease all;
    &.is-active {
      transform: rotate(180deg);
    }
  }
  .filter-container {
    .head-filter {
      display: flex;
      max-width: 100%;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      .reset-filter {
        color: #09C;
        position: relative;
        text-decoration: underline;
      }
      .title-wrap {
        display: flex;
        align-items: center;
        column-gap: 1.32rem;
        .h3 {
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 160%;
        }
        svg {
          margin-top: 2px;
        }
      }
    }
  }
  .brand-head {
    margin-bottom: 10px;
   .title-wrapper {
     display: flex;
     align-items: center;
     justify-content: space-between;
     cursor: pointer;
     .h3 {
       font-size: 16px;
       font-style: normal;
       font-weight: 600;
       line-height: 160%;
     }
   }
  }
  .brand-body {
    &.open-filter {
      animation: openFilter .3s ease-in-out forwards;
    }
    &.close-filter {
      animation: closeFilter .3s ease-in-out forwards;
    }
    .item-brand {
      margin-bottom: 10px;
      &.select-brand {
        color: #09C;
      }
      span {
        cursor: pointer;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        transition: .3s ease color;
        &:hover {
          color: #09C;
        }
      }
    }
  }
  .btn-show {
    color: #09C;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    cursor: pointer;

    span {
      position: relative;
      transition: .3s ease all;
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        border-top: 2px dashed #09C;
        bottom: -5px;
        left: 0;
      }
      &:hover {
        color: rgba(#09C, .7);
      }
    }
  }
  .brand-filter {
    padding: 15px 0;
    border-bottom: 1px solid rgba(#000, .1);
  }
}
@keyframes openFilter {
  0% {
    visibility: hidden;
    opacity: 0;
    height: 10px;
  }
  50% {
    height: auto;
  }
  100% {
    visibility: visible;
    opacity: 1;

  }
}
@keyframes closeFilter {
  0% {
    visibility: visible;
    opacity: 1;
    height: auto;
  }
  100% {
    visibility: hidden;
    opacity: 0;
    height: 10px;
  }
}
</style>
