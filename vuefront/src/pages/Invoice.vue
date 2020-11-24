<template>
  <v-container class="px-10 my-15" fluid>
    <app-bar />
    <h1 class="cyan--text text--darken-2 font-weight-light">
      Customer Invoice No. 123456
    </h1>
    <div class="ctm">
      <v-container>
        <p class="mb-1">Customer Name,</p>
        <p class="mb-1">Address1,</p>
        <p class="mb-1">Address2,</p>
        <p class="mb-1">Address3,</p>
      </v-container>
    </div>
    <v-container fluid>
      <v-row>
        <v-col md="6" sm="12" xs12>
          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-row>
                <v-col sm="3" class="font-weight-bold">{{ item.name }}</v-col>
                <v-col sm="3" class="font-weight-normal">
                  {{ item.value }}
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col md="6" xs12 class="right">
          <v-row>
            <v-list>
              <v-list-item
                v-for="(auth, i) in auths"
                :key="i"
                class="font-weight-bold"
              >
                {{ auth.name }}
              </v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <v-list>
              <v-list-item v-for="(auth, i) in auths" :key="i">
                {{ auth.value }}
              </v-list-item>
            </v-list>
          </v-row>
        </v-col>
      </v-row>
      <SingleTable />
      <bank-details />
      <v-btn class="mt-5">
        <router-link to="/"><v-icon>fas fa-reply</v-icon></router-link>
      </v-btn>
    </v-container>
  </v-container>
</template>
<script>
import SingleTable from "../components/SingleTable";
import BankDetails from "../components/BankDetails.vue";
import AppBar from "../components/AppBar.vue";
export default {
  name: "Customer",
  components: {
    SingleTable,
    BankDetails,
    AppBar,
  },
  data() {
    return {
      items: [
        { name: "Venue/Supplier:", value: "VENUE NAME" },
        { name: "Arrival Date:", value: "01/01/2020" },
        { name: "Event:", value: "EVENT NAME" },
        { name: "Agency Ref:", value: "AGENCY REF" },
        { name: "Currency:", value: "GBP" },
      ],
      auths: [
        { name: "A/C No:", value: "NHSENG" },
        { name: "Booker:", value: "Sarah Harrison" },
        { name: "Venue Code:", value: "6973" },
      ],
    };
  },
};
</script>
<style scoped>
.container > p {
  font-size: 14px;
}
.v-list-item {
  min-height: 20px;
  font-size: 14px;
}
.right {
  display: flex;
  align-items: center;
}
.col {
  padding: 0.25rem;
}
.col-sm-3 {
  width: 25%;
}
.ctm {
  max-width: 700px;
  margin-bottom: 30px;
  background-color: rgb(216, 213, 213);
  border: solid 2px rgb(155, 155, 155);
  min-height: 150px;
  padding: 15px;
}
@media only screen and (max-width: 600px) {
  div.container.px-10 {
    padding: 0.25rem !important;
  }
}
</style>
