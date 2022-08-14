<script>
import { stringToColor } from '../Utils/Utils';

export default {
    name: 'UserInfo',

    components: {

    },
    props: ['user', 'showName', 'small'],
    data: () => ({
        avatarColor: "blue"
    }),
    created() {
        this.avatarColor = stringToColor(this.user.userName);
    }
}
</script>

<template>
<!-- displays user info along with an avatar -->
    <div class="user-info">
        <div v-if="small">
            <v-avatar v-if="user.displayPicture" size="30">
            <img :src="user.displayPicture" alt="John">
        </v-avatar>
        <v-avatar v-else :color="avatarColor" size="30">
            <span class="white--text text-h5">{{ user.userName[0] }}</span>
        </v-avatar>
        </div>
        <div v-else>
            <v-avatar v-if="user.displayPicture">
            <img :src="user.displayPicture" alt="John">
        </v-avatar>
        <v-avatar v-else :color="avatarColor">
            <span class="white--text text-h5">{{ user.userName[0] }}</span>
        </v-avatar>
        </div>

        <div v-if="showName">
            <div v-if="small" class="user-name small-font">
                {{user.userName}}
            </div>
            <div v-else class="user-name">
                {{user.userName}}
            </div>
        </div>
    </div>
</template>

<style>
.user-info {
    margin-left: 10px;
    display: flex;
    align-items: center;
}

.user-name {
    margin: 10px;
    font-weight: bold;
}

.small-font {
    font-size: small;
}
</style>