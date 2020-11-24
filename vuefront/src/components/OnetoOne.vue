<template>
  <v-row justify="center">
    <v-dialog v-model="otodialog" persistent max-width="900">
      <v-card>
        <v-card-title class="d-flex justify-center">
          {{
            selected.length === 1
              ? "Email Individual Invoice"
              : "Bulk Email Invoices"
          }}
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-container
            fluid
            class="justify-space-between invd"
            :class="issingleuser ? 'd-flex' : 'd-none'"
            v-for="invoice in selected"
            :key="invoice.invoiceID"
          >
            <input type="checkbox" class="check" />
            <p v-for="value in invoice" class="mb-1" :key="value">
              {{ value }}
            </p>
          </v-container>
          <v-row :class="issingleuser ? '' : 'd-none'">
            <v-col md="6" v-for="item in currencies" :key="item.currency">
              <label>{{ item.currency }}</label>
              <v-select
                :items="item.values"
                :placeholder="item.placeholder"
                outlined
              ></v-select>
            </v-col>
          </v-row>

          <v-container
            v-for="invoice in selected"
            :class="issingleuser ? 'd-none' : ''"
            :key="invoice.invoiceID"
          >
            <v-container fluid class="d-flex justify-space-between invd">
              <input type="checkbox" class="check" />
              <p v-for="value in invoice" class="mb-1" :key="value">
                {{ value }}
              </p>
            </v-container>
            <v-row>
              <v-col md="6" v-for="item in currencies" :key="item.currency">
                <label>{{ item.currency }}</label>
                <v-select
                  :items="item.values"
                  :placeholder="item.placeholder"
                  outlined
                ></v-select>
              </v-col>
            </v-row>
          </v-container>

          <v-divider class="mt-4"></v-divider>
          <v-container class="px-2 pt-5">
            <label>Notes and feedback</label>
            <v-textarea
              placeholder="Enter your message(optional)"
              auto-grow
              outlined
              rows="3"
              row-height="25"
            ></v-textarea>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-container class="d-flex mr-4">
            <v-spacer></v-spacer>
            <v-btn class="blue-grey darken-1 white--text" text @click="close">
              Send Email
            </v-btn>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-icon
      class="clsicon"
      :class="otodialog ? 'd-block' : 'd-none'"
      @click="close"
      >fas fa-times
    </v-icon>
  </v-row>
</template>
<script>
export default {
  name: "OnetoOne",
  props: ["otodialog", "selected", "issingleuser"],
  methods: {
    close() {
      this.$emit("closeOtoOModal");
    },
  },
  data() {
    return {
      checkbox1: true,
      currencies: [
        {
          currency: "CC",
          placeholder: "*list of contacts from Customer",
          values: ["John", "Morad", "Kelly"],
        },
        {
          currency: "BCC",
          placeholder: "Stefan habit",
          values: ["Stefan", "Dogger", "Scott"],
        },
      ],
    };
  },
};
</script>
<style scoped>
.check {
  width: 24px;
  height: 24px;
}
.clsicon {
  position: fixed;
  top: calc(50vh - 300px);
  left: calc(50vw + 450px);
  display: flex;
  width: 18px;
  color: white;
  display: flex;
  justify-content: flex-end;
  z-index: 3000;
}
@media only screen and (max-width: 1080px) {
  .clsicon {
    left: calc(100vw - 40px);
    top: 20px;
  }
}
@media only screen and (max-width: 600px) {
  .invd {
    display: block !important;
  }
}
</style>
