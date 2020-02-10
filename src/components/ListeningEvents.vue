<template>
	<div>
		<div id="example-2">
			<button v-on:click="counter1++">Add 1</button>

			<p key="input-key2">The button above has been {{counter1}} time.</p>
		</div>

		<div id="example-1">
			<button v-on:click="add">Add 1</button>

			<p key="input-key2">The button above has been {{counter}} time.</p>
		</div>
	</div>
</template>

<script>
    export default {
        name: "ListeningEvents",
		data() {
            return {
                counter : 0,
                counter1 : 1
			}
		},
		
		methods: {
            add: function () {
				this.counter ++;
            }
		}
    }
</script>

<style scoped>

</style>