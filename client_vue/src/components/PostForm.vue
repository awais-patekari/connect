<script>
import { useConnectAppStore } from '../store';
import axios from 'axios';

export default {
    name: 'PostForm',
    components: {
    },
    data: () => ({
        connectAppStore: useConnectAppStore(),
        message: '',
        tags: '',
        base64Image: ''
    }),
    async created() {
    },
    methods: {
        async onSubmit() {
            // console.log("this.base64Image =",this.base64Image);
            const postBody = {
                text: this.message,
                tags: this.tags.split(","),
                image: this.base64Image,
                user: this.connectAppStore.user._id
            };

            await axios.post('http://localhost:4000/posts/', postBody);

            this.$emit("post-submit")
        },
        fileInput(value) {
            if(value) {
                let fr = new FileReader()
                let vm = this;
                fr.addEventListener("load", function (e) {
                    vm.base64Image = e.target.result;
                    // console.log("this.base64Image =",this.base64Image);
                });
                fr.readAsDataURL(value)
            }
        }
    },
};
</script>
<template>
    <!-- add new post -->
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            New Post
        </v-card-title>

        <v-card-text>
        <v-form>
            <v-container>
                <v-row>
                    <v-textarea
                    name="input-7-1"
                    label="Message"
                    v-model="message"
                    ></v-textarea>
                </v-row>
                <v-row>
                    <v-text-field v-model="tags" label="Tags" required>
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-file-input
                        label="Image"
                        dense
                        prepend-icon="mdi-camera"
                        @change="fileInput"
                    ></v-file-input>
                </v-row>
            </v-container>
        </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="onSubmit">
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>