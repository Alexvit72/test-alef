<template>
  <div class="preview">
    <div class="data-main">
      <div class="title">
        <h2>Персональные данные</h2>
      </div>
      <div class="content">
        {{ personal }}
      </div>
    </div>
    <div class="data-children">
      <div class="title">
        <h2>Дети</h2>
      </div>
      <div class="content" v-for="child in userChildren" :key="child.id">
        {{ child }}
      </div>
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState([
        'name',
        'age',
        'children'
      ]),
      personal() {
        return this.name ? `${this.name}, ${this.age} лет` : '';
      },
      userChildren() {
        return this.children.length && this.children[0].name ? this.children.map((item) => `${item.name}, ${item.age} лет`) : '';
      }
    }
  }
</script>


<style lang="scss">
  .preview {
    .content {
      width: fit-content;
      font-family: 'Montserrat-Bold';
      font-size: 1rem;
      line-height: 1.5rem;
    }
    .data-children {
      margin-top: 3rem;
      .content {
        background: #f1f1f1;
        border-radius: 5px;
        padding: 10px 20px;
        margin-bottom: 20px;
      }
    }
  }
</style>
