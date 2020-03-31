<template>
	<div class="id">
		<!-- Elements injected with the `slot="top-bun" attribute will end up in here. -->
		<slot name="top-bun"></slot>

		<!-- A slot tag without a name is a catch-all, it will contain any content that doesn't have a `slot=""` attribute. -->
		<slot></slot>

		<!-- Elements injected with the `slot="top-bun"` attribute will end up in here. -->
		<slot name="bottom-bun"></slot>

	</div>
</template>

<script>
    export default {
        name: "NamedSlotComponent"
    }
</script>

<style scoped>

</style>