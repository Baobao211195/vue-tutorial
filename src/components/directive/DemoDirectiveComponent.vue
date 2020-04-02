<template>
	<!-- <div v-my-directive:oanh.a.b="message"></div> -->
	<p v-dynamic-arg:[direction]="message">Pass to directive</p>
</template>

<script>
    // import {demoDirective} from "./demo.js";
    import {dynamicArgDirective} from "./dynamicDirective.js";

    export default {

        name: "DemoDirectiveComponent",
        directives: {
            // 'my-directive': demoDirective,
            'dynamic-arg': dynamicArgDirective
        },
        data() {
            return {
                message: 'hello directive!',
                name: "pham van oanh ",
                direction: {
                    color:"red",
					size: "500px"
				}
            }
        }
    }
</script>

<style scoped>

</style>