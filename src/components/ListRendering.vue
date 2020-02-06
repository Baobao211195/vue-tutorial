<template>
	<div>
		<ul>
			<li v-for="item in items" :key="item">
				{{item.message + item.name}}
			</li>
		</ul>
		<!--use index-->
		<ul>
			<li v-for="(item, index) in items" :key="item">
				{{index + '-' + item.message + '-' + item.name}}
			</li>
		</ul>
	</div>
	
</template>

<script>
    export default {
        name: "ListRendering",
		data() {
            return {
                items: [
                    {
                        message: 'message-1',
                        name: 'oanhpv'
                    },
                    {
                        message: 'message-2',
                        name: 'van'
                    },
                    {
                        message: 'message-3',
                        name: 'lam'
                    }
				]
			}
		}
    }
</script>

<style scoped>

</style>