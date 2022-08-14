<script>
  import PostsComponent from './PostsComponent';

  export default {
    name: 'RootComponent',

    components: {
      PostsComponent
    },
    props: ['fetchPosts'],
    data: () => ({

    }),
    methods: {
      openDialog(post) {
        this.$emit("open-dialog", post);
      }
    }
  }
</script>

<template>
  <!-- root component -->
  <v-container>
    <PostsComponent :fetchPosts="fetchPosts" @open-post-dialog="openDialog"/>
  </v-container>
</template>