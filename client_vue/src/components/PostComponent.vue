<script>
import axios from "axios";
import UserInfo from './UserInfo';
import PostComments from "./PostComments.vue";
import { useConnectAppStore } from "../store";

export default {
    name: 'PostComponent',
    props: ['post'],
    components: {
        UserInfo,
        PostComments
    },
    data: () => ({
        comments: [],
        showMessages: false,
        connectAppStore: useConnectAppStore()
    }),
    methods: {
        async getComments() {
            try {
                const res = await axios.get(`http://localhost:4000/comment/${this.post._id}/?getUserInfo=true`);
                this.comments = res.data;
                // console.log("comments =",this.comments)
            }
            catch (error) {
                console.log(error);
            }
        },
        async likePost() {
            try {
                await axios.post(`http://localhost:4000/posts/${this.post._id}/like`);
                // this.comments = res.data;
                // console.log("comments =",this.comments)
                this.$emit("get-posts");
            }
            catch (error) {
                console.log(error);
            }
        },
        async handleDelete () {
            try {
                await axios.delete(`http://localhost:4000/posts/${this.post._id}`);
                // this.comments = res.data;
                // console.log("comments =",this.comments)
                this.$emit("get-posts");
            }
            catch (error) {
                console.log(error);
            }
        },
        async handleEdit() {
            // await this.connectAppStore.setEditPost(this.post);
            this.$emit("open-dialog", this.post);
        }
    },
    created() {
        this.getComments();
    }
}
</script>

<template>
    <!-- display a post -->
    <v-card class="mx-auto post--class">
        <v-list-item-title>
            <UserInfo :user="post.userInfo[0]" :showName="true" :small="false" />
        </v-list-item-title>
        <v-card-text>
            <div class="text--post">
                <div class="text--primary">
                    {{ post.text }}
                </div>
                <div v-if="post?.tags.length > 0" class="tags--post">
                    <span v-for="tag, index in post.tags" :key="index">
                        #{{ tag }}
                    </span>
                </div>
            </div>
            <img v-if="post.image" :src="post.image" class="image--post" />
        </v-card-text>
        <v-card-actions>
            <v-badge color="rgb(34 117 173)" :content="post.likes || '0'" overlap>
                <v-btn icon color="rgb(34 117 173)" @click="likePost">
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
            </v-badge>
            <v-badge color="rgb(34 117 173)" :content="comments.length || '0'" overlap>
                <v-btn icon color="rgb(34 117 173)" @click="showMessages = !showMessages" style="margin-left:10px">
                    <v-icon>mdi-message-outline</v-icon>
                </v-btn>
            </v-badge>
            <v-btn v-if="post.user == connectAppStore.user._id" icon color="rgb(34 117 173)" @click="handleDelete" style="margin-left:10px">
                <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
            <v-btn v-if="post.user == connectAppStore.user._id" icon color="rgb(34 117 173)" @click="handleEdit" style="margin-left:10px">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </v-card-actions>
        <v-divider class="my-3"></v-divider>
        Comments...
        <PostComments v-if="showMessages" :comments="comments" :postId="post._id" @get-comments="getComments" />
    </v-card>
</template>

<style>
.text--post {
    display: flex;
    margin-left: 5px;
}

.tags--post {
    margin-left: 5px;
    color: rgb(34 117 173);
    font-family: Monospace;
}

.image--post {
    max-width: 65%;
    border-radius: 8px;
    border: 2px solid #ddd;
    padding: 5px;
    margin-top: 10px;
}

.post--class {
    margin: 10px;
    padding: 10px;
}
</style>