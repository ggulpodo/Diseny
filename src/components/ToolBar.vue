<template>
  <div class="characters">
      <router-link to="/characters">View Characters</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .characters {
    position: absolute;
    color: #666666;
    font-size: 15px;
    background-color: #fff;
    padding: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50px;
  }
  .characters a {
    color: #000;
  }

  .characters a:hover {
    color: aquamarine;
  }

</style>