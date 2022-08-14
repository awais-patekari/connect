import { defineStore } from "pinia";

export const useConnectAppStore = defineStore("connectAppStore", {
    state: () => ({ user: {}, editPostData: {} }),
    getters: {
        // double: state => state.count * 2,
        isUserLoggedIn: (state) => (state.user.userName ? true : false),
    },
    actions: {
        setUser(user) {
            this.user = user;
        },
        deleteUser() {
            this.user = {};
        },
        async setEditPost(post){
          this.editPostData = post;
        },
        clearEditPost(){
          this.editPostData = {};
        }
    },
});
