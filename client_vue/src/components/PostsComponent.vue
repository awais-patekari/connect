<script>
import axios from "axios";
import PostComponent from "./PostComponent.vue";

export default {
  name: 'PostsComponent',
  components: {
    PostComponent
  },
  props: ['fetchPosts'],
  data: () => ({
    posts: []
  }),
  methods: {
    async getPosts () {
      try {
        const res = await axios.get('http://localhost:4000/posts/?getUserInfo=true');
        this.posts = res.data;
        // console.log("posts =",this.posts)
      }
      catch (error) {
        console.log(error);
      }
    },
    openDialog(post) {
      this.$emit("open-post-dialog", post)
    }
  },
  created() {
    this.getPosts();
  },
  watch: {
    fetchPosts() {
      this.getPosts()
    }
  }
}
</script>

<template>
<!-- display all posts -->
  <div>
    <div v-for="(post, index) in posts" :key="index">
      <PostComponent :post="post" @get-posts="getPosts" @open-dialog="openDialog"/>
    </div>
  </div>

</template>