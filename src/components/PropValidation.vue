<template>
	<div>
		{{objValidate.name}} - {{objValidate.age}}

	</div>
</template>

<script>
    export default {
        name: "PropValidation",
        props: {
            objValidate: {
                validator: function (obj) {
                    return obj.name === 'oanh'
                }
            }
        }
    }
</script>

<style scoped>

</style>