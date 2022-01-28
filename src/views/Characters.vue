<template>
  <!-- <div v-for="(item, index) in personnages" :key="index">
    <div :style="`background: url(${personnages[index].imageUrl}) no-repeat center /contain; height:200px`"></div>
    <p>{{ personnages[index].name }}</p>
  </div> -->

<!-- <button type="button" class="btn btn-primary">Primary</button> -->


<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4" v-for="(item, index) in personnages" :key="index">
    <div class="card h-100">
      <div class="card-img-top" :style="`background: url(${personnages[index].imageUrl}) no-repeat center /contain; height:200px`"/>
      <div class="card-body">
        <h5 class="card-title">{{ personnages[index].name }}</h5>
        <p class="card-text">{{ personnages[index].tvShows }}</p>
      </div>
    </div>
  </div>
</div>


</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        personnages: []
      }
    },
    created() {
      var vm = this;
      axios.get('https://api.disneyapi.dev/characters')
        .then(
          function (response) {
            vm.personnages = response.data.data;
          }
        )
        .catch(function (error) {
          console.log(error);
        });
    },
    name: 'character',
  }
</script>

<style>
*{
  color: #fff;
  margin: 0 auto;
}

.row {
    margin: 0 70px !important;
    transform: translateY(-8%) !important;
  }

.card {
  background-color: rgba(0, 0, 0, 0) !important;
}
.card-body {
  text-align: center;
}
</style>