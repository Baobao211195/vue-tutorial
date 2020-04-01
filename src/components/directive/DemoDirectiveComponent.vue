<template>
	<div v-my-directive:oanh.a.b="message"></div>
</template>

<script>
    import {demoDirective} from "./demo.js";

    export default {
        name: "DemoDirectiveComponent",
		directives: {
            'my-directive': demoDirective
		},
        data() {
            return {
                message: 'hello directive!'
			}
        }
    }
</script>

<style scoped>

</style>