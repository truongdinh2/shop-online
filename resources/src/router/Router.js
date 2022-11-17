function page(path) {
    const componentUrl = () => import(`../views/${path}.vue`);
    return componentUrl;
}
export default [
    { path: "/:pathMatch(.*)*", name: "NotFound", component: page("NotFound") },
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
        path: "/pinia",
        name: "pinia",
        // meta: {
        //     layout: "AuthLayout",
        //     requiresAuth: true,
        //     breadcrumb: "checkpoint_list_dm",
        // },
        component: page("pinia"),
    },
    {
        path: "/profile",
        name: "Profile",
        // meta: {
        //     layout: "AuthLayout",
        //     requiresAuth: true,
        //     breadcrumb: "checkpoint_list_dm",
        // },
        component: page("Profile"),
    },
    {
        path: "/detail/:slug",
        name: "Detail",
        props: true,
        component: page("Detail"),
    },
    {
        path: "/cart",
        name: "Cart",
        component: page("Cart"),
    },
    {
        path: "/register",
        name: "RegisterForm",
        component: page("RegisterForm"),
    },
    {
        path: "/login",
        name: "LoginForm",
        component: page("LoginForm"),
    },
    {
        path: "/password_reset",
        name: "PasswordReset",
        component: page("PasswordReset"),
    },
    {
        path: "/password_reset/done",
        name: "PasswordResetDone",
        component: page("PasswordResetDone"),
    },
    {
        path: "/api/password_reset/confirm/:token?",
        name: "PasswordResetConfirm",
        component: page("PasswordResetConfirm"),
    },
    {
        path: "/pre-checkout",
        name: "PreCheckout",
        component: page("PreCheckout"),
    },
    {
        path: "/checkout",
        name: "Checkout",
        component: page("Checkout"),
    },
    {
        path: "/guest-form",
        name: "GuestForm",
        component: page("GuestForm"),
    },
];
