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

		<!--Name of slot-------------------------------------->

		<named-slot-component>
			<template  slot="top-bun">This is a template vs name of slot is top-bun {{topBun}}</template >
			<br>
			<template  slot="bottom-bun">This is a template vs name of slot is bottom-bun {{bottonBun}}</template >
		</named-slot-component>
	</div>

</template>

<script>
    import SlotChildComponent from "./SlotChildComponent";
    import NamedSlotComponent from "./NamedSlotComponent";

    export default {
        name: "SlotParentComponent",
        components: {NamedSlotComponent, SlotChildComponent},
        comments: {
            SlotChildComponent,
            NamedSlotComponent
        },
		data() {
            return {
                myVariable: 'data from parent component',
				topBun: "This is top bun",
                bottonBun: "This is bottom bun",
			}
		}
    }
</script>

<style scoped>

</style>