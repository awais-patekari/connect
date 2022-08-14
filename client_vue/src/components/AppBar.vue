<script>
import logo from '../../public/logos/black_logo.png';
import { useConnectAppStore } from '../store';
import UserInfo from './UserInfo';

export default {
    name: 'AppBar',

    components: {
        UserInfo,
    },
    data: () => ({
        logo,
        connectAppStore: useConnectAppStore(),
    }),
    async created() {
    },
    methods: {
        handleLogout() {
            localStorage.removeItem("user")
            //localStorage.setItem("user", JSON.stringify(user));
            window.location.reload(false);
        },
        handleUserSettings() {
            this.$emit('open-user-settings');
        }
    }
};
</script>

<template>
    <!-- app bar to display the app logo, logged in user and access user settings -->
    <v-app-bar app color="rgb(165 208 228)" dense>
        <v-img class="mx-2" :src="logo" max-height="25" max-width="140" contain></v-img>
        <div class="d-flex align-center">
        </div>
        <v-spacer></v-spacer>
        <v-menu bottom offset-y>
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <UserInfo :user="connectAppStore.user" :showName="false" :small="true" />
                </v-btn>
            </template>
            <v-card>
                <v-list-item-content class="justify-center">
                    <div class="mx-auto text-center">
                        <v-btn depressed text @click="handleUserSettings">
                            User Settings
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn depressed text @click="handleLogout">
                            Logout
                        </v-btn>
                    </div>
                </v-list-item-content>
            </v-card>
        </v-menu>
    </v-app-bar>
</template>