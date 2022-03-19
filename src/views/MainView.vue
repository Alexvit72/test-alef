<template>
  <form @submit.prevent>
    <div class="data-main">
      <div class="title">
        <h2>Персональные данные</h2>
      </div>
      <div class="input-block">
        <div class="input-row">
          <MyInput id="userName" name="Имя" v-model="userName" />
        </div>
        <div class="input-row">
          <MyInput id="userAge" name="Возраст" v-model="userAge" />
        </div>
      </div>
    </div>
    <div class="data-children">
      <div class="title">
        <h2>Дети (макс. 5)</h2>
        <ButtonComp v-if="userChildren.length < 5" :onclick="addChild">
          <img src="../assets/images/plus.svg" /> <span class="add">Добавить ребёнка</span>
        </ButtonComp>
      </div>
      <div class="input-block">
        <div class="input-row" v-for="child in userChildren" :key="child.id">
          <MyInput id="childName" name="Имя" v-model="child.name" />
          <MyInput id="childAge" name="Возраст" v-model="child.age" />
          <span class="delete" @click="removeChaild(child)">Удалить</span>
        </div>
      </div>
    </div>
  </form>
  <ButtonComp className="blue" :onClick="submit" :extra="extra">
    Сохранить
  </ButtonComp>
</template>


<script>
  import MyInput from '../components/MyInput.vue';
  import ButtonComp from '../components/ButtonComp.vue';
  import { mapActions } from 'vuex';
  import validateForm from '../utils/validateForm';

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
        extra: ''
      }
    },
    methods: {
      addChild() {
        this.userChildren.push({name: '', age: ''});
      },
      removeChaild(child) {
        this.userChildren.splice(this.userChildren.indexOf(child), 1);
      },
      submit() {
        if (validateForm(document.forms[0])) {
          this.setName(this.userName);
          this.setAge(this.userAge);
          this.setChildren(this.userChildren);
          this.extra = 'Сохранено!';
          setTimeout(() => {
            this.extra = '';
          }, 1000);
        }
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
      margin-bottom: 7px !important;
      .my-input {
        flex-grow: 1;
        margin-right: 1.125rem;
      }
      .delete {
        margin-top: 1rem;
        font-size: 0.9rem;
        line-height: 1.5rem;
        color: #01a7fd;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
          color: #0f79af;
        }
      }
      @media screen and (max-width: 900px) {
        flex-direction: column;
        margin-bottom: 1.5rem !important;
        .my-input {
          margin-right: 0;
          margin-bottom: 10px;
        }
        .delete {
          margin-top: 0;
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
    @media screen and (max-width: 900px) {
      .add {
        display: none;
      }
    }
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
