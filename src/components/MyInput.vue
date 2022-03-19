<template>
  <div>
    <div class="my-input">
      <label :class="modelValue.length ? '' : 'empty'" :for="id">{{ name }}</label>
      <input type="text"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="removeHL"
        autocomplete="off"
      />
      <img class="done" src="../assets/images/done.svg" alt="" />
    </div>
    <p class="error-message"></p>
  </div>
</template>


<script>
  export default {
    name: 'MyInput',
    props: {
      modelValue: {
        type: String
      },
      name: {
        type: String,
        require: true
      },
      id: {
        type: String,
        require: true
      },
      isValid: {
        type: Boolean
      }
    },
    methods: {
      removeHL(event) {
        event.target.closest('.my-input').classList.remove('error', 'valid');
      }
    },
    emits: ['update:modelValue']
  }

</script>


<style lang="scss">
  .my-input {
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    position: relative;
    label {
      position: absolute;
      height: fit-content;
      left: 1rem;
      top: 0.5rem;
      font-size: 0.8rem;
      line-height: 1rem;
      color: rgba(17, 17, 17, 0.48);
      &.empty {
        top: 0;
        bottom: 0;
        margin: auto;
        font-size: 0.9rem;
        line-height: 1.5rem;
      }
    }
    &:focus-within {
      box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 56px rgba(51, 51, 51, 0.16);
      label {
        top: 0.5rem;
        margin: 0;
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
    input {
      width: 90%;
      border: none;
      padding: 1.7rem 1rem 0.5rem;
      font-size: 1rem;
      line-height: 1rem;
      color: #111;
      caret-color: #111;
      background: none;
      &:focus {
        outline: none;
      }
    }
    .done {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 5%;
      margin: auto;
      display: none;
    }
    &.valid {
      background: #cbecd9;
      box-shadow: 0px 4px 4px rgba(39, 174, 96, 0.04), 0px 4px 40px rgba(39, 174, 96, 0.24);
      .done {
        display: inline;
      }
    }
    &.error {
      background: #f9e3e3;
      box-shadow: 0px 4px 4px rgba(255, 196, 196, 0.04), 0px 4px 12px rgba(255, 196, 196, 0.24);
      .done {
        display: none;
      }
    }
  }
  .error-message {
    font-size: 0.9rem;
    line-height: 1.5rem;
    color: #db524e;
    margin-top: 0.2rem;
  }
</style>
