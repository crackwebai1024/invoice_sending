<template>
  <v-card class="mt-5">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="allInvoices"
      :singleSelect="false"
      item-key="ref"
      show-select
      class="elevation-1"
      @input="$emit('onselectbooking', selected)"
    >
      <template v-slot:item.id="{ item }">
        <v-row>
          <div class="circle" v-for="icon in icons" v-bind:key="icon.name">
            <router-link :to="icon.url">
              <v-icon small @click="getSingleInvoice(item.ref)">
                {{ icon.name }}
              </v-icon>
            </router-link>
          </div>
        </v-row>
      </template>
    </v-data-table>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
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
          value: "ref",
        },
        { text: "Type", value: "event_type" },
        { text: "Customer", value: "name" },
        { text: "Venue/Supplier", value: "type" },
        { text: "NET", value: "net" },
        { text: "Gross", value: "gross" },
        { text: "Marked Up", value: "gross" },
        { text: "Bill Due", value: "updated_at" },
        { text: "Actions", value: "id" },
      ],
    };
  },
  methods: {
    ...mapActions(["getSingleInvoice"]),
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
.green {
  background-color: green;
}
.gray {
  background-color: grey;
}
</style>
