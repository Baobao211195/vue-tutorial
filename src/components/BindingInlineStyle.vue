<template>
	<div>
		<div v-bind:class="{ active:isActive}">Object syntax</div>
		<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">multiple properties</div>
	</div>
</template>

<script>
    export default {
        name: "BindingInlineStyle",
		data () {
            return {
                isActive: true,
                hasError: true
			}
		}
    }
</script>

<style scoped>

	.active {
		font-size: 50px;
		color: greenyellow;
	}
	.text-danger {
		color: black;
	}


</style>