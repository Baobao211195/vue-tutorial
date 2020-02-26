<template>
	<div id="dynamic-component-demo">
		<button
			v-for="tab in tabs"
			v-bind:key="tab"
			:class="['tab-button', { active: currentTab === tab }]"
			v-on:click="currentTab = tab">
		</button>
		<keep-alive>
			<component v-bind:is="currentTabComponent" class="tab"></component>
		</keep-alive>
	</div>
</template>

<script>

    import TabArchive from "./TabArchive";
    import TabPosts from "./TabPosts";

    export default {
        name: "KeepAliveDynamicComponents",
        components: {
            TabArchive,
			TabPosts
        },
		data: function() {
            return {
                currentTab: "Posts",
                tabs: ["Posts", "Archive"]
			}
		},
        computed: {
            currentTabComponent: function() {
                return "tab-" + this.currentTab.toLowerCase();
            }
        }
    }
</script>

<style>
	.tab-button {
		padding: 6px 10px;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		border: 1px solid #ccc;
		cursor: pointer;
		background: #f0f0f0;
		margin-bottom: -1px;
		margin-right: -1px;
	}
	.tab-button:hover {
		background: #e0e0e0;
	}
	.tab-button.active {
		background: #e0e0e0;
	}
	.tab {
		border: 1px solid #ccc;
		padding: 10px;
	}
	.posts-tab {
		display: flex;
	}
	.posts-sidebar {
		max-width: 40vw;
		margin: 0;
		padding: 0 10px 0 0;
		list-style-type: none;
		border-right: 1px solid #ccc;
	}
	.posts-sidebar li {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		cursor: pointer;
	}
	.posts-sidebar li:hover {
		background: #eee;
	}
	.posts-sidebar li.selected {
		background: lightblue;
	}
	.selected-post-container {
		padding-left: 10px;
	}
	.selected-post > :first-child {
		margin-top: 0;
		padding-top: 0;
	}

</style>