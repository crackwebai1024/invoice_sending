import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home";
import Invoice from "./pages/Invoice";
import CreatedInv from "./pages/CreatedInv";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/invoice",
            name: "invoice",
            component: Invoice,
        },
        {
            path: "/createdinv",
            name: "createdinv",
            component: CreatedInv,
        },
    ],
});