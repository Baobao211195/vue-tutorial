<template>
	<!--
	sử dụng filter để format text
	sử dụng filter ở 2 nơi
	1. {{message | capitalize }}
	2. v-bind:id="rawId | fomatId"
	-->
	<div>{{name | capitalize}}

	</div>
</template>

<script>
    export default {
        name: "FilterDemoComponent",
		data() {
            return {
                name: "pham van oanh"

			}
		}
    }
</script>

<style scoped>

</style>