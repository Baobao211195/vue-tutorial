<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <computed-properties></computed-properties>
        <syntax></syntax>
        <attribute></attribute>
        <UseExpression></UseExpression>
        <binding-inline-style/>
        <conditional-rendering></conditional-rendering>
<!--        <list-rendering></list-rendering>-->
        <listening-events></listening-events>
        <form-input-bindings></form-input-bindings>
        <component-basic :title="msg1" :object="object" :arrs="arrs">Pass tile from app</component-basic>
        <pass-array-use-props
            v-for="post in arrs"
            v-bind:key="post.id"
            :post="post"
            v-on:click-id="onClickFromChild">
        </pass-array-use-props>
<!--        <custom-input v-model="searchText"></custom-input>-->
        <dynamic-component></dynamic-component>
<!--        <props :object="object" :initialCounter="counter"></props>-->
        <prop-validation :objValidate="vObj"></prop-validation>
		<custom-v-model v-model="customVModel"></custom-v-model>
		<keep-alive-dynamic-components>
		</keep-alive-dynamic-components>
        <MixinsComponent></MixinsComponent>
        <slot-parent-component></slot-parent-component>
        <demo-directive-component></demo-directive-component>
    </div>
</template>

<script>
    import ComputedProperties from "@/components/ComputedProperties";
    import syntax from "./components/syntax";
    import attribute from "./components/attribute";
    import UseExpression from "./components/UseExpression";
    import BindingInlineStyle from "./components/BindingInlineStyle";
    import ConditionalRendering from "./components/ConditionalRendering";
    // import ListRendering from "./components/ListRendering";
    import ListeningEvents from "./components/ListeningEvents";
    import FormInputBindings from "./components/FormInputBindings";
    import ComponentBasic from "./components/ComponentBasic";
    import PassArrayUseProps from "./components/PassArrayUseProps";
    // import CustomInput from "./components/CustomInput";
    import DynamicComponent from "./components/DynamicComponent";
    // import Props from "./components/Props";
    import PropValidation from "./components/PropValidation";
    import CustomVModel from "./components/CustomEvents";
    import KeepAliveDynamicComponents from "./components/KeepAliveDynamicComponents";
    import MixinsComponent from "./components/MixinsComponent";
    import SlotParentComponent from "./components/slot/SlotParentComponent";
    import DemoDirectiveComponent from "./components/directive/DemoDirectiveComponent";
    export default {
        name: 'app',
        components: {
            ComputedProperties,
            syntax,
            attribute,
            UseExpression,
            BindingInlineStyle,
            ConditionalRendering,
            // ListRendering,
            ListeningEvents,
            FormInputBindings,
            ComponentBasic,
            PassArrayUseProps,
            // CustomInput,
            DynamicComponent,
            // Props,
            PropValidation,
            CustomVModel,
            KeepAliveDynamicComponents,
            MixinsComponent,
            SlotParentComponent,
            DemoDirectiveComponent
        },
        data() {
            return {
                msg1: 'hahhahahhahhahhahahhah', // pass variable
                object: { // pass an object
                    name: 'oanh',
                    age: 23
                },
                arrs : [
                    {id : 1, name: 'pham van oanh'},
                    {id : 2, name: 'van oanh'},
                    {id : 3, name: 'Nguyen van'}
                ],
                counter : 0,
                vObj : {
                    name: 'oanh',
                    age: 29
                },
                customVModel: true

            }
            
        },
        methods: {
            onClickFromChild: object => {
                alert(object.id + ' ' + object.name  + " has been selected !");
            }
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }


</style>
