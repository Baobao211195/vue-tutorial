<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <demo1></demo1>
        <computed-properties></computed-properties>
        <syntax></syntax>
        <attribute></attribute>
        <UseExpression></UseExpression>
        <binding-inline-style/>
        <ConditionalRendering></ConditionalRendering>
        <list-rendering></list-rendering>
        <listening-events></listening-events>
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
            ListeningEvents
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
