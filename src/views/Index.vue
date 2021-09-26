<template>
  <section class="preview">
    <div class="cmn__wrapper">
      <h1 class="cmn__title">Это главная страница сайта, но тут ничего нет...</h1>
      <p>Она нужна для демонстрации vue-router'а :)</p>
      <router-link to="/cart" class="preview__link">Перейти в корзину ?</router-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Index',
  }
</script>

<style lang="scss">
  $col_black: #1F2432;
  
  .preview {

    h1 {
      margin-bottom: 3rem;
    }

    p {
      font-size: 1.8rem;
      margin-bottom: 3rem;
      color: $col_black;
    }

    &__link {
      font-size: 2.2rem;
      color: $col_black;
      transition: opacity 0.3s ease;
      
      &:hover,
      &:focus {
        opacity: 0.8;
      }
    }
  }
</style>
