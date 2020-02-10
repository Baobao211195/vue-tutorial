<template>
	<div>
		<input placeholder="input me" v-model="name">
		<h4>My name is : {{name}}</h4>

	</div>
</template>

<script>
    export default {
        name: "FormInputBindings",
		data() {
            return {
                name : ''
			}
		}

    }
</script>

<style scoped>

</style>