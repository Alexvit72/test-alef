<template>
  <HeaderComp />
  <main>
    <router-view />
  </main>
  <FooterComp />
</template>


<script>
  import HeaderComp from './components/HeaderComp.vue';
  import FooterComp from './components/FooterComp.vue';

  export default {
    name: 'App',
    components: {
      HeaderComp,
      FooterComp
    }
  }
</script>


<style lang='scss'>
  @import "./assets/reset";
  @font-face {
    font-family: 'Montserrat';
    src: url(./assets/fonts/Montserrat-Regular.ttf);
  }
  #app {
    position: relative;
    height: 100vh;
    a {
      transition: all 0.2s ease-in-out;
    }
    main {
      width: 45%;
      margin: auto;
    }
  }
</style>
