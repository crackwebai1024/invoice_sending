<template>
  <v-container fluid>
    <table>
      <thead>
        <tr>
          <th
            v-for="(item, i) in headers"
            :key="i"
            v-bind:class="['cyan--text', 'text--darken-2', item.class]"
          >
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in payments" :key="i" height="30px">
          <td
            class="text-center"
            :class="[i > 4 ? 'd-none' : '']"
            :rowspan="i === 4 ? 4 : 1"
            :colspan="i === 4 ? 6 : 1"
          >
            {{ item.qty }}
          </td>
          <td class="text-center" :class="[i >= 4 ? 'd-none' : '']">
            {{ item.days_nights }}
          </td>
          <td class="text-left" :class="[i >= 4 ? 'd-none' : '']">
            {{ item.description }}
          </td>
          <td class="text-right" :class="[i >= 4 ? 'd-none' : '']">
            {{ item.gross }}
          </td>
          <td class="text-center" :class="[i >= 4 ? 'd-none' : '']">
            {{ item.tax_rate }}
          </td>
          <td class="text-right" :class="[i >= 4 ? 'd-none' : '']">
            {{ item.net_amount }}
          </td>
          <td class="text-right">
            {{ item.tax_amount }}
          </td>
          <td class="text-right">
            {{ item.gross_amount }}
          </td>
        </tr>
      </tbody>
    </table>
    <v-list class="tablelist">
      <v-list-item v-for="(item, i) in payments" :key="i" class="tablelistitem">
        <v-list width="100%">
          <v-list-item v-for="(itemname, j) in headers" :key="j">
            {{ itemname.text }}
            <v-spacer></v-spacer>
            {{ item[itemname.value] }}
          </v-list-item>
        </v-list>
      </v-list-item>
    </v-list>
  </v-container>
</template>
<script>
export default {
  name: "SingleTable",
  data() {
    return {
      headers: [
        { text: "Qty", value: "qty" },
        { text: "Days/Nights", value: "days_nights" },
        { text: "Description", value: "description", class: "text-left" },
        { text: "Gross Rate", value: "gross", class: "text-right" },
        { text: "Tax Rate", value: "tax_rate" },
        { text: "Net Amount", value: "net_amount", class: "text-right" },
        { text: "Tax Amount", value: "tax_amount", class: "text-right" },
        { text: "Gross Amount", value: "gross_amount", class: "text-right" },
      ],
      payments: [
        {
          qty: 1,
          days_nights: 0,
          description: "Main Meeting Room",
          gross: "£150.00",
          tax_rate: "20.00%",
          net_amount: "£0.00",
          tax_amount: "£0.00",
          gross_amount: "£0.00",
        },
        {
          qty: 1,
          days_nights: 1,
          description: "CANCELLATION CHARGE",
          gross: "£150.00",
          tax_rate: "20.00%",
          net_amount: "£0.00",
          tax_amount: "£0.00",
          gross_amount: "£0.00",
        },
        {
          qty: 1,
          days_nights: 0,
          description: "LCD Projector & screen",
          gross: "£150.00",
          tax_rate: "20.00%",
          net_amount: "£0.00",
          tax_amount: "£0.00",
          gross_amount: "£0.00",
        },
        {
          qty: 25,
          days_nights: 0,
          description: "Tea/coffee serving only",
          gross: "£150.00",
          tax_rate: "20.00%",
          net_amount: "£0.00",
          tax_amount: "£0.00",
          gross_amount: "£0.00",
        },
        {
          rowspan: 4,
          colspan: 4,
          tax_amount: "£0.00",
          gross_amount: "£0.00",
        },
        {
          tax_amount: "£0.00",
          gross_amount: "£0.00",
        },
        {
          tax_amount: "£0.00",
          gross_amount: "£0.00",
        },
        {
          tax_amount: "£0.00",
          gross_amount: "£0.00",
        },
      ],
    };
  },
};
</script>
<style scoped>
.container {
  padding: 0px;
  margin: 0px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
.tablelist {
  display: none;
  font-size: 15px;
}
.tablelistitem {
  margin: 3px;
  border: solid 1px #aaa;
  border-radius: 5px;
  padding: 5px;
}
.v-list-item {
  min-height: 20px;
}
td,
th,
tr {
  padding: 5px;
  border: solid 1px #aaa;
  font-size: 13px;
}
@media only screen and (max-width: 600px) {
  table {
    display: none;
  }
  .tablelist {
    display: block;
  }
}
</style>
