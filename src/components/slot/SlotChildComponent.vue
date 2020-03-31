<template>
	<div>
		<p>I'm the child component</p>
		<!-- Content from the parent gets rendered here. -->
		<slot></slot>
	</div>
</template>
<script>
    export default {
        name: "SlotChildComponent"
    }
</script>

<style scoped>

</style>