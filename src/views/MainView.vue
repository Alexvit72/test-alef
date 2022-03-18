<template>
    <div class="data-main">
      <div class="title">
        <h2>Персональные данные</h2>
      </div>
      <div class="input-block">
        <div class="input-row">
          <MyInput name="Имя" v-model="userName" />
        </div>
        <div class="input-row">
          <MyInput name="Возраст" v-model="userAge" />
        </div>
      </div>
    </div>
    <div class="data-children">
      <div class="title">
        <h2>Дети (макс. 5)</h2>
        <ButtonComp v-if="userChildren.length < 5" :onclick="addChild">
          <img :src="plus" /> Добавить ребёнка
        </ButtonComp>
      </div>
      <div class="input-block">
        <div class="input-row" v-for="child in userChildren" :key="child.id">
          <MyInput name="Имя" v-model="child.name" />
          <MyInput name="Возраст" v-model="child.age" />
          <span class="delete" @click="removeChaild(child)">Удалить</span>
        </div>
      </div>
    </div>
  <ButtonComp className="blue" :onClick="submit">
    Сохранить
  </ButtonComp>
</template>


<script>
  import MyInput from '../components/MyInput.vue';
  import ButtonComp from '../components/ButtonComp.vue';
  import plus from '../assets/plus.svg';
  import { mapActions } from 'vuex';

  export default {
    components: {
      MyInput,
      ButtonComp
    },
    data: () => {
      return {
        userChildren: [],
        userName: '',
        userAge: '',
        plus: plus,
        newId: 1
      }
    },
    methods: {
      addChild() {
        this.userChildren.push({id: this.newId++, name: '', age: ''});
      },
      removeChaild(child) {
        this.userChildren.splice(this.userChildren.indexOf(child), 1);
      },
      submit() {
        this.setName(this.userName);
        this.setAge(this.userAge);
        this.setChildren(this.userChildren);
      },
      ...mapActions(['setName', 'setAge', 'setChildren']),
    },
    mounted() {
      this.userName = this.$store.state.name;
      this.userAge = this.$store.state.age;
      this.userChildren = this.$store.state.children.slice(0);
    }
  }
</script>


<style lang="scss">
  .data-main, .data-children {
    margin: 2rem 0;
    .input-row:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  .data-children {
    margin-top: 2.2rem;
    .input-row {
      display: flex;
      align-items: center;
      .my-input {
        flex-grow: 1;
        margin-right: 1.125rem;
      }
      .delete {
        font-size: 0.9rem;
        line-height: 1.5rem;
        color: #01a7fd;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: #0f79af;
        }
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
    img {
      vertical-align: middle;
    }
  }
</style>
