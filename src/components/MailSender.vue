<template>
  <v-card class="mt-5">
    <v-container class="mailwrapper">
      <v-row class="mx-0">
        <v-text-field
          outlined
          class="shrink"
          placeholder="invoiceID"
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn color="blue-grey" class="right ml-5" @click="openOtoOModal">
          Email Selected
        </v-btn>
        <v-btn color="blue-grey" class="right ml-5" @click="openOtoMModal">
          Email All Invoices
        </v-btn>
      </v-row>
      <v-alert
        dense
        border="left"
        type="warning"
        :class="error ? '' : 'd-none'"
      >
        {{ error }}
      </v-alert>
      <OnetoOne
        :otodialog="otodialog"
        :selected="selected"
        :issingleuser="issingleuser"
        v-on:closeOtoOModal="closeOtoOModal"
      />
    </v-container>
  </v-card>
</template>
<script>
import OnetoOne from "./OnetoOne.vue";
export default {
  components: { OnetoOne },
  name: "MailSender",
  props: ["selected"],
  data() {
    return {
      otodialog: false,
      otmdialog: false,
      issingleuser: true,
      error: "",
    };
  },
  methods: {
    openOtoOModal() {
      if (this.selected.length > 0) {
        this.otodialog = true;
        this.issingleuser = true;
        this.error = "";
      } else {
        this.error = "Please select invoice to send";
      }
    },
    openOtoMModal() {
      if (this.selected.length > 0) {
        this.otodialog = true;
        this.issingleuser = false;
        this.error = "";
      } else {
        this.error = "Please select invoice to send";
      }
    },
    closeOtoOModal() {
      this.otodialog = false;
    },
  },
};
</script>
<style lang="sass">
@import '../assets/sass/mail.scss'
</style>
