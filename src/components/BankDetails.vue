<template>
  <div class="bankdet mt-5">
    <p class="ma-0 px-5 py-2 grey lighten-2">Bank Details</p>
    <v-divider />
    <v-container fluid>
      <v-list>
        <v-list-item v-for="item in details" v-bind:key="item.name">
          <p class="mb-1 d-flex">
            <label class="detname mb-0">{{ item.name }}</label>
            {{ item.value }}
          </p>
        </v-list-item>
      </v-list>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "BankDetails",
  data() {
    return {
      details: [
        { name: "Account Number", value: "123456789" },
        { name: "Sort Code", value: "123456" },
        { name: "Swift Code", value: "ABC123" },
        { name: "IBAN", value: "ABC123DEF456" },
        { name: "Registered VAT Number", value: "123 456 789" },
      ],
    };
  },
};
</script>
<style scoped>
.bankdet {
  width: 100%;
  border-radius: 5px;
  border: solid 1px #ccc;
  font-size: 13px;
}
.v-list-item {
  min-height: 25px;
}
.detname {
  display: flex;
  width: 200px;
}
</style>
