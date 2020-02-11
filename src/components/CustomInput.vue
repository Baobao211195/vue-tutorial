<template>
	<div>
		<!--<input v-model="searchText">-->

		<input
			v-bind:value="value"
			v-on:input="$emit('custom-input', $event.target.value)">
	</div>
</template>

<script>
    export default {
        name: "CustomInput",
        props: ['value'],
    }
</script>

<style scoped>

</style>