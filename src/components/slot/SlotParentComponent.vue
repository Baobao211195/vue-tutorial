<template>
	<div>
		<!--Renders from parent-->
		<slot-child-component>
			<p>
				I'm injected content from the parent!,
				I can still bind to data in the parent's scope, like this! {{myVariable}}
			</p>
		</slot-child-component>

		<!-- Renders "Hello from the child!" -->
		<slot-child-component>
			There are not content from parent
		</slot-child-component>

		<!--nếu ở parent ko inject bất kỳ content nào vào child'slot thì
		child sẽ render bất kỳ tag nào trong <slot></slot>-->
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