import Vuex from "vuex";
import Vue from "vue";
import invoices from "./modules/invoices";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    invoices,
  },
});
