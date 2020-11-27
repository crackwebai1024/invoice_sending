<?php

namespace App\Http\Controllers;

use DB;

class JoinTableController extends Controller
{
    //
    public function joinBookingCustomer()
    {
        // 'booking.primary_event_date DB::raw('select dateadd(day, -1, booking.updated_at) AS dateadd'),
        $bookingcustomer = DB::table('booking')
            ->leftjoin('customer', 'booking.customer_id', '=', 'customer.id')
            ->leftjoin('contacts', 'booking.contact_id', '=', 'contacts.id')
            ->select('booking.id', 'booking.ref', 'booking.event_type', 'booking.event_name',
                'booking.type', 'booking.gross', 'booking.contact_id',
                'booking.invoicestatus', 'booking.updated_at', 'booking.creatinv_at', 'customer.name',
                'customer.address', 'customer.address_two', 'customer.town', 'customer.county',
                'customer.country', 'customer.postcode', 'contacts.email',
                DB::raw('booking.rate*0.01*booking.gross AS net'))
            ->get();
        $bookingcustomer->toArray();
        // $test = DB::table('booking')->leftjoin('customer', 'booking.customer_id', '=', 'customer.id')->select('booking.updated_at')->get();
        // echo gettype($test);
        return response()->json($bookingcustomer);
    }
}
