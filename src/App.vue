<template>
  <div id="app">
    <MainLayout/>
  </div>
</template>

<script>
  import MainLayout from '@/layouts/MainLayout.vue'
  
  export default {
    name: 'App',

    components: {
      MainLayout
    }
  }
</script>

<style lang="scss">
  @import '@/assets/styles/index.scss';
</style>