<template>
	<div>
		<!--have to use :key to  track each node’s identity to maintaining state-->
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

		<!--use v-for to object-->
		<ul id="v-for-object" class="demo">
			<li v-for="(value, name, index) in object" :key="value">
				{{index + '-' + name + ':' + value}}
			</li>
		</ul>

		<!---->
		<ul>
			<li v-for="item in changedItems" :key="item">
				{{item.message + item.name}}
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
				],
				// use v-for vs object -> iterate properties in object
                object: {
                    title: 'How to do lists in Vue',
                    author: 'Jane Doe',
                    publishedAt: '2016-04-10'
                }
			}
		},
		computed : {
            // changedItems: function () {
			// 	const item = this.items.map(x => x.message + 'changed');
			// 	return item;
            // }
            changedItems: function () {
                const oanh = this.items.map(item => {
                    return  Object.assign({}, item, {
                        name : item.name + '-haha'
					});
                });
                return oanh;
            }
		}

    }

</script>

<style scoped>

</style>