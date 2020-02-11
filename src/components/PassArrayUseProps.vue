<template>
	<div>
		<ul>
			<li>{{post.id}} from {{post.name}}</li>
		</ul>
	</div>
</template>

<script>
    export default {
        name: "PassArrayUseProps",
		props: {
            post : {
                type: Object,
				default : () => {}
			}
        }

    }
</script>

<style scoped>

</style>