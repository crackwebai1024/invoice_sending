<template>
  <div>
    <app-bar />
    <v-navigation-drawer
      color="blue-grey"
      darken-3
      class="display-1 hidden-xs-only"
      app
    ></v-navigation-drawer>
    <v-content>
      <v-container fluid class="pa-5">
        <v-card class="px-10 py-3 d-flex">
          <v-avatar color="blue-grey" size="50"></v-avatar>
          <h1 class="pl-5">Create Invoice</h1>
        </v-card>
        <InvMethod v-bind:selectitem="selected"/>
        <InvoiceTable v-on:onselectbooking="setSelected"/>
      </v-container>
    </v-content>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import AppBar from "../components/AppBar.vue";
import InvMethod from "../components/InvMethod.vue";
import InvoiceTable from "../components/InvoiceTable.vue";
export default {
  name: "Home",
  components: {
    InvMethod,
    InvoiceTable,
    AppBar,
  },
  data() {
    return{
      selected:[],
    }
  },
  methods:{
    ...mapActions(["fetchAllBookings"]),
    setSelected(selecteditem){
      this.selected = selecteditem;
    },
  },
  created() {
    this.fetchAllBookings();
  }
};
</script>
