<script lang="ts" setup>
import {useFilters} from "~/stores/filter";

const filter = useFilters()
const getCars = computed(() => {
  return filter.cars
})
const carsData = ref(getCars)
</script>
<template>
  <div class="cars-list-wrapper">
    <div v-for="item in carsData" class="item-car-wrapper">
      <div  class="image-wrapper">
        <img src="/assets/img.jpeg" :alt="'test'">
      </div>
      <div class="content-wrap-cars">
        <div class="name-wrapper">
          <h4 class="h4">{{item.name}}</h4>
        </div>
        <div class="km-wrapper">
          <p>Vehicle mileage</p>
          <span>{{item.km}}</span>
        </div>
        <div class="price-wrapper">
          <p>Vehicle price</p>
          <div class="tag-price">
            <span>{{item.price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.cars-list-wrapper {
  padding: 30px var(--default-padding);
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  .item-car-wrapper {
    max-width: 255px;
    width: 100%;
    height: 340px;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    border: 1px solid rgba(0, 0, 0, 0.10);
    cursor: pointer;
    transition: .5s ease all;
    margin-bottom: 40px;
    &:hover {
      transform:scale(1.012);
    }
    .image-wrapper {
      max-width: 100%;
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
        height: 144px;
        border-radius: 15px 15px 0 0;
      }
    }
    .content-wrap-cars {
      max-width: 100%;
      padding: 10px;
      .name-wrapper {
        margin-bottom: 15px;
        .h4 {
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }
    .km-wrapper {
      margin-bottom: 15px;
      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 5px;
      }
      span {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #09c;
      }
    }
    .price-wrapper {
      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-bottom: 5px;
      }
      .tag-price {
        padding: 2px 24px;
        background: #49E500;
        border-radius: 5px;
        max-width: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          color: #fff;
        }
      }
    }
  }
}
</style>
