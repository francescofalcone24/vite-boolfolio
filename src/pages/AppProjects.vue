<script>
// import axios from 'axios';
import Paginate from '../elements/Paginate.vue';
import store from '../data/store.js';
import { RouterLink } from 'vue-router';



export default {

  name: 'AppProjects',


  components: {
    Paginate,
  },

  data() {
    return {
      store,

    }
  },

  mounted() {

  }


}
</script>
<template>

  <div class="container">
    <div class="row d-flex flex-wrap">
      <div v-for="project, index in store.projects.data" class="col-xl-4 col-md-6 col-sm-12 mt-4">
        <div class="card border-0" style="width: 100%; height: 100%;">
          <img v-if="!project.img.startsWith('http')" :src="store.localHostUrl + '/storage/' + project.img"
            class="card-img-top" alt="...">

          <img v-else="" :src="project.img" class="card-img-top" alt="...">
          <div class="card-body my_bg">
            <div>
              <h5 class="card-title"><span class="fw-bold">Progetto:</span> {{ project.name_project }}</h5>
            </div>
            <div>
              <router-link :to="{ name: 'SingleProject', params: { slug: project.slug } }"
                class="btn btn-outline-primary mt-auto">more
                details</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <Paginate />


</template>

<style scoped>
.my_bg {
  background-color: rgb(223, 222, 222);
}

.card img {
  display: block;
  transform: scale(1);
  transition: all .2s linear;
}

.card img:hover {
  transform: scale(1.2);
  z-index: 999;
}
</style>
