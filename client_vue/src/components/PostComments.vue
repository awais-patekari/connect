<script>
import axios from "axios";
import UserInfo from "./UserInfo.vue";
import { useConnectAppStore } from '../store';

export default {
    name: 'PostsComments',
    props: ['comments', 'postId'],
    components: {
        UserInfo
    },
    data: () => ({
        posts: [],
        connectAppStore: useConnectAppStore(),
        newComment: ''
    }),
    methods: {
        async addComment() {
            if(this.newComment != '') {
                try {
                    const commentData = {
                        post: this.postId,
                        user: this.connectAppStore.user._id,
                        comment: this.newComment
                    }
                    await axios.post(`http://localhost:4000/comment/`, commentData);
                    // this.comments = res.data;
                    // console.log("comments =",res.data)
                    // this.$parent.getComments();
                    this.$emit('get-comments');
                    this.newComment = '';
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
    }
}
</script>

<template>
    <!-- all comments in a post -->
    <div>
        <div v-if="comments.length > 0">
            <div v-for="(comment, index) in comments" :key="index">
                <div class="comment">
                    <UserInfo :user="comment.userInfo[0]" :showName="true" :small="true" />
                    <span id="comment-text">{{ comment.comment }}</span>
                </div>
            </div>
        </div>

        <div class="comment">
            <UserInfo :user="connectAppStore.user" :showName="true" :small="true" />
            <v-text-field v-model="newComment" label="Add Comment" required></v-text-field>
            <v-btn depressed text color="rgb(34 117 173)" @click="addComment">Add</v-btn>
        </div>
    </div>
</template>

<style>
.comment {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.comment #comment-text {
    font-size: small;
}
</style>