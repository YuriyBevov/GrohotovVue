<template>
  <div id="app">
    <Loader/>
    <MainLayout/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Loader from '@/components/Loader'
  import MainLayout from '@/layouts/MainLayout.vue'
  
  export default {
    name: 'App',

    components: {
      Loader,
      MainLayout
    },

    methods: {
      ...mapActions('loader', ['CHANGE_LOADER_STATUS'])
    },

    mounted() {
      this.CHANGE_LOADER_STATUS(false)
    }
  }
</script>

<style lang="scss">
  @import '@/assets/styles/index.scss';
</style>