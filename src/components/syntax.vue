<template>
<!--	<p>Using mustaches: {{ rawHtml }}</p> &lt;!&ndash;display <div id="vhtml">pham van oanh</div>&ndash;&gt;-->
	<p>Using v-html directive: <span v-html="rawHtml"></span></p> <!--display pham vanoanh-->
</template>

<script>
    export default {
        name: "syntax",
		data() {
            return {
                rawHtml: '<div id="vhtml" style="color: red">pham van oanh</div>'
			};
		},
		computed : {

		}
    }
</script>

<style scoped>
	#vhtml {
		color: red;
	}

</style>