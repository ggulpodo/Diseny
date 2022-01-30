<template>
  <div class="header">
      <span @click="hometag" class="logo">
      </span>
  </div>
</template>

<script>
export default {
    methods: {
        hometag(){
            
        }
    },

}
</script>

<style>
    .header {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
    }

    .header .logo {
        display: block;
        width: 23vw;
        height: 23vh;
        background: url('../assets/diseny-logo.png') no-repeat center / contain;
        margin: 0 auto;
    }
</style>