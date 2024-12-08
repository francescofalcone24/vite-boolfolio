<script>

import store from '../data/store.js';
import { RouterLink } from 'vue-router';



export default {

    name: 'AppHeader',


    components: {

    },

    data() {
        return {
            store,

        }
    },

    mounted() {
        // console.log(this.$route);


    }


}
</script>
<template>
    <div class=" bg-light mb-4">

        <div class="d-flex justify-content-center">
            <ul v-for="link in store.linksMenu" class="m-0">
                <li>
                    <router-link :to="{ name: link }" class="nav-link text-dark rounded"
                        :class="link == this.$route.name ? 'bg-highlighted' : ''"> {{ link }} </router-link>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
li {
    list-style: none;
}

.bg-highlighted {
    background-color: lightblue;
}
</style>