<template>
  <v-card class="mt-5">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="createdInvs"
      :single-select="singleSelect"
      item-key="ref"
      show-select
      class="elevation-1"
      @input="$emit('onselectinvoice', selected)"
    >
      <template v-slot:top>
        <v-switch v-model="singleSelect" label="Single select" class="pa-3">
        </v-switch>
      </template>
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
  name: "CInvTable",
  computed: mapGetters(["createdInvs"]),
  data() {
    return {
      icons: [
        { name: "fa fa-user", url: "" },
        { name: "fa fa-envelope", url: "" },
        { name: "fa fa-check", url: "" },
        { name: "far fa-eye", url: "" },
      ],
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "Booking Ref",
          align: "start",
          sortable: false,
          value: "ref",
        },
        { text: "Consolidated", value: "consolidated" },
        { text: "Customer", value: "name" },
        { text: "Venue/Supplier", value: "type" },
        { text: "Value(ex/Inc VAT)", value: "transaction" },
        { text: "Date", value: "creatinv_at" },
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
</style>
