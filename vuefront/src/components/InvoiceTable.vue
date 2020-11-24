<template>
  <v-card class="mt-5">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="allInvoices"
      :singleSelect="true"
      item-key="invoiceID"
      show-select
      class="elevation-1"
    >
      <template v-slot:item.actions="{ item }">
        <v-row>
          <div class="circle" v-for="icon in icons" v-bind:key="icon.name">
            <router-link :to="icon.url">
              <v-icon small>{{ icon.name }}</v-icon>
            </router-link>
          </div>
        </v-row>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "InvoiceTable",
  computed: mapGetters(["allInvoices"]),
  data() {
    return {
      icons: [
        { name: "far fa-file-alt", url: "" },
        { name: "fas fa-exchange-alt", url: "" },
        { name: "far fa-eye", url: "/invoice" },
      ],
      selected: [],
      headers: [
        {
          text: "Booking Ref",
          align: "start",
          sortable: false,
          value: "invoiceID",
        },
        { text: "Type", value: "type" },
        { text: "Customer", value: "customerName" },
        { text: "Venue/Supplier", value: "vorsup" },
        { text: "NET", value: "net" },
        { text: "Gross", value: "gross" },
        { text: "Marked Up", value: "markup" },
        { text: "Arrival", value: "arrivalDate" },
        { text: "Bill Due", value: "billingDate" },
        { text: "Actions", value: "actions" },
      ],
    };
  },
};
</script>
<style>
.circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  margin-right: 5px;
  border-radius: 50%;
  border: solid 2px grey;
}
.circle:hover {
  background-color: #999;
}
</style>
