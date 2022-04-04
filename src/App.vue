<template>
  <div class="position-relative">
    <img src="../public/images/classificacao-brasileirao-541x338.jpg" height="338" width="541"/>
    <TeamsIndex class="pt-5"/>
  </div>
</template>

<script>
import TeamsIndex from './components/TeamsIndex.vue'

export default {
  name: 'App',
  components: {
    TeamsIndex
  }
}
</script>

<style scoped>
img {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.7;
}
</style>