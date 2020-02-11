<template>
	<div>
		<ul>
			<li>{{post.id}} </li>
			<li> {{post.name}}</li>
			<li>
				<button v-on:click="$emit('click-id', post)">Click id</button>
			</li>
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