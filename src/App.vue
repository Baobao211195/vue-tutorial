<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <demo1></demo1>
        <computed-properties></computed-properties>
    </div>
</template>

<script>
    import demo1 from './components/demo1.vue';
    import ComputedProperties from "@/components/ComputedProperties";

    export default {
        name: 'app',
        components: {
            demo1,
            ComputedProperties
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
