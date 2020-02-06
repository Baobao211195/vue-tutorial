<template>
	<div>
		Use condition : <input type="checkbox" v-model="isActive">
		<h3 v-if="isActive">Use v-if</h3>
		<h3 v-else>Use v-else</h3>
	</div>
</template>
<template >
	<div>
		<div v-if="isLogin">
			<label>Username</label>
			<input placeholder="Enter your username" key="username-input">
		</div>
		<div v-else>
			<label>Email</label>
			<input placeholder="Enter your email address" key="email-input">
		</div>
		<input type="button" @click="hasLogin" value="toggle login">
	</div>
</template>

<script>
    export default {
        name: "ConditionalRendering",
		data() {
            return {
				isActive: false,
                isLogin: true
			}
		},
		methods: {
            hasLogin: function () {
				return this.isLogin = !this.isLogin;
            }
		}
    }
</script>

<style scoped>

</style>