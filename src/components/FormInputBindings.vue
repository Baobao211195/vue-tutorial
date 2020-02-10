<template>
	<div>
		<input placeholder="input me" v-model="name">
		<h4>My name is : {{name}}</h4>

		<!--Multiline text-->
		<span>Multiline message is: </span>
		<p style="white-space: pre-line;">{{message}}</p>
		<br>
		<textarea v-model="message" placeholder="add multiple lines"></textarea>

		<!--for checkbox-->
		<input type="checkbox" id="checkbox" v-model="check">
		<label for="checkbox">{{ check }}</label>

		<div id="select-id">
			<select name="" id="" v-model="selected" v-on:change="changeSelected(selected)">
				<option   value="">Please select one</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>

		</div>
	</div>
</template>

<script>
    export default {
        name: "FormInputBindings",
		data() {
            return {
                // for input text
                name : '',
                message : '',

                selected: '',
				// for checkbox
				check: false
			}
		},
		methods: {
            changeSelected : function (selected) {
				alert("You are selecting : " + selected);
				this.selected = selected;
            }
		}

    }
</script>

<style scoped>

</style>