<template>
    <div id="example">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message is cached: "{{ reserver }}"</p>
        <p>Computed reversed message is not cached: "{{ now }}"</p>
    </div>
</template>

<script>
    export default {
        name: "ComputedProperties",
        data() {
            return {
                message: 'Hello'
            };
        },
        computed:{

            // this function is depended on message (reactive dependencies)
            reserver: function() {
                return this.message.split('').reverse().join('')
            },
            // now does not depended on any reactive dependencies
            now: function () {
                return Date.now()
            }
        }
    }
</script>

<style scoped>

</style>
