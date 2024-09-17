<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'NotFound',
}
</script>

<template>
    <div>
        ops , not found
    </div>
    <div>
        <router-link :to="{ name: 'Projects' }" class="btn btn-outline-danger">
            back to the list</router-link>
    </div>
</template>



<style scoped>
div {
    color: white;
}
</style>