<script lang="ts" setup>
import {category} from "~/data/category";

const brands = ref(category)
</script>
<template>
  <div class="category-container">
    <div class="top-line-wrapper">
      <h3 class="h3">Most <span>Popular Category</span></h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
    <div class="category-list">
      <div v-for="(item, index) in brands" :key="index" class="item-category">
        <div class="name-brand">
          <span>{{ item }}</span>
        </div>
        <div class="icon-form">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M6 18L18 6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.25 6H18V15.75" stroke="white" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.category-container {
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;

  .category-list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;

    .item-category {
      width: 300px;
      border: 2px solid #09C;
      margin-bottom: 20px;
      box-shadow: 0px 12px 40px 0px rgba(0, 153, 204, 0.26);
      display: flex;
      padding: 16px 20px;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: .3s ease all;
      border-radius: 22px;

      &:hover {
        transform: scale(1.025);
      }

      .name-brand {
        span {
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      .icon-form {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: #09C;
        display: flex;
        align-items: center;
        justify-content: center;
      }

    }
  }

  .top-line-wrapper {
    text-align: center;
    margin-bottom: 1.25rem;

    .h3 {
      font-size: 56px;
      font-style: normal;
      font-weight: 600;
      line-height: 72px;

      span {
        color: #09C;
      }
    }

    p {
      color: #6D737A;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 140% */
    }
  }
}

@media (max-width: 756px) {
  .category-container {
    .category-list {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
