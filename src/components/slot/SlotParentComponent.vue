<template>
	<div>
		<slot-child-component>
			<p>I'm injected content from the parent!,
				I can still bind to data in the parent's scope, like this! {{myVariable}}
			</p>
		</slot-child-component>
	</div>

</template>

<script>
    import SlotChildComponent from "./SlotChildComponent";

    export default {
        name: "SlotParentComponent",
        components: {SlotChildComponent},
        comments: {
            SlotChildComponent
        },
		data() {
            return {
                myVariable: 'data from parent component'
			}
		}
    }
</script>

<style scoped>

</style>