<template>
  <div class='header'>
    <div class='header-content'>
      TodoList
      <input
        class='header-input'
        data-test='input'
        v-model="inputValue"
        @keyup.enter="addTodoItem"
        placeholder="Add TodoItem"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodoItem () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .header {
    line-height: 60px;
    background: #333;
  }
  .header-content {
    width: 600px;
    margin: 0 auto;
    color: #FFF;
    font-size: 24px;
  }
  .header-input {
    float: right;
    width: 360px;
    margin-top: 16px;
    line-height: 24px;
    outline: none;
    color: #333;
    text-indent: 10px;
  }
</style>
