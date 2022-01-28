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
    padding: 0;
    box-sizing: border-box;
    outline-style: none;
}

a {
    text-decoration: none;
}

img {
    border: 0;
    vertical-align: middle;
}

ul,
li {
    list-style: none;
}

html {
    font-size: 10px;
    overflow-x: hidden;
}

body {
  text-align: center;
    color: #fff;
    font-size: 1.6rem;
    line-height: 1.65;
    letter-spacing: 0;
    font-weight: 400;
    background: linear-gradient(to top, #29224e, #2e459f);
}


/* 
  * {
    margin: 0;
  }

  body {
    background: linear-gradient(to top, #29224e, #2e459f);

    text-align: center;
    color: #fff;
  } */

  .visual {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: url('./assets/midsky.png') no-repeat center;
    background-size: cover;

    -webkit-mask-image: linear-gradient(to top, transparent 5%, black 100%);

    display: block;
  }
</style>