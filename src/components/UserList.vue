<template>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }}
        <button @click="removeUser(index)">Remove</button>
        <button @click="editUser(index, $event)">Edit</button>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      users: Array,
    },
    methods: {
      removeUser(index) {
        this.$emit('remove-user', index);
      },
      editUser(index) {
        const newName = prompt('Enter new name:');
        this.$emit('edit-user', { index, newName });
      },
    },
  };
  </script>
  