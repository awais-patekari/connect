<script>
import axios from 'axios';
import { useConnectAppStore } from '../store';

export default {
    name: 'PostFormEdit',
    props: ['postData'],
    components: {
    },
    data: () => ({
        message:  '',
        tags: '',
        base64Image: '',
        connectAppStore: useConnectAppStore()
    }),
    async mounted() {
        // console.log("this.postData =",this.postData);
        // console.log("this.message =",this.message);
        this.message =  this.postData.text,
        this.tags = this.postData.tags.join(",") || "",
        this.base64Image = this.postData.image
    },
    methods: {
        async onSubmit() {
            // 
            const postBody = {
                text: this.message,
                tags: this.tags.split(","),
                image: this.base64Image,
                user: this.connectAppStore.user._id
            };
            console.log("postBody =",postBody);
            await axios.patch(`http://localhost:4000/posts/${this.postData._id}`, postBody);
            this.$emit("post-edit-submit")
        },
        fileInput(value) {
            let fr = new FileReader()
            let vm = this;
            fr.addEventListener("load", function (e) {
                vm.base64Image = e.target.result;
                // console.log("this.base64Image =",this.base64Image);
            });
            fr.readAsDataURL(value)
        },
        onCancel() {
            this.$emit("post-edit-cancel");
        }
    },
    watch: {
        postData(newVal) {
            if(Object.keys(newVal).length > 0) {
                this.message = newVal.text,
                this.tags = newVal.tags.join(",") || "",
                this.base64Image = newVal.image
            }
        }
    }
};
</script>
<template>
    <!-- edit post -->
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            Edit Post
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

                    <!-- <v-text-field v-model="message" label="Message" required>
                    </v-text-field> -->
                </v-row>
                <v-row>
                    <v-text-field v-model="tags" ref="tags" required>
                    </v-text-field>
                </v-row>
                <v-row>
                      <v-file-input
                        label="Image"
                        prepend-icon="mdi-camera"
                        dense
                        @change="fileInput"
                        v-model="base64Image"
                    ></v-file-input>
                </v-row>
                <v-row v-if="base64Image">
                    <v-img
                        lazy-src="https://picsum.photos/id/11/10/6"
                        max-height="150"
                        max-width="250"
                        :src="base64Image"
                    ></v-img>
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
            <v-btn color="primary" @click="onCancel">
                Cancel
            </v-btn>
        </v-card-actions>
    </v-card>
</template>