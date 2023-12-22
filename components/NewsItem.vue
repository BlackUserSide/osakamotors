<script lang="ts" setup>
const props = defineProps({
  size: String,
  image: String
})
</script>
<template>
  <div class="news-item" :class="`${props.size}-size`">
    <div class="image-wrapper">
      <img src="/assets/item_1.jpeg" alt="image blog">
    </div>
    <div class="black-bg-handl"></div>
    <div class="description">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
    </div>
  </div>
</template>
<style lang="scss">
.news-item {
  height: 450px;
  overflow: hidden;
  border-radius: 15px;
  cursor: pointer;
  transition: .3s ease all;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.025);
  }

  .black-bg-handl {
    max-width: 100%;
    width: 100%;
    background-color: rgba(#000, .5);
    position: absolute;
    z-index: 3;
    height: 450px;
  }

  &.middle-size {
    max-width: 396px;
    width: 100%;
    position: relative;
  }

  &.big-size {
    max-width: 740px;
    width: 100%;
    position: relative;
  }

  .description {
    position: absolute;
    z-index: 4;
    bottom: 5%;
    padding: 0 20px;

    p {
      color: #fff;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.3px;
    }
  }

  .image-wrapper {
    max-width: 100%;
    position: absolute;
    z-index: 2;

    img {
      width: 100%;
      object-fit: cover;
      height: 496px;
    }
  }
}
</style>
