<script>
import AppHeader from "./components/AppHeader.vue";
import store from './data/store.js';
import axios from "axios";
import { RouterView } from 'vue-router';

//import axios from 'axios';

export default {

  name: 'App',


  components: {

    AppHeader

  },

  data() {
    return {
      store,

    }
  },

  mounted() {

    axios
      .get('http://localhost:8000/api/projects')
      .then(response => {
        this.store.projects = response.data.progetti;
        //console.log(this.store.projects);
      })
  }


}

</script>

<template>

  <AppHeader />
  <router-view></router-view>



</template>

<style></style>
