<template>
    <div id="id1">{{msg}}</div>
</template>

<script>
    export default {
        name: "demo1",
        data() {
            return {
                msg: 'Hello'

            }
        },
    }
</script>

<style scoped>
    #id1 {
        font-size: 20px;
    }

</style>
