// Register a global custom directive called `v-focus`

import  Vue  from  "vue";

Vue.filter("capitalize",  function(value)  {
    if  (!value)  {
        return  "";
    }
    return value.toString().toUpperCase();
    // return  value.charAt(0).toUpperCase()  +  value.slice(1);
});

Vue.filter("cutText",  function(value,  length,  suffix)  {
    if  (value.length  >  length)  {
        return  value.substring(0,  length)  +  suffix;
    }  else  {
        return  value;
    }
});



