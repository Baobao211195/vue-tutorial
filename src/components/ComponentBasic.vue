<template>
	<div>
		<pre>
			- data of a component must be a function => mỗi component có thể duy trì 1 object về data độc lập

			- Có hai cách đăng ký để sử dụng 1 component
				+ global :
				+ local:

			- Truyền data vào component con vs Props
				+ props là 1 custom attributes bạn có thể register vào 1 component

		</pre>
		<h1>{{title}}</h1>
		<h2>{{object.name}}</h2>
		<h2>{{object.age}}</h2>
	</div>
</template>

<script>
    export default {
        name: "ComponentBasic",
		props: ['title', 'object']
    }
</script>

<style scoped>

</style>