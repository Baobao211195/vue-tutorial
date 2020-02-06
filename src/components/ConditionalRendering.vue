<template>
	<div>
		Use condition : <input type="checkbox" v-model="isActive">
		<h3 v-if="isActive">Use v-if</h3>
		<h3 v-else>Use v-else</h3>
	</div>
</template>

<script>
    export default {
        name: "ConditionalRendering",
		data() {
            return {
				isActive: false
			}
		},
		computed: {

		}
    }
</script>

<style scoped>

</style>