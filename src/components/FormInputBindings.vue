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
		<pre>
			+ Use value binding v-bind
			+ Use v-bind -> know value non string
		</pre>
		<div id="value-binding">
			Radio : <input type="radio" v-model="picked" value="a">
			Checkbox : <input type="checkbox" v-model="toggle">
			<br>
			Radio-v-bind : <input type="radio" v-model="picked" v-bind:value="6">
			Checkbox-v-bind : <input type="checkbox" v-model="toggle1"  v-bind:value="23">

		</div>
		<div id="example-5">
			<input type="checkbox" v-model="isChecked" true-value="yes" false-value="no">
			<!--use .lazy-->
			<input v-model.lazy="msg">


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
				check: false,
                picked: '',
                toggle: false,
				toggle1: 0,
                isChecked: 'no',
                msg: 'pham van oanh'


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