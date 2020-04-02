// Register a global custom directive called `v-focus`
import vue from 'vue'

export const demoDirective = {
    // When the bound element is inserted into the DOM...
    inserted: function () {
        // Focus the element
        //el.focus();
        console.log("this is insert hook");

    },
    // called only once, when the directive is first bound to the element.
    // This is where you can do one-time setup work.
    bind: function (el, binding, vnode) {
        // el: có thể sử dụng trực tiếp thao tác vs DOM
        // binding: Object chứa các properties
        /**
         * + name : tên của directive ko có prefix v-
         * + value: giá trị truyền và directives
         * + oldValue: giá trị trước đó (chỉ những biến trong hai hàm update và componentUpdated)
         * + expression: nó giống như 1 inline function dưới dạng string.
         * + arg: tham số truyền vào directive (eg: v-my-directive:name) -> arg là name ; arg có thể là dynamic để truyền từ ngoài vào v-mydirective:[argument]="value"
         * + modifiers: là một object (eg: v-my-directive.foo.bar => { foo: true, bar: true },
         * v-my-directive:oanh.foo.bar => oanh: { foo: true, bar: true })
         */
            // vnode: node ảo được tạo ra bởi Vue complier
            // oldVnode: node ảo trước đó, chỉ nằm trong 2 function là update và componentUpdate
        var s = JSON.stringify
        el.innerHTML =
            'name: '       + s(binding.name) + '<br>' +
            'value: '      + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: '   + s(binding.arg) + '<br>' +
            'modifiers: '  + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ')


    },
    // called when the bound element has been inserted into its parent node
    // (this only guarantees parent node presence, not necessarily in-document).
    update: function () {
        console.log("this is update hook");
    },
    // called after the containing component’s VNode and the VNodes of its children have updated.
    componentUpdated: function () {
        console.log("this is componentUpdate hook");
    },
    // called only once, when the directive is unbound from the element.
    unbind: function () {
        console.log("this is unbind hook");
    }

}
vue.directive('demo', demoDirective);