<template>
  <div class="app-container">
    <div class="app-column">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/design_token.scss';
.app-container{
  background: $background;
  padding: 50px 0;
  min-height: 100vh;
}
.app-column{
  max-width: 1200px;
  background: #fff;
  padding: 60px;
  margin: 0px auto;
  border-radius: 5px;
}
@media only screen and (max-width: 1200px) {
  .app-column{
    max-width: 100%;
  }
  .app-container{
    padding: 0 0;
  }
}
</style>
