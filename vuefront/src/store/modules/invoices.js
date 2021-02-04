import { invoiceData, creatInvData } from "./staticdata/invoicedata";
import axios from "axios";
import { baseUrl } from "./config";

const state = {
  invoices: [],
  createdinvs: [],
  alldata: [],
  invoice: {},
};

const getters = {
  allInvoices: (state) => state.invoices,
  createdInvs: (state) => state.createdinvs,
  singInv_items: (state) => [
    { name: "Venue/Supplier:", value: state.invoice.venue }, //"VENUE NAME"
    { name: "Arrival Date:", value: state.invoice.arrivalDate }, //"01/01/2020"
    { name: "Event:", value: state.invoice.eventName }, //"EVENT NAME"
    { name: "Agency Ref:", value: state.invoice.ref }, //"AGENCY REF"
    { name: "Currency:", value: "GBP" },
  ],
  singInv_auths: (state) => [
    { name: "A/C No:", value: "NHSENG" },
    { name: "Booker:", value: state.invoice.customerName }, //"Sarah Harrison"
    { name: "Venue Code:", value: "6973" },
  ],
  singInv_cus: (state) => ({
    customerName: state.invoice.customerName,
    address: state.invoice.address,
    address_two: state.invoice.address_two,
    address_three: state.invoice.address_three,
  }),
};

const actions = {
  // get all filtered booking based on search condition(date and customername)
  fetchFilteredBookings({ commit }, searchData) {
    let startDate = new Date(searchData.startDate);
    let endDate = new Date(searchData.endDate);
    console.log("in the store ==> ", startDate, endDate);
    let filteredData = state.allData.filter((item) => {
      let billingDate = new Date(item.updated_at);
      if (searchData.customerName === "") {
        if (billingDate > startDate && billingDate < endDate) return item;
      } else {
        let patt = new RegExp(searchData.customerName, "i");
        if (
          billingDate > startDate &&
          billingDate < endDate &&
          item.name.match(patt) !== null
        )
          return item;
      }
    });
    commit("setInvoices", filteredData);
  },

  // get all booking data from backend at table from joining
  // with booking and customer tables
  fetchAllBookings({ commit }) {
    let url = baseUrl + "/bookingcustomer";
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);

        // select invoice created data and non created data
        let createdData = [];
        let nonCreatedData = [];
        response.data.forEach((item) => {
          if (item.invoicestatus === 1) {
            item.consolidated = "con";
            item.transaction =
              "£" + parseInt(item.net) + "/" + "£" + item.gross;
            createdData.push(item);
          } else {
            nonCreatedData.push(item);
          }
        });

        // sort created data by latest date
        createdData.sort(function(a, b) {
          if (a.creatinv_at > b.creatinv_at) {
            return -1;
          } else if (a.creatinv_at < b.creatinv_at) {
            return 1;
          } else {
            return 0;
          }
        });
        // console.log(createdData);
        commit("setInvoices", nonCreatedData);
        commit("setAllData", nonCreatedData);
        commit("setCreatedInv", createdData);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // get single invoice by click view icon
  getSingleInvoice({ commit }, ref) {
    let idx = state.invoices.findIndex((item) => item.ref === ref);
    console.log(idx, state.invoices[idx]);
    let url = baseUrl + "/contact/" + state.invoices[idx].contact_id;
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        let singleinvoice = {};
        let booking = state.invoices[idx];
        singleinvoice.venue = booking.type;
        singleinvoice.arrivalDate = booking.primary_event_date;
        singleinvoice.eventName = booking.updated_at;
        singleinvoice.ref = booking.ref;
        singleinvoice.customerName = booking.name;
        singleinvoice.address = booking.address;
        singleinvoice.address_two = booking.address_two;
        singleinvoice.address_three =
          booking.town +
          " " +
          booking.county +
          " " +
          booking.country +
          " " +
          booking.postcode;
        console.log("singleinvoice ==> ", singleinvoice);
        commit("setInvoice", singleinvoice);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  // update database booking table with created invoice status
  createInvoiceStatus({ dispatch }, items) {
    let promises = [];
    let body = { status: true };
    items.forEach((item) => {
      let url = baseUrl + "/api/bookings/" + item.id;
      console.log(url);
      promises.push(
        axios
          .put(url, body)
          .then((response) => {
            console.log(response.data);
            return response.data;
          })
          .catch((err) => {
            console.log(err);
          })
      );
    });
    Promise.all(promises)
      .then((values) => {
        console.log("this is the result", values[0]);
        // dispatch('fetchAllBookings')
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

const mutations = {
  setInvoices: (state, invoices) => (state.invoices = invoices),
  setAllData: (state, allData) => (state.allData = allData),
  setInvoice: (state, invoice) => (state.invoice = invoice),
  setCreatedInv: (state, createdInv) => (state.createdinvs = createdInv),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
