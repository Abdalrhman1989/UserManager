<template>
    <div>
      <input v-model="newUserName" placeholder="Enter user name" />
      <button @click="addUser">Add User</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newUserName: '',
      };
    },
    methods: {
      addUser() {
        this.$emit('add-user', this.newUserName);
        this.newUserName = '';
      },
    },
  };
  </script>
  