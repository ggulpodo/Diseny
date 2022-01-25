<template>
    <span class="castle"></span>

    <router-link class="characters" to="/characters">View Characters</router-link>

</template>

<script>
    export default {

    }
</script>

<style>
    .castle {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 65%;
        height: 65%;
        background: url('../assets/castle.png') no-repeat left bottom;
        background-size: contain;
        display: block;
    }

    .characters {
        position: absolute;
        top: 50%;
        left: 50%;
        color: #666666;
        font-size: 15px;
        background-color: #fff;
        padding: 15px;
        transform: translate(-50%, -50%);
        border-radius: 50px;
    }

    .characters:hover {
        color: black;
    }
</style>