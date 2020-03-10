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
        // data: function () {
        //     return {
        //         message: 'hello',
        //         bar: 'def'
        //     }
        // },
        // created: function () {
        //     console.log("create from component!")  // => { message: "goodbye", foo: "abc", bar: "def" }
        //     console.log("data is merge from mixins :======"
		// 		+ this.message
		// 		+ '===' + this.foo
        //         + '===' + this.bar)  // => { message: "goodbye", foo: "abc", bar: "def" }
		//
        // },
        methods: {
            hello: function () {
                console.log('Hello from component!') //  sẽ được ưu tiên khi có cùng key trong 1 object trong mixins and
				// áp dụng cho cả components và directives
            }
        }
    }
</script>

<style scoped>

</style>