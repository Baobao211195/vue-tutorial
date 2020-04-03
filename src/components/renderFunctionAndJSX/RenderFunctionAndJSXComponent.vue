<script>
    export default {
        name: "RenderFunctionAndJSXComponent",
        /*
	    * Same as
	    * <template>
	    *   <div :class="{'is-red': isRed}">
	    *     <p>Example Text</p>
	    *   </div>
	    * </template>
	    */
		render(createElement) {
            return createElement('div',
                {
                    'class': this.isRed
                },
                [
                    createElement('p', 'Example Text')
                ]
            ) // syntax createElement(renderElement: String | Component, definition: Object, children: String | Array)
        },

        data() {
            return {
                isRed: true
				
            }
        }
    }

</script>

<style scoped>

</style>