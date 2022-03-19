<template>
  <header class="header">
    <img class="logo" alt="Vue logo" src="../assets/images/logo.svg">
    <nav class="nav">
      <router-link class="left" to="/">Форма</router-link>
      <router-link to="/preview">Превью</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'HeaderComp'
  }
</script>

<style lang='scss'>
  .header {
    position: fixed;
    width: 100%;
    padding: 1.4rem;
    background: #fff;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);
    z-index: 100;
    .logo {
      margin-left: 5.8rem;
      @media screen and (max-width: 900px) {
        margin-left: 5%;
      }
    }
    .nav {
      position: absolute;
      display: flex;
      width: fit-content;
      height: fit-content;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      @media screen and (max-width: 900px) {
        left: unset;
        right: 5%;
      }
      a {
        font-size: 0.9rem;
        line-height: 1.5rem;
        color: rgba(17, 17, 17, 0.48);
        text-decoration: none;
        &:hover {
          color: #000;
        }
      }
      .left {
        margin-right: 1.5rem;
      }
    }
  }
</style>
