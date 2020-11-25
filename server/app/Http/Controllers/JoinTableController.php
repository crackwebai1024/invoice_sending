<?php

namespace App\Http\Controllers;

use DB;

class JoinTableController extends Controller
{
    //
    public function joinBookingCustomer()
    {
        $bookingcustomer = DB::table('booking')
            ->leftjoin('customer', 'booking.customer_id', '=', 'customer.id')
            ->select('booking.id', 'booking.ref', 'booking.event_type', 'booking.event_name',
                'booking.type', 'booking.gross', 'booking.contact_id', 'booking.primary_event_date',
                'booking.invoicestatus', 'booking.updated_at', 'booking.creatinv_at', 'customer.name',
                'customer.address', 'customer.address_two', 'customer.town', 'customer.county',
                'customer.country', 'customer.postcode',
                DB::raw('booking.rate*0.01*booking.gross AS net'))
            ->get();
        $bookingcustomer->toArray();
        return response()->json($bookingcustomer);
    }
}
