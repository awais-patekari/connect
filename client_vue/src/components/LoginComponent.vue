<script>
import logo from '../../public/logos/color_logo.png';
import axios from 'axios';
import { useConnectAppStore } from '../store';
// import { mapActions } from 'pinia';

export default {
    setup() {
        const connectAppStore = useConnectAppStore()

        return { connectAppStore }
    },
    data: () => ({
        valid: true,
        userName: '',
        passWord: '',
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
        logo,
        show1: false
    }),

    methods: {
        async submit() {

            function handleUserData(user) {
                if (user && Object.keys(user).length > 0) {
                    localStorage.setItem("user", JSON.stringify(user));
                    window.location.reload(false);
                }
            }

            if (this.checkbox) {
                const userBody = {
                    userName: this.userName,
                    password: this.passWord,
                    email: this.email
                };

                const res = await axios.post('http://localhost:4000/user/create', userBody);

                handleUserData(res.data);

            }
            else {
                const userBody = {
                    userName: this.userName,
                    password: this.passWord,
                }

                const res = await axios.post('http://localhost:4000/user/login', userBody);

                handleUserData(res.data.user);
            }
        }
    },
}
</script>

<template>
    <!-- Login component -->
    <div class="login-screen">
        <v-img contain max-height="100" :src="logo"></v-img>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-text-field v-model="userName" label="User Name" required>
                    </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field v-model="passWord" label="Password" required>
                    </v-text-field>

                </v-row>
                <v-row>
                    <v-text-field 
                        v-if="checkbox" 
                        v-model="email" 
                        :rules="emailRules" 
                        label="E-mail" 
                        required>
                    </v-text-field>
                </v-row>
                <v-checkbox v-model="checkbox" label="Click to Signup" required></v-checkbox>
                <v-btn color="primary" @click="submit">
                    {{ checkbox ? "Signup" : "Login" }}
                </v-btn>
            </v-container>
        </v-form>
    </div>
</template>

<style>
.login-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
</style>