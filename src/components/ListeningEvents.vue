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

		<div id="exmple-3">
			<input type="text" v-model="name">
			<button v-on:click="displayName(name)">display name</button>

		</div>

		<div id="exmple-4"> use  Enter
			<input type="text" v-model="name" v-on:keyup.enter="useKeyEnter(name)">
		</div>
	</div>
</template>

<script>
    export default {
        name: "ListeningEvents",
		data() {
            return {
                counter : 0,
                counter1 : 1,
				name: ''
			}
		},
		
		methods: {
            add: function () {
				this.counter ++;
            },
			displayName: function (name) {
                alert(name);
				this.name =  name;
            },

            useKeyEnter: function (name) {
                alert("you have just use enter key : " + name);
            }
		}
    }
</script>

<style scoped>

</style>