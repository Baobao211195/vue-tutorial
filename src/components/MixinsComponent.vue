<template>
	<div>MixinsComponent</div>
</template>

<script>
	/*
	* Mixin hooks will be called before the component’s own hooks.
	* */
    const myMixin = {
        created: function () {
            this.hello()
        },
        methods: {
            hello: function () {
                console.log('hello from mixin!')
            }
        },
        data: function () {
            return {
                message: 'hello',
                foo: 'abc'
            }
        }
    };
    export default {
        name: "MixinsComponent",
        mixins: [myMixin],
        data: function () {
            return {
                message: 'hello',
                bar: 'def'
            }
        },
        created: function () {
            console.log("create from component!")  // => { message: "goodbye", foo: "abc", bar: "def" }
            console.log("data is merge from mixins :======"
				+ this.message
				+ '===' + this.foo
                + '===' + this.bar)  // => { message: "goodbye", foo: "abc", bar: "def" }

        },
        methods: {
            hello: function () {
                console.log('methods from component!')
            }
        }
    }
</script>

<style scoped>

</style>