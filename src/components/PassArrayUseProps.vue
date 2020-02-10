<template>
	<div>
		<ul>
			<li>{{id}} from {{name}}</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "PassArrayUseProps",
		props: {
            id: Number,
			name: String
        }

    }
</script>

<style scoped>

</style>