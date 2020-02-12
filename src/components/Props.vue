<template>
	<div>
		<pre>
			Case 1: The prop is used to pass in an initial value;
			the child component wants to use it as a local data property afterwards
		</pre>
		<pre>
			Case 2 : The prop is passed in as a raw value that needs to be transformed (use in methods)
		</pre>
		<pre>
			{{cOb.name}} - {{cOb.age}}
			Counter : {{counter}}
		</pre>
	</div>
</template>

<script>
    export default {
        name: "Props",
        props: [
            'initialCounter',
            'size',
			'obj'
		],
        data: function () {
            return {
                counter: this.initialCounter, // Case 1
                object : () => {}  // re-assign for another variable
            }

        },
        computed: {
            cOb: function () {
                return this.obj
            },
            changeObject: function () {
                return this.obj // re-assign for another variable avoid reflect the change to parent component (apply for object and array )
            }
        }
    }
</script>

<style scoped>

</style>