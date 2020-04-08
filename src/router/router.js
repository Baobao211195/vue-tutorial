import Router from 'vue-router'
import RouterDemoComponent from "../components/RouterDemoComponent";
// import App from "../App";

const router = new Router({
    router : [
        // { path: '/', component: App},
        { path: '/routerDemoComponent', component: RouterDemoComponent }
    ]
});
export default router;