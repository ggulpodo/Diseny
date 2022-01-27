<template>
  <div class="visual"></div>

  <Header></Header>

  <router-view></router-view>


</template>

<script>
  import Header from './components/Header.vue';
  export default {
    name: 'App',
    data() {

    },
    components: {
      Header,
    }
  }
</script>

<style>
  * {
    margin: 0;
  }

  body {
    /* background-color: #461d66; */
    background: linear-gradient(to top, #29224e, #2e459f);

    text-align: center;
    color: #fff;
    /* margin-top: 60px; */
  }

  .visual {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url('./assets/midsky.png') no-repeat center;
    background-size: cover;
    display: block;
  }
</style>