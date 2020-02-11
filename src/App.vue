<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <demo1></demo1>
        <computed-properties></computed-properties>
        <syntax></syntax>
        <attribute></attribute>
        <UseExpression></UseExpression>
        <binding-inline-style/>
        <conditional-rendering></conditional-rendering>
        <list-rendering></list-rendering>
        <listening-events></listening-events>
        <form-input-bindings></form-input-bindings>
        <component-basic :title="msg1" :object="object" :arrs="arrs">Pass tile from app</component-basic>
        <pass-array-use-props
            v-for="post in arrs"
            v-bind:key="post.id"
            :post="post">
        </pass-array-use-props>
    </div>
</template>

<script>
    import demo1 from './components/demo1.vue';
    import ComputedProperties from "@/components/ComputedProperties";
    import syntax from "./components/syntax";
    import attribute from "./components/attribute";
    import UseExpression from "./components/UseExpression";
    import BindingInlineStyle from "./components/BindingInlineStyle";
    import ConditionalRendering from "./components/ConditionalRendering";
    import ListRendering from "./components/ListRendering";
    import ListeningEvents from "./components/ListeningEvents";
    import FormInputBindings from "./components/FormInputBindings";
    import ComponentBasic from "./components/ComponentBasic";
    import PassArrayUseProps from "./components/PassArrayUseProps";
    export default {
        name: 'app',
        components: {
            demo1,
            ComputedProperties,
            syntax,
            attribute,
            UseExpression,
            BindingInlineStyle,
            ConditionalRendering,
            ListRendering,
            ListeningEvents,
            FormInputBindings,
            ComponentBasic,
            PassArrayUseProps
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
                ]
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
