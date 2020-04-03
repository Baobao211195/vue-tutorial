<script>

    export default {
        name: "RenderFunctionExample",
        render: function (createElement) {
            /**
			 * use v-if and v-for
			 *  <ul v-if="items.length">
					 <li v-for="item in items">{{ item.name }}</li>
					 </ul>
				 <p v-else>No items found.</p>
             */
            if (this.items.length) {
                return createElement('ul', this.items.map(item => createElement('li', item.name)));
			} else {
                return createElement('p', 'No items found');
			}
        },
		props: ['items']

    }
</script>

<style scoped>

</style>