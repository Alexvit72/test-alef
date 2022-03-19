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
  @font-face {
    font-family: 'Montserrat-Bold';
    src: url(./assets/fonts/Montserrat-Bold.ttf);
  }
  #app {
    height: 100vh;
    a {
      transition: all 0.2s ease-in-out;
    }
    main {
      width: 45%;
      max-width: 616px;
      margin: auto;
      padding: 80px 0 100px;
      @media screen and (max-width: 900px) {
        width: 90%;
      }
    }
    font-family: 'Montserrat';
  }
</style>
