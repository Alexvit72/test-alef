<template>
  <div class="button-wrap">
    <button type="button" name="button" @click="onClick" :class="className">
      <slot></slot>
    </button>
    <div :class="extra ? 'extra shown' : 'extra'">
      <span>{{ extra }}</span>
      <img src="../assets/images/all_done.svg" alt="">
    </div>
  </div>
</template>


<script>
  export default {
    props: {
      className: {
        type: String,
        require: true
      },
      onClick: {
        type: Function
      },
      extra: {
        type: String
      }
    }
  }
</script>


<style lang="scss">
  .button-wrap {
    display: flex;
    .extra {
      display: none;
      justify-content: space-between;
      align-items: center;
      width: 200px;
      padding: 0.2rem 0.5rem;
      margin-left: 2rem;
      font-size: 0.9rem;
      line-height: 1.5rem;
      box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.04), 0px 4px 40px rgba(39, 174, 96, 0.24);
      border-radius: 8px;
      &.shown {
        display: flex;
      }
      img {
        width: 40px;
      }
    }
    button {
      border: 2px solid #01a7fd;
      border-radius: 100px;
      background: none;
      padding: 10px 20px;
      font-family: 'Montserrat';
      font-size: 0.9rem;
      line-height: 1.5rem;
      color: #01a7fd;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: rgba(110, 65, 226, 0.04);
      }
      &:active {
        background: rgba(110, 65, 226, 0.16);
      }
      &:focus {
        border: 2px solid rgba(17, 17, 17, 0.48);
      }

      &.blue {
        background: #01a7fd;
        color: #fff;
        &:hover {
          background: #0f79af;
        }
        &:active {
          background: #59c79f;
        }
        &:focus {
          border: 2px solid rgba(17, 17, 17, 0.48);
        }
      }
    }
  }
</style>
