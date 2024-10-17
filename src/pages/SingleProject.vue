<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
import store from '../data/store.js';


export default {

  name: 'SingleProject',


  components: {

  },

  data() {
    return {
      store,

    }
  },

  mounted() {

    console.log(this.$route.params.slug);

    axios
      .get(`https://admin.francescowebdev.com/api/projects/${this.$route.params.slug}`)
      .then(response => {
        if (response.data.status) {
          store.singleProject = response.data.progetto;
          console.log('questo è ', store.singleProject);
        } else {
          this.$router.push({ name: 'not-found' })
        }


      })
  }


}
</script>
<template>



  <div class="container d-flex flex-wrap" v-if="store.singleProject">


    <div class="card mb-3">

      <img v-if="!store.singleProject.img.startsWith('http')"
        :src="store.localHostUrl + '/storage/' + store.singleProject.img" class="card-img-top" alt="...">

      <img v-else="" :src="store.singleProject.img" class="card-img-top" alt="...">


      <div class="card-body">

        <h5 class="card-title">Progetto: {{ store.singleProject.name_project }}</h5>
        <p class="card-text">Descrizione: {{ store.singleProject.description }}</p>
        <a :href="store.singleProject.link" target="_blank" class="card-text">Guarda repository su Github</a>
        <p class="card-text"><small class="text-body-secondary">{{ store.singleProject.type.name }}</small></p>
        <ul>
          <template v-for="linguaggio in store.singleProject.languages">
            <li>{{ linguaggio.name }}</li>
          </template>
        </ul>
        <router-link :to="{ name: 'Projects' }" class="btn btn-outline-danger">
          back to the list</router-link>

      </div>

    </div>

  </div>


</template>

<style></style>
