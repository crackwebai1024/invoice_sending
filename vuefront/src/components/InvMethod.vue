<template>
  <v-card class="mt-5">
    <v-card-title>
      <v-container class="d-flex align-center" fluid>
        <v-text-field
          outlined
          class="shrink"
          label="search invoices"
          prepend-inner-icon="fas fa-search"
          height="40px"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn color="blue-grey" @click="openModal">Create Invoices</v-btn>
      </v-container>
      <confirm v-bind:opendialog="dialog" v-on:closeModal="closeModal" />
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-row>
        <v-col sm="12" md="5">
          <p class="mb-0 ml-3">Date range</p>
          <v-row>
            <v-col md="6" sm="6">
              <Calendar v-on:on-date-change="setStartDate" />
            </v-col>
            <v-col md="6" sm="6">
              <Calendar v-on:on-date-change="setEndDate" />
            </v-col>
          </v-row>
          <p class="mb-0 ml-3">Reconciled Status</p>
          <v-container>
            <v-select
              :items="items"
              placeholder="All / Reconciled / Unreconciled"
              outlined
            ></v-select>
          </v-container>
        </v-col>
        <v-col sm="12" md="7">
          <p class="mb-2 ml-3">customer search</p>
          <v-text-field
            outlined
            placeholder="Customer Name"
            v-on:change="setCustomerName"
          />
          <v-container>
            <v-row>
              <v-container class="d-flex">
                <v-spacer></v-spacer>
                <v-btn color="blue-grey" class="right mt-5" @click="search">
                  Search
                </v-btn>
              </v-container>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-card-text>
    <p class="ma-0 d-flex justify-center red--text">
      {{ error }}
    </p>
  </v-card>
</template>
<script>
import Calendar from "./Calendar";
import { mapActions } from "vuex";
import Confirm from "./Confirm.vue";
export default {
  name: "InvMethod",
  components: {
    Calendar,
    Confirm,
  },
  props:["selectitem"],
  data: () => ({
    dialog: false,
    items: ["All", "Reconciled", "Unreconciled"],
    startDate: new Date().toISOString().substr(0, 10),
    endDate: new Date().toISOString().substr(0, 10),
    customerName: "",
    error: "",
  }),
  methods: {
    ...mapActions(["fetchFilteredBookings", "createInvoiceStatus"]),
    setStartDate(date) {
      this.startDate = date;
    },
    setEndDate(date) {
      this.endDate = date;
    },
    setCustomerName(customerName) {
      this.customerName = customerName;
    },
    search() {
      let intdate = {
        startDate: this.startDate,
        endDate: this.endDate,
        customerName: this.customerName,
      };
      this.fetchFilteredBookings(intdate);
    },
    openModal() {
      if(this.selectitem.length > 0){
        if(this.selectitem[0].invoicestatus === 1){
          this.error = "Invoice for this booking was already created."
          return;
        }
        this.dialog = true;
        this.error = "";
      } else {
        this.error = "You should select an item!";
      }
    },
    closeModal(create) {
      if(create){
        console.log("selectitem", this.selectitem);
        this.createInvoiceStatus(this.selectitem);
      }
      this.dialog = false;
    },
  },
  watch:{
    selectitem(){
      if(this.selectitem.length > 0){
        this.error = "";
      }
    }
  }
};
</script>
<style scoped>
.v-btn.blue-grey {
  width: 300px;
  height: 50px;
  color: white;
}
.v-container {
  padding: 5px !important;
}
</style>
<style lang="sass">
@import '../assets/sass/variables.scss'
</style>
