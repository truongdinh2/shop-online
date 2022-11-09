import Vue from "vue";
import Router from "vue-router";
import routes from "./routers";

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});
export default router;