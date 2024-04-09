<template>
    <form class="myForm" @submit="addTodo">
      <input name="taskTodo" class="formInput" v-model="taskTodo" placeholder="Add a new todo..." required />
      <button class="formBtn" type="submit">Add</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        taskTodo: '',
      };
    },
    methods: {
      addTodo: function (e) {
        e.preventDefault();
        this.$store.commit('addTodo', this.taskTodo);
        this.taskTodo = '';
      },
    },
  };
  </script>