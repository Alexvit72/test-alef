<template>
  <div class="my-input">
    <label for="id">{{ name }}</label>
    <input type="text"
      :id="name"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
      left: 1rem;
      top: 0.5rem;
      font-size: 0.8rem;
      line-height: 1rem;
      color: rgba(17, 17, 17, 0.48);
    }
    input {
      width: 100%;
      border: none;
      padding: 1.7rem 1rem 0.5rem;
      font-size: 1rem;
      line-height: 1rem;
      color: #111;
      &:focus {
        outline: none;
      }
    }
  }
</style>
