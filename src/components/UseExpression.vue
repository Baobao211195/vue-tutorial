<template>
	<div>
		<span>How to use javascript expression</span>
		<pre>
			+ don't use statement
			+ don't use flown control
		</pre>
		<span>{{number + 1}}</span>
		<br>
		<span>{{ok ? 'YES' : 'NO'}}</span>
		<br>
		<span>{{ message.split('').reverse().join('') }}</span>
		<br>
		<span v-bind:id="'id-' + id"></span>

	</div>
</template>

<script>
    export default {
        name: "UseExpression",
		data() {
            return {
				number: 343,
				ok: true,
				message: "pham van oanh",
				id: 23
			}
		}

    }
</script>

<style scoped>

</style>