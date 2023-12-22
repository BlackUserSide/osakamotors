<template>
  <div class="section-container">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.section-container {
  max-width: 100%;
  padding: 50px 70px;
}

@media (max-width: 480px) {
  .section-container {
    padding: 50px 15px;
  }
}
</style>
