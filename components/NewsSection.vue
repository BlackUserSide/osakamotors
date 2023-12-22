<template>
  <div class="container-news">
    <div class="top-line-wrapper">
      <h3 class="h3">News <span>Updates</span> & Blog</h3>
    </div>
    <div class="news-wrapper">
      <NewsItem size="middle"/>
      <NewsItem size="middle"/>
      <NewsItem size="middle"/>
      <NewsItem size="middle"/>
      <NewsItem size="big"/>

    </div>
  </div>
</template>
<style lang="scss">
.top-line-wrapper {
  max-width: 100%;
  width: 100%;
  text-align: center;
  padding: 20px 0;

  .h3 {
    text-align: center;
    font-family: Open Sans;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.72px;

    span {
      color: #09C;
    }
  }
}

.news-wrapper {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
}

@media (max-width: 756px) {
  .news-wrapper {
    flex-direction: column;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
</script>
