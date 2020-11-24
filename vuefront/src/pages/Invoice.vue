<template>
  <v-container class="px-10 my-15" fluid>
    <app-bar />
    <h1 class="cyan--text text--darken-2 font-weight-light">
      Customer Invoice No. 123456
    </h1>
    <div class="ctm">
      <v-container>
        <p class="mb-1"><label class="cusinfo">Customer Name</label>:{{singInv_cus.customerName}}</p>
        <p class="mb-1"><label class="cusinfo">Address1</label>:{{singInv_cus.address}}</p>
        <p class="mb-1"><label class="cusinfo">Address2</label>:{{singInv_cus.address_two}}</p>
        <p class="mb-1"><label class="cusinfo">Address3</label>:{{singInv_cus.address_three}}</p>
      </v-container>
    </div>
    <v-container fluid>
      <v-row>
        <v-col md="6" sm="12" xs12>
          <v-list>
            <v-list-item v-for="(item, i) in singInv_items" :key="i">
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
                v-for="(auth, i) in singInv_auths"
                :key="i"
                class="font-weight-bold"
              >
                {{ auth.name }}
              </v-list-item>
            </v-list>
            <v-spacer></v-spacer>
            <v-list>
              <v-list-item v-for="(auth, i) in singInv_auths" :key="i">
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
import { mapGetters } from "vuex";
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
  computed: mapGetters(["singInv_items", "singInv_auths", "singInv_cus"]),
  data() {
    return {
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
.cusinfo{
  width: 120px;
  display: inline-block;
}
@media only screen and (max-width: 600px) {
  div.container.px-10 {
    padding: 0.25rem !important;
  }
}
</style>
