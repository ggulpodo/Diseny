<template>
  <div>
    <!-- <div v-for="personnage in personnages" :key="personnage">{{ personnage[0] }}</div> -->
    {{datas.data[0]["name"]}}
  </div>

</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        datas:[]
      }
    },
    methods: {
      async fetchData(){
        const res = await axios.get('https://api.disneyapi.dev/characters')
        this.datas = res.data
      }
    },
    created() {
      this.fetchData()
    },
    // created() {
    //   var vm = this;
    //   axios.get('https://api.disneyapi.dev/characters')
    //     .then(
    //        function(response){
    //        vm.personnages = response.data;
    //        console.log(response.data);
    //        console.log(response.data.data[0].name);
    //       console.log(response.data.data[0])
    //        console.log(response.data.data[0]["name"])
    //      }
    //     )
    //     .catch(function(error){
    //       console.log(error);
    //     });
    // },
    name: 'character',
  }
</script>

<style>
  .character>h5 {
    color: #fff;
    font-size: 50px;
  }
</style>