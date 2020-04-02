// Register a global custom directive called `v-focus`
import vue from 'vue'

export const dynamicArgDirective = {
    bind: function (el, binding) {
        el.style.position = 'fixed';
        console.log(binding.arg.color);
        console.log(binding.arg.size);
        
        let color  = binding.arg.color;
        let size   = binding.arg.size;
        
        el.style.color = color;
        el.style.fontSize = size + 'px';
        el.style.marginLeft  = size + 'px';
    }
};

vue.directive("dynamicDirectiveArg", dynamicArgDirective);