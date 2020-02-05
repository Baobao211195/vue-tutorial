<template>
	<div>
		<span id="att">How to use v-bind directive</span>
		<input type="text" v-bind:disabled="isDisable">
		<div v-bind:id="dynamicId">id="companyId"</div> <!--<div id="companyId"></div>-->
	</div>
</template>

<script>
    export default {
        name: "attribute",
        data() {
            return {
                isDisable: true,
				dynamicId: 'companyId'
            };
        },
    }
</script>

<style scoped>
	#att {
		color: red;
	}
	#companyId {
		color: aqua;
		font-size: 30px;
	}
</style>