<template>
  <div class="visual">
    <span class="castle"></span>
  </div>

  <Header></Header>
  <!-- <router-view></router-view> -->
  
  <tool-bar></tool-bar>
</template>

<script>
  import Header from './components/Header.vue';
  import ToolBar from './components/ToolBar.vue';
  // import Characters from './views/Characters.vue';

  export default {
    name: 'App',
    data () {

    },
    components: {
      Header,
      ToolBar,
      // Characters,
    }
  }
</script>

<style>

  * {
    margin: 0;
  }

  body {
    background-color: #2e1d3e;
    background: linear-gradient(to top, #29224e, #2a3974);
    height: 100vh;
    
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

  .visual > .castle {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 65%;
    height: 65%;
    background: url('./assets/castle.png') no-repeat left bottom;
    background-size: contain;
    display: block;
  }

</style>