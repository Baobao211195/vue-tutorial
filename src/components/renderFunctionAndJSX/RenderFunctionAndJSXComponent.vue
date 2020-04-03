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
            // <div data-v-1d86e23e="" class="myClass customerClass" style="background-color: black;">
            return createElement('div',
                {
                    'class': {
                        'myClass': this.isRed,
						'customerClass': this.isRed
                    },
					'style' : {
                        backgroundColor: 'black'
					}
                },
                [
                    createElement('p', 'Example Text'),
                    createElement('ul', this.pod.map(obj => createElement('li', obj.name)))
                ]
            ) // syntax createElement(renderElement: String | Component, definition: Object, children: String | Array)
        },
        data() {
            return {
                isRed: true,
                pod: [
                    {
                        name: 'oanh'
                    },
                    {
                        name: 'van'
                    },
                    {
                        name: 'kem'
                    }
                ]
            }
        }
    }

</script>

<style scoped>

</style>