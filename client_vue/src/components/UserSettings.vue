<script>

import { useConnectAppStore } from '../store';
import axios from 'axios';

export default {
    name: 'UserSettings',
    props: ['user'],
    components: {

    },
    data: () => ({
        userName: '',
        displayImage: '',
        connectAppStore: useConnectAppStore(),
    }),
    async mounted() {
        this.userName = this.user.userName,
            this.displayImage = this.user.displayPicture
    },
    methods: {
        fileInput(value) {
            if(value) {
                let fr = new FileReader()
                let vm = this;
                fr.addEventListener("load", function (e) {
                    vm.displayImage = e.target.result;
                });
                fr.readAsDataURL(value)
            }
            else {
                this.displayImage = "";
            }
        },
        async onSubmit() {
            const userBody = {
                ...this.user,
                userName: this.userName,
                displayPicture: this.displayImage
            };

            const user = await axios.patch(`http://localhost:4000/user/${this.user._id}`, userBody);

            localStorage.setItem("user", JSON.stringify(user.data));
            this.connectAppStore.setUser(user.data)

            this.$emit("post-user-settings")
        },
    }
};
</script>

<template>
    <!-- menu for user settings -->
    <v-card>
        <v-card-title class="text-h5 grey lighten-2">
            User Settings
        </v-card-title>

        <v-card-text>
            <v-form>
                <v-container>
                    <v-row>
                        <v-text-field name="input-7-1" label="User Name" v-model="userName"></v-text-field>
                    </v-row>

                    <v-row>
                        <v-file-input label="Display Picture" dense prepend-icon="mdi-camera" @change="fileInput"></v-file-input>
                    </v-row>
                    <v-row v-if="displayImage">
                        <img :src="displayImage" class="image--post" />
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


<style>
.add-button {
    position: fixed;
    bottom: 10px;
    right: 250px
}
</style>