<template>
  <div id="app">
    <add-user @add-user="addUser"></add-user>
    <user-list :users="users" @remove-user="removeUser" @edit-user="editUser"></user-list>
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
import AddUser from './components/AddUser.vue';

export default {
  name: 'App',
  components: {
    UserList,
    AddUser
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    addUser(name) {
      if (name) {
        this.users.unshift({ name });
      }
    },
    removeUser(index) {
      this.users.splice(index, 1);
    },
    editUser({ index, newName }) {
      if (newName) {
        this.users[index].name = newName;
      }
    }
  }
};
</script>
