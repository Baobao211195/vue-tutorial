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
                    // Same API as `v-bind:class`,
                    class: {
                        'myClass': this.isRed,
						'customerClass': this.isRed
                    },
                    // Same API as `v-bind:style`,
					style : {
                        backgroundColor: 'black'
					},
                    // Normal HTML attributes
                    attrs: {
                        id: 'foo'
                    },
                    // Component props
                    props: {
                        myProp: 'bar'
                    },
                    // DOM properties
                    domProps: {
                        innerHTML: 'baz'
                    },
                    // Event handlers are nested under `on`, though
                    // modifiers such as in `v-on:keyup.enter` are not
                    // supported. You'll have to manually check the
                    // keyCode in the handler instead.
                    // on: {
                    //     click: this.clickHandler
                    // },
                    // For components only. Allows you to listen to
                    // native events, rather than events emitted from
                    // the component using `vm.$emit`.
                    // nativeOn: {
                    //     click: this.nativeClickHandler
                    // },
                    // Custom directives. Note that the `binding`'s
                    // `oldValue` cannot be set, as Vue keeps track
                    // of it for you.
                    directives: [
                        {
                            //name: 'my-custom-directive',
                            value: '2',
                            expression: '1 + 1',
                            arg: 'foo',
                            modifiers: {
                                bar: true
                            }
                        }
                    ],

                    // Scoped slots in the form of
                    // { name: props => VNode | Array<VNode> }
                    scopedSlots: {
                        default: props => createElement('span', props.text)
                    },
                    // The name of the slot, if this component is the
                    // child of another component
                    slot: 'name-of-slot',
                    // Other special top-level properties
                    key: 'myKey',
                    ref: 'myRef',
                    // If you are applying the same ref name to multiple
                    // elements in the render function. This will make `$refs.myRef` become an
                    // array
                    refInFor: true
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
                // clickHandler: function() {
                //     console.log("click handler")
				// },
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