<script>
import RootComponent from './components/RootComponent';
import logo from '../public/logos/black_logo.png';
import { useConnectAppStore } from './store';
import LoginComponent from './components/LoginComponent';
import PostForm from './components/PostForm.vue';
import AppBar from './components/AppBar.vue';
import PostFormEdit from './components/PostFormEdit.vue';
import UserSettings from './components/UserSettings.vue';

export default {
  name: 'App',

  components: {
    RootComponent,
    LoginComponent,
    PostForm,
    AppBar,
    PostFormEdit,
    UserSettings
  },
  data: () => ({
    logo,
    connectAppStore: useConnectAppStore(),
    dialog: false,
    fetchPosts: false,
    editDialog: false,
    userSettings: false,
    editPost: {}
  }),
  async created() {
    const user = localStorage.getItem('user');
    if (user) {
      this.connectAppStore.setUser(JSON.parse(user))
    }
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("user")
      //localStorage.setItem("user", JSON.stringify(user));
      window.location.reload(false);
    },
    handlePostSubmit() {
      this.dialog = false;
      this.fetchPosts = !this.fetchPosts;
    },
    openEditDialog(post) {
      this.editPost = post;
      this.editDialog = true;
    },
    handlePostEditSubmit() {
      this.editDialog = false;
      this.editPost = {};
      this.fetchPosts = !this.fetchPosts;
    },
    handlePostEditCancel() {
      this.editDialog = false;
      this.editPost = {};
    }
  }
};
</script>

<template>
  <v-app>
    <template v-if="connectAppStore.isUserLoggedIn">
      <AppBar @open-user-settings="userSettings = true"/>
      <v-main>
        <RootComponent :fetchPosts="fetchPosts" @open-dialog="openEditDialog"/>
      </v-main>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn elevation="2" fab v-bind="attrs" v-on="on" color="rgb(34 117 173)" class="add-button">
            <v-icon color="white">mdi-plus</v-icon>
          </v-btn>
        </template>
        <PostForm @post-submit="handlePostSubmit" />
      </v-dialog>
      <v-dialog v-model="editDialog" width="500" persistent>
        <PostFormEdit @post-edit-submit="handlePostEditSubmit" :postData="editPost" @post-edit-cancel="handlePostEditCancel"/>
      </v-dialog>
      <v-dialog v-model="userSettings" width="500">
        <UserSettings :user="connectAppStore.user" @post-user-settings="userSettings = false; fetchPosts = !fetchPosts;"/>
      </v-dialog>
    </template>
    <LoginComponent v-else />
  </v-app>
</template>


<style>
.add-button {
  position: fixed;
  bottom: 10px;
  right: 250px
}
</style>