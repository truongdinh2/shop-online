function page(path) {
    const componentUrl = () => import(`../views/${path}.vue`);
    return componentUrl;
}
export default [
    { path: "/:pathMatch(.*)*", name: "NotFound", component: page('NotFound') },
    {
        path: "/",
        name: "Home",
        // meta: {
        //     layout: "AuthLayout",
        //     requiresAuth: true,
        //     breadcrumb: "checkpoint_list_dm",
        // },
        component: page("Home"),
    },
    {
        path: "/a",
        name: "a",
        // meta: {
        //     layout: "AuthLayout",
        //     requiresAuth: true,
        //     breadcrumb: "checkpoint_list_dm",
        // },
        component: page("aTest"),
    },
    {
        path: "/login",
        name: "Login",
        // meta: {
        //     layout: "AuthLayout",
        //     requiresAuth: true,
        //     breadcrumb: "checkpoint_list_dm",
        // },
        component: page("Login"),
    },
    {
        path: "/pinia",
        name: "pinia",
        // meta: {
        //     layout: "AuthLayout",
        //     requiresAuth: true,
        //     breadcrumb: "checkpoint_list_dm",
        // },
        component: page("pinia"),
    },
];
