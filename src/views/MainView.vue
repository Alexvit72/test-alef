<template>
  <form>
    <div class="data-main">
      <div class="title">
        <h2>Персональные данные</h2>
      </div>
      <div class="input-block">
        <div class="input-row">
          <MyInput id="Имя" />
        </div>
        <div class="input-row">
          <MyInput id="Возраст" />
        </div>
      </div>
    </div>
    <div class="data-children">
      <div class="title">
        <h2>Дети (макс. 5)</h2>
        <ButtonComp class="white icon" v-if="!children.length" />
      </div>
      <div class="input-block">
        <div class="input-row" v-for="child in children"  :key="child">
          <MyInput id="Имя" />
          <MyInput id="Возраст" />
          <span>Удалить</span>
        </div>
      </div>
    </div>
    <ButtonComp class="blue" />
  </form>
</template>


<script>
  import MyInput from '../components/MyInput.vue';
  import ButtonComp from '../components/ButtonComp.vue';
  export default {
    name: 'MainView',
    components: {
      MyInput,
      ButtonComp
    },
    computed: {
      children() {
        return /*this.$store.state.children*/[{}, {}];
      },
      name() {
        return this.$store.state.name;
      },
      age() {
        return this.$store.state.age;
      }
    },
  }
</script>


<style lang="scss">
  .data-main, .data-children {
    font-family: 'Montserrat';
    margin: 2rem 0;
    .input-row:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  .data-children {
    margin-top: 0;
    .input-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 0.9rem;
        line-height: 1.5rem;
        color: #01a7fd;
      }
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 44px;
    margin-bottom: 11px;
    h2 {
      font-weight: 600;
      font-size: 1rem;
      line-height: 1.5rem;
      color: #111;
    }
  }
</style>
