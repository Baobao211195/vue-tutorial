<template>
	<div>
		<div v-bind:class="{ active:isActive}">Object syntax</div>
		<div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">Use properties</div>
		<div class="static" v-bind:class="classObject">Use Binding object</div>

		<div class="static" v-bind:class="object">use computed property</div>

		<p>Use array syntax</p>
		<div :class="[isCheck ? activeClass : '', errorClass]">There are two properties in array</div>
	</div>
</template>

<script>
    export default {
        name: "BindingInlineStyle",
		data() {
            return {
                isActive: true,
                hasError: true,
                error: null,
                classObject : { // use object
                    active: true,
                    'text-danger': true
                },

				isCheck: false,
				activeClass: 'active',
				errorClass: 'text-danger'
            }
		},
		computed: { // use computed property
            object : function() {
                return {
                    active			: this.isActive && !this.error,
                    'text-danger'	: this.error && this.error.type === 'fatal'
				}
			}
		}
    }
</script>

<style scoped>

	.active {
		font-size: 20px;
		color: greenyellow;
	}
	.text-danger {
		color: black;
	}


</style>