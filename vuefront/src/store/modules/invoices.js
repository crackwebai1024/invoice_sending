import { invoiceData, creatInvData } from "./staticdata/invoicedata";
import axios from "axios";
import { baseUrl } from "./config";

const state = {
    invoices: [],
    createdinvs: creatInvData,
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
    })
};

const getFormattedDate = (date) => {
    let dates = date.split("/");
    let year = dates[2].length === 2 ? `20${dates[2]}` : dates[2];
    let month = dates[1];
    let day = dates[0];
    return [year, month, day];
};
const actions = {
    fetchFilteredBookings({ commit }, searchData) {
        let startDate = new Date(searchData.startDate);
        let endDate = new Date(searchData.endDate);
        console.log("in the store ==> ", startDate, endDate);
        let filteredData = state.allData.filter((item) => {
            let arrivalDate = new Date(item.primary_event_date);
            let billingDate = new Date(item.updated_at);
            if (searchData.customerName === "") {
                if (arrivalDate > startDate && billingDate < endDate)
                    return item;
            } else {
                if (arrivalDate > startDate && billingDate < endDate &&
                    searchData.customerName === item.name)
                    return item;
            }
        });
        commit("setInvoices", filteredData);
    },
    fetchAllBookings({ commit }) {
        let url = baseUrl + "/bookingcustomer"
        axios.get(url).then(response => {
            console.log(response.data);
            commit("setInvoices", response.data);
            commit("setAllData", response.data);
        }).catch(err => {
            console.log(err);
        });
    },
    getSingleInvoice({ commit }, ref) {
        let idx = state.invoices.findIndex((item) => (item.ref === ref));
        console.log(idx, state.invoices[idx]);
        let url = baseUrl + "/contact/" + state.invoices[idx].contact_id;
        axios.get(url).then(response => {
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
            singleinvoice.address_three = booking.town + " " + booking.county + " " + booking.country + " " + booking.postcode;
            console.log("singleinvoice ==> ", singleinvoice);
            commit("setInvoice", singleinvoice)
        }).catch(err => {
            console.log(err);
        })
    },
    createInvoiceStatus({ commit }, item) {
        console.log("this is in action");
        let idx = state.invoices.findIndex((booking) => {
            if (booking.ref === item[0].ref)
                return booking
        });
        console.log(idx);
        let url = baseUrl + "/api/bookings/" + state.invoices[idx].id;
        console.log(url);
        let body = { status: true };
        axios.put(url, body).then(response => {
            console.log(response.data);
        }).catch(err => {
            console.log(err);
        })
    }
};

const mutations = {
    setInvoices: (state, invoices) => (state.invoices = invoices),
    setAllData: (state, allData) => (state.allData = allData),
    setInvoice: (state, invoice) => (state.invoice = invoice),
};

export default {
    state,
    getters,
    actions,
    mutations,
};